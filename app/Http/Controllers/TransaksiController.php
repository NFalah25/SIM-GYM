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
                'Nama User' => $item->user->name,
                'Tanggal Transaksi' => $item->tanggal_transaksi,
                'Total Harga' => $item->total_harga,
                'Tipe Transaksi' => $item->tipe_transaksi,
            ];
        }

        $thead = ['Nama User', 'Tanggal Transaksi', 'Total Harga', 'Tipe Transaksi'];

        return Inertia::render('Transaksi/Index', [
            'thead' => $thead,
            'tbody' => $tbody,
            'pagination' => $transaksi,
            'mulai_tanggal' => $tanggal_mulai,
            'sampai_tanggal' => $tanggal_selesai,
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
                'harga' => $item->total_harga,
                'tipe' => $item->tipe_transaksi,
            ];
        }

        return Inertia::render('Transaksi/PrintPDF', [
            'thead' => $thead,
            'tbody' => $tbody,
        ]);
    }
}
