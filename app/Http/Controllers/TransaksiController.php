<?php

namespace App\Http\Controllers;

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
        
        if(auth()-> user()->role === 'member'){
        if ($tanggal_mulai && $tanggal_selesai) {
            $transaksi = transaksi::with('user')
                ->where('id_user',auth()->user()->id)
                ->whereBetween('tanggal_transaksi', [$tanggal_mulai, $tanggal_selesai])
                ->paginate(10);
        } else {
            $transaksi = transaksi::with('user')->where('id_user',auth()->user()->id)->paginate(10);
        }
        } else{
            if ($tanggal_mulai && $tanggal_selesai) {
                $transaksi = transaksi::with('user')
                    ->whereBetween('tanggal_transaksi', [$tanggal_mulai, $tanggal_selesai])
                    ->paginate(10);
            } else {
                $transaksi = transaksi::with('user')->paginate(10);
                
            }
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
        return Inertia::render('Transaksi/DetailTransaksi');
    }
}
