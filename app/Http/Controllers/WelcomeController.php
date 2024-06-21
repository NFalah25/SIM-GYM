<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Program;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index(Program $program)
    {
        $program = Program::with('jadwal')->get();
        $body = [];
        foreach ($program as $key => $value) {

            $jadwal = [];
            foreach ($value->jadwal as $key => $isi) {
                $jadwal[] = $isi->hari;
            }

            $hariString = implode(', ', $jadwal);

            $body[] = [
                'id' => $value->id,
                'nama_program' => $value->nama_program,
                'deskripsi' => $value->deskripsi,
                'hari' => $hariString,
            ];
        }

        return Inertia::render('Welcome', [
            'tbody' => $body,
        ]);
    }
}
