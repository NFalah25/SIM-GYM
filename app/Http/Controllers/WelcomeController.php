<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\program_fitnes;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index(program_fitnes $program_fitnes)
    {
        $program_fitnes = program_fitnes::all();
        return Inertia::render('Welcome',[
            'program' => $program_fitnes
        ]);
    }
}
