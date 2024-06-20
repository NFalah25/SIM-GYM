<?php

namespace App\Http\Controllers;

use App\Models\Program;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProgramController extends Controller
{
  public function index(Request $request)
  {
    $query = Program::select('id', 'nama_program', 'durasi', 'harga', 'deskripsi');
    if ($request->has('sort')) {
      $sort = $request->sort;
      if ($sort === 'name-asc') {
        $query->orderBy('nama_program', 'asc');
      } elseif ($sort === 'name-desc') {
        $query->orderBy('nama_program', 'desc');
      } elseif ($sort === 'price-asc') {
        $query->orderBy('harga', 'asc');
      } elseif ($sort === 'price-desc') {
        $query->orderBy('harga', 'desc');
      }
    } else {
      $query->orderBy('nama_program', 'asc'); // Default sorting
    }

    $program = $query->paginate(10);

    $columns = '1fr 1fr 1fr 1fr 1fr 0.5fr';
    $basePath = 'program';
    $thead = ['Nama Program', 'Durasi', 'Harga', 'Deskripsi'];

    $tbody = $program->map(function ($item) {
      return [
        'id' => $item->id,
        'nama_program' => $item->nama_program,
        'durasi' => $item->durasi,
        'harga' => $item->harga,
        'deskripsi' => $item->deskripsi,
      ];
    });

    return Inertia::render('Program/Index', [
      'columns' => $columns,
      'basePath' => $basePath,
      'thead' => $thead,
      'tbody' => $tbody,
      'pagination' => $program,
      'sort' => $request->sort ?? 'name-asc'
    ]);
  }

  public function create()
  {
    return Inertia::render('Program/Create');
  }

  public function store(Request $request)
  {
    $validated = $request->validate([
      'nama_program' => 'required|string|max:255|',
      'durasi' => 'required|string|max:255|',
      'harga' => 'required|string|max:255|',
      'deskripsi' => 'required|string|max:255|',
    ]);

    Program::create([
      'nama_program' => $validated['nama_program'],
      'durasi' => $validated['durasi'],
      'harga' => $validated['harga'],
      'deskripsi' => $validated['deskripsi'],
    ]);

    return redirect()->route('program.index')->with('success', 'Program created successfully');
  }

  public function edit($id)
  {
    $program = Program::findOrFail($id);

    return Inertia::render('Program/Edit', [
      'program' => $program,
    ]);
  }

  public function update(Request $request, $id)
  {
    $program = Program::findOrFail($id);

    $validated = $request->validate([
      'nama_program' => 'required|string|max:255|',
      'durasi' => 'required|max:255|',
      'harga' => 'required|max:255|',
      'deskripsi' => 'required|string|max:255|',
    ]);

    $program->update([
      'nama_program' => $validated['nama_program'],
      'durasi' => $validated['durasi'],
      'harga' => $validated['harga'],
      'deskripsi' => $validated['deskripsi'],
    ]);

    return redirect()->route('program.index')->with('success', 'Program updated successfully');
  }

  public function destroy($id)
  {
    $program = Program::findOrFail($id);

    $program->delete();

    return redirect()->route('program.index')->with('success', 'Program deleted successfully');
  }

  public function indexMemberProgramCatalog()
  {
    $programs = Program::all();

    return Inertia::render('ProgramCatalog/Index', [
      'programs' => $programs,
    ]);
  }
}
