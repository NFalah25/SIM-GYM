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
        //ambil nama user
        $user = $transaksi->pluck('user.first_name');
        //ambil tanggal_transaksi
        $tanggal_transaksi = $transaksi->pluck('tanggal_transaksi');
        //ambil total_harga
        $total_harga = $transaksi->pluck('total_harga');
        //ambil tipe_transaksi
        $tipe_transaksi = $transaksi->pluck('tipe_transaksi');
        // jadikan semua variable di atas menjadi satu array
        $tbody = $user->map(function($item, $key) use ($tanggal_transaksi, $total_harga, $tipe_transaksi){
            return [
                'user' => $item,
                'tanggal_transaksi' => $tanggal_transaksi[$key],
                'total_harga' => $total_harga[$key],
                'tipe_transaksi' => $tipe_transaksi[$key],
            ];
        });


        $thead = ['Nama User', 'Tanggal Transaksi', 'Total Harga', 'Tipe Transaksi'];

        return Inertia::render('Transaksi/Index',[
            'thead' => $thead,
            'tbody' => $tbody,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(transaksi $transaksi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(transaksi $transaksi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, transaksi $transaksi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(transaksi $transaksi)
    {
        //
    }
}
