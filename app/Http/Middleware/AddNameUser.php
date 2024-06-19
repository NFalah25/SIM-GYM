<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class AddNameUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Cek apakah user terautentikasi
        if (Auth::check()) {
            // Ambil nama depan user
            $firstname = Auth::user()->first_name;
            $role = Auth::user()->role;

            // Bagikan nama depan user ke semua views
            Inertia::share('user_name', $firstname);
            Inertia::share('user', $role);
        }
        return $next($request);
    }
}
