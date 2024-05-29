<?php

namespace App\Http\Controllers;

use App\Models\transaksi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransaksiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //ambil relasi user dari transaksi
        $transaksi = transaksi::with('user')->get();

        $tbody = [];

        foreach ($transaksi as $item) {
            $tbody[] = [
                'Nama User' => $item->user->name,
                'Tanggal Transaksi' => $item->created_at->format('Y-m-d'),
                'Total Harga' => $item->total_harga,
                'Tipe Transaksi' => $item->tipe_transaksi,
            ];
        }

        $thead = ['Nama User', 'Tanggal Transaksi', 'Total Harga', 'Tipe Transaksi'];

        return Inertia::render('Transaksi/Index',[
            'thead' => $thead,
            'tbody' => $tbody,
        ]);
    }

    // public function cetak_pdf()
    // {
    //     $transaksi = transaksi::with('user')->get();

    //     $pdf = PDF::loadview('transaksi_pdf', ['transaksi' => $transaksi]);
    //     return $pdf->download('laporan-transaksi-pdf');
    // }
}
