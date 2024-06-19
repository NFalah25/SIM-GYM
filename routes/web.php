<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\JadwalController;
use App\Http\Controllers\LanggananController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\PresensiController;
use App\Http\Controllers\UpdateProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\ProgramController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TransaksiController;
use Inertia\Inertia;


Route::get('/', [WelcomeController::class, 'index']);


Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Route users
    Route::get('/users', [UserController::class, 'index'])->name('users');
    Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
    Route::post('/users', [UserController::class, 'store'])->name('users.store');
    Route::get('/users/{id}/edit', [UserController::class, 'edit'])->name('users.edit');
    Route::put('/users/{id}', [UserController::class, 'update'])->name('users.update');
    Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('users.destroy');

    //Route program
    Route::get('/program', [ProgramController::class, 'index'])->name('program');
    Route::get('/program/create', [ProgramController::class, 'create'])->name('program-create');
    Route::post('/program', [ProgramController::class, 'store'])->name('program.store');
    Route::get('/program/{id}/edit', [ProgramController::class, 'edit'])->name('program.edit');
    Route::put('/program/{id}', [ProgramController::class, 'update'])->name('program.update');
    Route::delete('/program/{id}', [ProgramController::class, 'destroy'])->name('program.destroy');

    // Route jadwals
    Route::get('/jadwal', [JadwalController::class, 'index'])->name('jadwal');
    Route::get('/jadwal/create', [JadwalController::class, 'create'])->name('jadwal-create');
    Route::post('/jadwal', [JadwalController::class, 'store'])->name('jadwal.store');
    Route::get('/jadwal/{id}/edit', [JadwalController::class, 'edit'])->name('jadwal.edit');
    Route::put('/jadwal/{id}', [JadwalController::class, 'update'])->name('jadwal.update');
    Route::delete('/jadwal/{id}', [JadwalController::class, 'destroy'])->name('jadwal.destroy');

    //Route transaksi
    Route::get('/transaksi', [TransaksiController::class, 'index'])->name('transaksi.index');
    Route::get('/cetakPdf', [TransaksiController::class, 'cetak_pdf'])->name('transaksi.cetak_pdf');
    Route::get('/transaksi/{id}/detail', [TransaksiController::class, 'detail_transaksi'])->name('transaksi.detail');
    Route::get('/transaksi/{id}/detail', [TransaksiController::class, 'detail_transaksi'])->name('transaksi.detail');


    Route::get('/presensi', [PresensiController::class, 'index'])->name('presensi');
    Route::get('/presensi/{id}/show', [PresensiController::class, 'showProfile'])->name('show.profile');
    Route::get('/langganan', [LanggananController::class, 'index'])->name('langganan');

    Route::get('/update-profile', [UpdateProfileController::class, 'edit'])->name('profile.update');
    Route::put('/update-profile', [UpdateProfileController::class, 'update'])->name('profile.edit');
});

// Route Dashboard
Route::get('/member', [MemberController::class, 'index'])->name('member.home');
Route::get('member/program_catalog', [ProgramController::class, 'indexMemberProgramCatalog']);
Route::post('member/program_catalog/purchase', [TransaksiController::class, 'submitPurchase'])->name('program.purchase');
