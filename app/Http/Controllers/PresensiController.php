<?php

namespace App\Http\Controllers;

use App\Models\presensi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PresensiController extends Controller
{
    public function index()
    {
//        thead, tbody, basePath, columns, pagination
        $presensis = presensi::with('jadwal', 'langganan.user', 'langganan.transaksi.detail_transaksi.program')->paginate('10');
        $thead = ['Nama Member', 'Nama Trainer', 'Nama Program', 'Tanggal', 'Jam'];
        $basePath = 'presensi';
        $columns = '1fr 1fr 1.5fr 1fr 1fr';
        $tbody = [];

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
        }
        return Inertia::render('Presensi/Index',[
            'thead' => $thead,
            'tbody' => $tbody,
            'basePath' => $basePath,
            'columns' => $columns,
            'pagination' => $presensis,
        ]);
    }
}
