<?php

namespace App\Http\Controllers;

use App\Models\ProgramFitness;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ProgramFitnessController extends Controller
{
  public function index()
  {
    $programFitness = ProgramFitness::all();

    $thead = ['Nama Program', 'Durasi', 'Harga', 'Deskripsi'];

    $tbody = $programFitness->map(function ($item) {
      return [
        'id' => $item->id,
        'nama_program' => $item->nama_program,
        'durasi' => $item->durasi,
        'harga' => $item->harga,
        'deskripsi' => $item->deskripsi,
      ];
    });

    return Inertia::render('ProgramFitness/Index', [
      'thead' => $thead,
      'tbody' => $tbody,
    ]);
  }

  public function destroy($id)
  {
    $programFitness = ProgramFitness::findOrFail($id);

    // Hapus file avatar jika ada
    if ($programFitness->foto && \Storage::disk('public')->exists($programFitness->foto)) {
      \Storage::disk('public')->delete($programFitness->foto);
    }

    $programFitness->delete();

    return redirect()->route('program-fitness')->with('success', 'Program deleted successfully');
  }
}
