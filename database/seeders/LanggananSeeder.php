<?php

namespace Database\Seeders;

use App\Models\langganan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LanggananSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        langganan::create([
            'id_user' => 3,
            'id_transaksi' => 1,
            'tanggal_mulai' => now(),
            'tanggal_akhir' => now()->addDays(1),
        ]);

        langganan::create([
            'id_user' => 4,
            'id_transaksi' => 2,
            'tanggal_mulai' => now(),
            'tanggal_akhir' => now()->addDays(1),
        ]);
        langganan::create([
            'id_user' => 5,
            'id_transaksi' => 3,
            'tanggal_mulai' => now(),
            'tanggal_akhir' => now()->addDays(1),
        ]);
        langganan::create([
            'id_user' => 6,
            'id_transaksi' => 4,
            'tanggal_mulai' => now(),
            'tanggal_akhir' => now()->addDays(1),
        ]);
        langganan::create([
            'id_user' => 7,
            'id_transaksi' => 5,
            'tanggal_mulai' => now(),
            'tanggal_akhir' => now()->addDays(1),
        ]);

    }
}
