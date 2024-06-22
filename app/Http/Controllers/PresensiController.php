<?php

namespace App\Http\Controllers;

use App\Models\presensi;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PresensiController extends Controller
{
    public function index()
    {
        //        thead, tbody, basePath, columns, pagination
        if (Auth::user()->role === 'admin') {
            $presensis = presensi::with('jadwal', 'langganan.user', 'langganan.transaksi.detail_transaksi.program')
                ->paginate('10');
        } else if (Auth::user()->role === 'trainer') {
            $presensis = presensi::with('jadwal', 'langganan.user', 'langganan.transaksi.detail_transaksi.program')
                ->whereHas('jadwal', function ($query) {
                    $query->where('id_user', Auth::user()->id);
                })
                ->paginate('10');
        } else {
            $presensis = presensi::with('jadwal', 'langganan.user', 'langganan.transaksi.detail_transaksi.program')
                ->whereHas('langganan', function ($query) {
                    $query->where('id_user', Auth::user()->id);
                })
                ->paginate('10');
        }

        $thead = ['Member Name', 'Trainer Name', 'Program Name', 'Date', 'Time'];

        $theadTrainer = ['Member Name', 'Program Name', 'Date', 'Time', 'Action'];

        $basePath = 'presensi';
        $columns = '1fr 1fr 1.5fr 1fr 1fr';
        $tbody = [];
        $tbodyTrainer = [];

        foreach ($presensis as $item) {
            // Initialize a variable to hold program names
            $programNames = [];

            // Iterate through each detail_transaksi to get the program names
            foreach ($item->langganan->transaksi->detail_transaksi as $detail) {
                $programNames[] = $detail->program->nama_program;
            }

            // Join the program names into a single string, separated by commas
            $programNamesString = implode(', ', $programNames);

            // Add the formatted data to the tbody array
            $tbody[] = [
                'nama' => $item->langganan->user->name,
                'trainer' => $item->jadwal->user->name,
                'program' => $programNamesString,
                'tanggal' => $item->created_at->format('d-m-Y'),
                'jam' => $item->created_at->format('H:i'),
            ];

            $tbodyTrainer[] = [
                'nama' => $item->langganan->user->name,
                'program' => $programNamesString,
                'tanggal' => $item->created_at->format('d-m-Y'),
                'jam' => $item->created_at->format('H:i'),
            ];
        }
        return Inertia::render('Presensi/Index', [
            'theadTrainer' => $theadTrainer,
            'thead' => $thead,
            'tbodyTrainer' => $tbodyTrainer,
            'tbody' => $tbody,
            'basePath' => $basePath,
            'columns' => $columns,
            'pagination' => $presensis,
        ]);
    }

    public function showProfile($id)
    {
        $user = User::findOrFail($id);

        return Inertia::render('Presensi/ShowProfile', [
            'user' => $user
        ]);
    }


    // ambil id trainer?
    public function create()
    {
        return Inertia::render('Presensi/Create');
    }
}
