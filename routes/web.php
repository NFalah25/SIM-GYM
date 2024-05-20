<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\JadwalKelasController;
use App\Http\Controllers\KelasController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/home', function () {
    return Inertia::render('Dashboard', [
        'user' => auth()->user()->first_name,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');;

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');

//Route::get('/dashboard', function () {
//    return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');
//
//Route::middleware('auth')->group(function () {
//    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
//});

//require __DIR__.'/auth.php';

Route::get('/jadwal-kelas', [JadwalKelasController::class, 'index']);

Route::get('/tambah-jadwal-kelas', [KelasController::class, 'create'])->name('kelas.create');

Route::get('/jadwal-kelas', [JadwalKelasController::class, 'index'])->name('jadwal-kelas');

Route::post('/kelas', [KelasController::class, 'store'])->name('kelas.store');
Route::get('/kelas/{id}', [KelasController::class, 'show'])->name('kelas.show');
Route::get('/kelas/{id}/edit', [KelasController::class, 'edit'])->name('kelas.edit');
Route::delete('/kelas/{id}', [KelasController::class, 'destroy'])->name('kelas.destroy');

// Route users
Route::get('/users', [UserController::class, 'index']);
