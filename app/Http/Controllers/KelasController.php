<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JadwalKelas;
use App\Models\Kelas;

class KelasController extends Controller
{
    public function store(Request $request)
    {
        // Validasi request jika diperlukan

        // Membuat instance objek model JadwalKelas dan menyimpan data ke dalam basis data
        $jadwalKelas = new JadwalKelas();
        $jadwalKelas->hari = $request->hari;
        $jadwalKelas->waktu = $request->waktu;
        $jadwalKelas->nama_ruangan = $request->nama_ruangan;
        $jadwalKelas->save();

        // Redirect ke halaman yang menampilkan daftar jadwal kelas
        return redirect()->route('jadwal-kelas');
    }

    public function create()
    {
        return view('kelas.create'); // Mengembalikan view untuk menampilkan formulir pembuatan kelas baru
    }

    public function destroy($id)
    {
        $kelas = Kelas::findOrFail($id); // Mencari kelas berdasarkan ID, dan akan menimbulkan exception jika tidak ditemukan
        $kelas->delete(); // Menghapus kelas dari basis data

        return redirect()->route('kelas.index'); // Mengarahkan pengguna kembali ke halaman daftar kelas
    }
}


