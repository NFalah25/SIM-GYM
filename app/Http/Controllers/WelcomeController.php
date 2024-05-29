<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProgramFitness;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index(ProgramFitness $program_fitnesses)
    {
        $program_fitnesses = ProgramFitness::all();
        return Inertia::render('Welcome', [
            'program' => $program_fitnesses

        ]);
    }
}
