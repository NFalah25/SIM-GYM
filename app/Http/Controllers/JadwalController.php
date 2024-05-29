<?php

namespace App\Http\Controllers;

use App\Models\jadwal;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JadwalController extends Controller
{
    public function index()
    {
        $jadwal = jadwal::all();

        $thead = ['Nomor', 'Hari', 'Waktu', 'Ruangan'];

        $tbody = $jadwal->map(function($item){
            return [
                'id_user' => $item->id_user,
                'hari' => $item->hari,
                'waktu_mulai' => $item->waktu_mulai,
                'ruangan' => $item->nama_ruangan,
                ];
        });

        return Inertia::render('Jadwals/Index',[
            'thead' => $thead,
            'tbody' => $tbody,
        ]);
    }

    public function create()
    {
        return Inertia::render('Jadwals/Create');
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
    public function show(jadwal $jadwal)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(jadwal $jadwal)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, jadwal $jadwal)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(jadwal $jadwal)
    {
        //
    }
}
