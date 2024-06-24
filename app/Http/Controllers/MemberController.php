<?php

namespace App\Http\Controllers;

use App\Models\jadwal;
use App\Models\Langganan;
use App\Models\Presensi;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MemberController extends Controller
{
    public function getTodayPresensiStatus($id_langganan)
    {
        $today = Carbon::today()->toDateString();

        $presensiExists = Presensi::where('id_langganan', $id_langganan)
            ->whereDate('created_at', $today)
            ->exists();

        return $presensiExists;
    }
    public function index()
    {
        $userId = Auth::user()->id; // ID user statis untuk contoh ini
        $today = Carbon::today()->toDateString();

        // Ambil data langganan untuk user ini yang masih aktif
        $langganans = Langganan::with('transaksi')
            ->where('id_user', $userId)
            ->where('tanggal_akhir', '>=', $today)
            ->get();

        if (Auth::user()->role == 'member') {
            $data = $langganans->map(function ($langganan) use ($today) {
                $trainerName = 'N/A';

                foreach ($langganan->transaksi->jadwals as $jadwal) {
                    if ($jadwal->user) {
                        $trainerName = $jadwal->user->name;
                        break;
                    }
                }
                return [
                    'id' => $langganan->id,
                    'program' => $langganan->transaksi->nama_program,
                    'trainer' => $trainerName,
                    'presensi' => $this->getTodayPresensiStatus($langganan->id),
                ];
            });
        }
        $jadwal = jadwal::with('program')->where('id_user', Auth::user()->id)->get();

        if (Auth::user()->role == 'trainer') {
            $data = $jadwal->map(function ($jadwal) use ($today) {
                return [
                    'id' => $jadwal->id,
                    'program' => $jadwal->program->nama_program,
                    'waktu' => Carbon::parse($jadwal->waktu_mulai)->format('H.i'),
                    'hari' => $jadwal->hari,
                    'ruangan' => $jadwal->nama_ruangan,
                    'hari_ini' => Carbon::now()->format('l'),
                ];
            });
        }

        return Inertia::render('Member/Home', ['data' => $data]);
    }
}
