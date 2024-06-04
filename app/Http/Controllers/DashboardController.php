<?php

namespace App\Http\Controllers;

use App\Models\langganan;
use App\Models\Program;
use App\Models\ProgramFitness;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index(Request $request)
    {
        $countUser = User::count();
        $countProgram = Program::count();
        $countLanggananActive = langganan::where('tanggal_akhir', '>', now())->count();


        return Inertia::render('Dashboard/Index');
    }
}
