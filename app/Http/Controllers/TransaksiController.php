<?php

namespace App\Http\Controllers;

use App\Models\detail_transaksi;
use App\Models\langganan;
use App\Models\transaksi;
use Carbon\Carbon;
// use Barryvdh\DomPDF\PDF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Midtrans\Config;
use Midtrans\Snap;
use Midtrans\Notification;
use Illuminate\Support\Facades\Validator;

use PDF;

class TransaksiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
        // Set midtrans configuration
        Config::$serverKey = config('services.midtrans.server_key');
        Config::$isProduction = config('services.midtrans.is_production');
        Config::$isSanitized = config('services.midtrans.is_sanitized');
        Config::$is3ds = config('services.midtrans.is_3ds');
    }

    private function formatCurrency($value)
    {
        return 'Rp ' . number_format($value, 0, ',', '.');
    }

    public function index(Request $request)
    {
        $tanggal_mulai = $request->input('mulai_tanggal');
        $tanggal_selesai = $request->input('sampai_tanggal');
        //ambil relasi user dari transaksi
        //        $transaksi = transaksi::with('user')->get();

        if (auth()->user()->role === 'member') {
            if ($tanggal_mulai && $tanggal_selesai) {
                $transaksi = transaksi::with('user', 'program')
                    ->where('id_user', auth()->user()->id)
                    ->whereBetween('tanggal_transaksi', [$tanggal_mulai, $tanggal_selesai])
                    ->paginate(10);
            } else {
                $transaksi = transaksi::with('user', 'program')->where('id_user', auth()->user()->id)->paginate(10);
            }
        } else {
            if ($tanggal_mulai && $tanggal_selesai) {
                $transaksi = transaksi::with('user', 'program')
                    ->whereBetween('tanggal_transaksi', [$tanggal_mulai, $tanggal_selesai])
                    ->paginate(10);
            } else {
                $transaksi = transaksi::with('user', 'program')->paginate(10);
            }
        }

        $tbody = [];
        // dd($transaksi);

        if (Auth::user()->role === 'admin') {
            foreach ($transaksi as $item) {
                $tbody[] = [
                    'id' => $item->id,
                    'nama_user' => $item->user->name,
                    'Tanggal Transaksi' => $item->tanggal_transaksi,
                    'Total Harga' => $this->formatCurrency($item->total_harga),
                    'status' => $item->status,

                ];
            }
        } else {
            foreach ($transaksi as $item) {
                $tbody[] = [
                    'id' => $item->id,
                    'nama_program' => $item->program->nama_program,
                    'Tanggal Transaksi' => $item->tanggal_transaksi,
                    'Total Harga' => $this->formatCurrency($item->total_harga),
                    'status' => $item->status,
                ];
            }
        }

        if (Auth::user()->role === 'admin') {
            $thead = ['User Name', 'Transaction Date', 'Total Price', 'Transaction Type'];
        } else {
            $thead = ['Nama Program', 'Tanggal Transaksi', 'Total Harga', 'Tipe Transaksi'];
        }
        return Inertia::render('Transaksi/Index', [
            'thead' => $thead,
            'tbody' => $tbody,
            'pagination' => $transaksi,
            'mulai_tanggal' => $tanggal_mulai,
            'sampai_tanggal' => $tanggal_selesai,
            'basePath' => 'transaksi',
        ]);
    }

    public function cetak_pdf($id)
    {
        // $tanggal_mulai = $request->input('mulai_tanggal');
        // $tanggal_selesai = $request->input('sampai_tanggal');

        // if ($tanggal_mulai && $tanggal_selesai) {
        //     $transaksi = transaksi::with('user')
        //         ->whereBetween('tanggal_transaksi', [$tanggal_mulai, $tanggal_selesai])
        //         ->get();
        // } else {
        //     $transaksi = transaksi::with('user')->get();
        // }
        // $thead = ['Nama User', 'Tanggal Transaksi', 'Total Harga', 'Tipe Transaksi'];
        // $tbody = [];

        // foreach ($transaksi as $item) {
        //     $tbody[] = [
        //         'nama' => $item->user->name,
        //         'tanggal' => $item->tanggal_transaksi,
        //         'harga' => $this->formatCurrency($item->total_harga),
        //         'tipe' => $item->status,
        //     ];
        // }

        $detail = detail_transaksi::with('transaksi', 'program', 'transaksi.user', 'transaksi.langganan')->where('id_transaksi', $id)->get();

        $detail_pembelian = [];
        foreach ($detail as $item) {
            $id_transaksi = $item->id_transaksi;
            $langganan = $item->transaksi->langganan->firstWhere('id_transaksi', $id_transaksi);
            if ($item->transaksi->status == 'Paid') {
                $lunas = 'Lunas';
            } else {
                $lunas = 'Belum Lunas';
            }
            $detail_pembelian[] = [
                'id_program' => 'P-' . $item->program->id,
                'nama_program' => $item->program->nama_program,
                'harga' => $this->formatCurrency($item->transaksi->total_harga),
                'durasi' => $item->program->durasi,
                'tanggal_mulai' => Carbon::parse($langganan->tanggal_mulai)->format('j F Y'),
                'tanggal_akhir' => Carbon::parse($langganan->tanggal_akhir)->format('j F Y'),
                'payment_type' => $item->transaksi->payment_type,
                'status' => $lunas,
            ];
        }

        // dd($detail_pembelian);


        $detail_pembayaran = [];
        foreach ($detail as $item) {
            $detail_pembayaran[] = [
                'id_transaksi' => $item->id_transaksi,
                'nama_user' => $item->transaksi->user->name,
                'tanggal_transaksi' => $item->transaksi->tanggal_transaksi,
                'alamat' => $item->transaksi->user->address,
                'total_harga' => $this->formatCurrency($item->transaksi->total_harga),
                'status' => $item->transaksi->status,
            ];
        }

        // dd($detail_pembelian, $detail_pembayaran);



        // return Inertia::render('Transaksi/PrintPDF', [
        //     'detail_pembelian' => $detail_pembelian,
        //     'detail_pembayaran' => $detail_pembayaran,
        // ]);
        // dom pdf
        $pdf = PDF::loadView('Invoice', [
            'detail_pembelian' => $detail_pembelian,
            'detail_pembayaran' => $detail_pembayaran,
        ]);
        //return render
        return $pdf->stream('invoice.pdf');
    }
    public function detail_transaksi($id)
    {
        $transaksi = transaksi::with('user')->where('id', $id)->first();

        if (detail_transaksi::where('id_transaksi', $id)->doesntExist()) {

            detail_transaksi::create([
                'id_transaksi' => $id,
                'id_program' => $transaksi->id_program,
                'jumlah' => $transaksi->total_harga,
            ]);
        }
        $detail = detail_transaksi::with('transaksi', 'program', 'transaksi.user', 'transaksi.langganan')->where('id_transaksi', $id)->get();
        // dd($detail);

        $detail_pembelian = [];
        foreach ($detail as $item) {
            $id_transaksi = $item->id_transaksi;
            $langganan = $item->transaksi->langganan->firstWhere('id_transaksi', $id_transaksi);
            $detail_pembelian[] = [
                'id_program' => 'P-' . $item->program->id,
                'nama_program' => $item->program->nama_program,
                'harga' => $this->formatCurrency($item->transaksi->total_harga),
                'durasi' => $item->program->durasi,
                'tanggal_mulai' => $langganan->tanggal_mulai,
                'tanggal_akhir' => $langganan->tanggal_akhir,
            ];
        }


        $detail_pembayaran = [];
        foreach ($detail as $item) {
            $detail_pembayaran[] = [
                'id_transaksi' => $item->id_transaksi,
                'nama_user' => $item->transaksi->user->name,
                'tanggal_transaksi' => $item->transaksi->tanggal_transaksi,
                'alamat' => $item->transaksi->user->address,
                'total_harga' => $this->formatCurrency($item->transaksi->total_harga),
                'status' => $item->transaksi->status,
            ];
        }

        return Inertia::render('Transaksi/DetailTransaksi', [
            'detail_pembelian' => $detail_pembelian,
            'detail_pembayaran' => $detail_pembayaran,
        ]);
    }

    public function submitPurchase(Request $request)
    {

        // Validasi request
        $validator = Validator::make($request->all(), [
            'total_harga' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()->first(),
            ], 422);
        }

        // Buat transaksi baru
        $transaksi = transaksi::create([
            'total_harga' => $request->total_harga,
            'id_user' => Auth::user()->id, // Sesuaikan dengan ID user yang sedang login
            'tanggal_transaksi' => now(),
            'status' => 'Pending',
            "id_program" => $request->id_program,
            "nama_program" => $request->nama_program,
            "durasi" => $request->durasi,
        ]);

        // Setup payload untuk dikirim ke Midtrans
        $payload = [
            'transaction_details' => [
                'order_id' => $transaksi->id,
                'gross_amount' => $transaksi->total_harga,
            ],
            'customer_details' => [
                'first_name' => Auth::user()->first_name,
                'last_name' => Auth::user()->last_name,
                'email' => Auth::user()->email,
                'phone' => Auth::user()->phone_number,
            ],
            // Sesuaikan dengan data pelanggan jika diperlukan
        ];

        // detail pembayaran

        try {
            // Dapatkan Snap Token dari Midtrans
            $snapToken = Snap::getSnapToken($payload);

            // Simpan Snap Token ke dalam transaksi
            $transaksi->snap_token = $snapToken;
            $transaksi->save();


            return response()->json([
                'status' => 'success',
                'snap_token' => $snapToken,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function callback(Request $request)
    {
        try {
            $notification = new Notification();
            $transactionStatus = $notification->transaction_status;
            $orderId = $notification->order_id;

            // Cari transaksi berdasarkan ID
            $transaksi = Transaksi::find($orderId);

            if ($transaksi) {
                if ($transactionStatus == 'capture') {
                    if ($notification->payment_type == 'credit_card') {
                        if ($notification->fraud_status == 'challenge') {
                            $transaksi->status = 'Challenge';
                        } else {
                            $transaksi->status = 'Paid';
                        }
                    }
                } elseif ($transactionStatus == 'settlement') {
                    $transaksi->status = 'Paid';
                } elseif ($transactionStatus == 'pending') {
                    $transaksi->status = 'Pending';
                } elseif ($transactionStatus == 'deny') {
                    $transaksi->status = 'Deny';
                } elseif ($transactionStatus == 'expire') {
                    $transaksi->status = 'Expire';
                } elseif ($transactionStatus == 'cancel') {
                    $transaksi->status = 'Cancel';
                }

                $transaksi->payment_type = $notification->payment_type;

                // Simpan perubahan ke database
                $transaksi->save();

                if ($transaksi->status == 'Paid') {
                    $tanggalMulai = now();
                    $tanggalAkhir = now()->addDays($transaksi->durasi);

                    langganan::create([
                        'id_user' => $transaksi->id_user,
                        'id_transaksi' => $transaksi->id,
                        'tanggal_mulai' => $tanggalMulai,
                        'tanggal_akhir' => $tanggalAkhir,

                    ]);
                }
            }
        } catch (\Exception $e) {
            // Tangani kesalahan
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }

        return response()->json(['status' => 'success']);
    }
}
