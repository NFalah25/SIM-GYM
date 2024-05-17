<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JadwalKelas; 

class JadwalKelasController extends Controller
{
    public function index()
    {
        $jadwal_kelas = JadwalKelas::all(); // Mengambil semua data jadwal kelas
        return view('jadwal-kelas', compact('jadwal_kelas'));
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
