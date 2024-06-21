<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{

    public static $permissions = [
        'dashboard' => ['admin', 'member', 'trainer'],
        'transaksi' => ['admin', 'member'],
        'program' => ['admin'],
        'users' => ['admin'],
        'jadwal' => ['admin'],
        'langganan' => ['admin'],
        'presensi.profile' => ['trainer'],
        'presensi.create' => ['trainer'],
        'product.catalog' => ['member'],

    ];

    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        foreach (self::$permissions as $permission => $roles) {
            Gate::define($permission, function ($user) use ($roles) {
                return in_array($user->role, $roles);
            });
        }
    }
}
