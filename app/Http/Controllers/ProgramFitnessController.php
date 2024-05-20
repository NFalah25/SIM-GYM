<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ProgramFitnessController extends Controller
{
  public function index()
  {
    return Inertia::render('ProgramFitness/Index');
  }
}
