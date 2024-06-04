<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Program;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index(Program $program)
    {
        $program = Program::all();
        return Inertia::render('Welcome', [
            'program' => $program

        ]);
    }
}
