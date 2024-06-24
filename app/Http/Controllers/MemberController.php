<?php

namespace App\Http\Controllers;

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
            // dd($langganans);

        $data = $langganans->map(function ($langganan) use ($today) {
            return [
                'id' => $langganan->id,
                'program' => $langganan->transaksi->nama_program,
                'presensi' => $this->getTodayPresensiStatus($langganan->id),
            ];
        });

        // dd($data);

        return Inertia::render('Member/Home', ['data' => $data]);
    }
}
