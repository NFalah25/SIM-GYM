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
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

Route::get('/', [WelcomeController::class, 'index']);


Route::group(['middleware' => ['auth', 'verified']], function () {

    Route::get('/dashboard', function () {
        if (Auth::user()->role === 'admin') {
            return app(DashboardController::class)->index();
        } else if (Auth::user()->role === 'member') {
            return app(MemberController::class)->index();
        } else if (Auth::user()->role === 'trainer') {

            return app(MemberController::class)->index();
        }
    })->name('dashboard');

    // Route users
    Route::resource('users', UserController::class)->middleware('can:users');
    Route::post('/users/{id}/update', [UserController::class, 'update'])->name('users.updates');
    //Route program
    Route::resource('program', ProgramController::class)->middleware('can:program');

    // Route jadwals
    Route::resource('jadwal', JadwalController::class)->middleware('can:jadwal');

    //Route transaksi
    Route::get('/transaksi', [TransaksiController::class, 'index'])->name('transaksi.index')->middleware('can:transaksi');
    Route::get('/cetakPdf/{id}', [TransaksiController::class, 'cetak_pdf'])->name('transaksi.cetak_pdf')->middleware('can:transaksi');
    Route::get('/transaksi/{id}/detail', [TransaksiController::class, 'detail_transaksi'])->name('transaksi.detail')->middleware('can:transaksi');


    Route::get('/presensi', [PresensiController::class, 'index'])->name('presensi');
    Route::get('/presensi/{id}/show', [PresensiController::class, 'showProfile'])->name('show.profile')->middleware('can:presensi.profile');
    Route::get('/presensi/create', [PresensiController::class, 'create'])->name('presensi.create')->middleware('can:presensi.create');

    Route::get('/langganan', [LanggananController::class, 'index'])->name('langganan')->middleware('can:langganan');

    Route::get('/profile', [UpdateProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [UpdateProfileController::class, 'update'])->name('profile.update');

    Route::get('/program_catalog', [ProgramController::class, 'indexMemberProgramCatalog'])->name('program.catalog')->middleware('can:product.catalog');
    Route::post('/program_catalog/purchase', [TransaksiController::class, 'submitPurchase'])->name('program.purchase');
});
