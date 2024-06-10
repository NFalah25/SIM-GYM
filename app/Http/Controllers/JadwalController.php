<?php

namespace App\Http\Controllers;

use App\Models\jadwal;
use App\Http\Controllers\Controller;
use App\Models\Program;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\ProgramFitness;

class JadwalController extends Controller
{
    public function index(Request $request)
    {
        $sort = $request->input('sort');

        if ($sort === 'asc' || $sort === 'desc') {
            $relasiUser = jadwal::with('user', 'program')->orderBy('id_user', $sort)->paginate(10);
        } else {
            $relasiUser = jadwal::with('user', 'program')->paginate(10);
        }

        $columns = '1fr 1fr 1fr 1fr 1fr 0.5fr';
        $basePath = 'jadwal';
        $thead = ['Nama Trainer', 'Nama Program', 'Hari', 'Waktu', 'Ruangan'];
        $tbody = [];

        foreach ($relasiUser as $item) {
            $tbody [] = [
                'id' => $item->id,
                'name' => $item->user->name,
                'program' => $item->program->nama_program,
                'hari' => $item->hari,
                'waktu' => $item->waktu_mulai,
                'ruangan' => $item->nama_ruangan,
            ];
        };

        return Inertia::render('Jadwals/Index', [
            'columns' => $columns,
            'basePath' => $basePath,
            'thead' => $thead,
            'tbody' => $tbody,
            'pagination' => $relasiUser,
            'sort' => $request->sort ?? 'name-asc',
        ]);
    }

    public function create()
    {
        $user = User::where('role', 'trainer') -> get();
        $program = Program::all();
        return Inertia::render('Jadwals/Create', [
            'user' => $user,
            'program' => $program,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'program' => 'required|max:255',
            'hari' => 'required|string|max:20|',
            'waktu_mulai' => 'required|max:255',
            'waktu_selesai' => 'required|max:255',
            'ruangan' => 'required|string|max:255',
        ]);

        Jadwal::create([
            'id_user' => $validated['name'],
            'id_program' => $validated['program'],
            'hari' => $validated['hari'],
            'waktu_mulai' => $validated['waktu_mulai'],
            'waktu_selesai' => $validated['waktu_selesai'],
            'nama_ruangan' => $validated['ruangan'],
        ]);

        return redirect()->route('jadwal')->with('success', 'Jadwal created successfully');
    }

    public function edit($id)
    {
        $jadwal = Jadwal::findOrFail($id);
        $user = User::where('role', 'trainer') -> get();
        $program = Program::all();

        return Inertia::render('Jadwals/Edit', [
            'jadwal' => $jadwal,
            'user' => $user,
            'program' => $program,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $jadwal = Jadwal::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|max:255',
            'program' => 'required|max:255',
            'hari' => 'required|string|max:20|',
            'waktu_mulai' => 'required|string|max:255',
            'waktu_selesai' => 'required|string|max:255',
            'ruangan' => 'required|string|max:255',
        ]);

        $jadwal->update([
            'id_user' => $validated['name'],
            'id_program' => $validated['program'],
            'hari' => $validated['hari'],
            'waktu_mulai' => $validated['waktu_mulai'],
            'waktu_selesai' => $validated['waktu_selesai'],
            'nama_ruangan' => $validated['ruangan'],
        ]);

        return redirect()->route('jadwal')->with('success', 'Jadwal updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $jadwal = Jadwal::findOrFail($id);

        $jadwal->delete();

        return redirect()->route('jadwal')->with('success', 'Jadwal deleted successfully');
    }
}
