<?php

namespace App\Http\Controllers;

use App\Models\detail_transaksi;
use App\Models\langganan;
use App\Models\transaksi;
use Barryvdh\DomPDF\PDF;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransaksiController extends Controller
{
    /**
     * Display a listing of the resource.
     */

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

        if ($tanggal_mulai && $tanggal_selesai) {
            $transaksi = transaksi::with('user')
                ->whereBetween('tanggal_transaksi', [$tanggal_mulai, $tanggal_selesai])
                ->paginate(10);
        } else {
            $transaksi = transaksi::with('user')->paginate(10);
        }

        $tbody = [];

        foreach ($transaksi as $item) {
            $tbody[] = [
                'id' => $item->id,
                'Nama User' => $item->user->name,
                'Tanggal Transaksi' => $item->tanggal_transaksi,
                'Total Harga' => $this->formatCurrency($item->total_harga),
                'Tipe Transaksi' => $item->status,
            ];
        }

        $thead = ['Nama User', 'Tanggal Transaksi', 'Total Harga', 'Tipe Transaksi'];

        return Inertia::render('Transaksi/Index', [
            'thead' => $thead,
            'tbody' => $tbody,
            'pagination' => $transaksi,
            'mulai_tanggal' => $tanggal_mulai,
            'sampai_tanggal' => $tanggal_selesai,
            'basePath' => 'transaksi',
        ]);
    }

    public function cetak_pdf(Request $request)
    {
        $tanggal_mulai = $request->input('mulai_tanggal');
        $tanggal_selesai = $request->input('sampai_tanggal');

        if ($tanggal_mulai && $tanggal_selesai) {
            $transaksi = transaksi::with('user')
                ->whereBetween('tanggal_transaksi', [$tanggal_mulai, $tanggal_selesai])
                ->get();
        } else {
            $transaksi = transaksi::with('user')->get();
        }
        $thead = ['Nama User', 'Tanggal Transaksi', 'Total Harga', 'Tipe Transaksi'];
        $tbody = [];

        foreach ($transaksi as $item) {
            $tbody[] = [
                'nama' => $item->user->name,
                'tanggal' => $item->tanggal_transaksi,
                'harga' => $this->formatCurrency($item->total_harga),
                'tipe' => $item->status,
            ];
        }

        return Inertia::render('Transaksi/PrintPDF', [
            'thead' => $thead,
            'tbody' => $tbody,
        ]);
    }

    public function detail_transaksi($id){
        $detail = detail_transaksi::with('transaksi', 'program', 'transaksi.user', 'transaksi.langganan')->where('id', $id)->get();

        $detail_pembelian = [];
        foreach ($detail as $item) {
            $id_transaksi = $item->id_transaksi;
            $langganan = $item->transaksi->langganan->firstWhere('id_transaksi', $id_transaksi);
            $detail_pembelian[] = [
                'id_program' => 'P-'. $item->program->id,
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


        return Inertia::render('Transaksi/DetailTransaksi',[
            'detail_pembelian' => $detail_pembelian,
            'detail_pembayaran' => $detail_pembayaran,
        ]);
    }
}
