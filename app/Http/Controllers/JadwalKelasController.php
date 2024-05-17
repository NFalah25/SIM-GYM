<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JadwalKelas;
use Inertia\Inertia;

class JadwalKelasController extends Controller
{
    public function index()
    {
        //ambil data terakhir
        $jadwal_kelas = JadwalKelas::latest()->get();
        // return view('jadwal-kelas', compact('jadwal_kelas'));
        // dd($jadwal_kelas);
        return Inertia::render('JadwalKelas', [
            'jadwal' => $jadwal_kelas,
        ]);
    }

    public function create()
    {

    }

    public function store(Request $request)
{

    JadwalKelas::create([
        'hari' => $request->hari,
        'waktu' => $request->waktu,
        'nama_ruangan' => $request->nama_ruangan,
    ]);


}

}
