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
            'id_user' => 2,
            'id_transaksi' => 1,
            'tanggal_mulai' => '2024-05-14 12:49:23',
            'tanggal_akhir' => '2024-06-14 12:49:23',
        ]);

        langganan::create([
            'id_user' => 3,
            'id_transaksi' => 2,
            'tanggal_mulai' => '2024-05-14 12:49:23',
            'tanggal_akhir' => '2024-07-14 12:49:23',
        ]);
        langganan::create([
            'id_user' => 3,
            'id_transaksi' => 2,
            'tanggal_mulai' => '2024-05-14 12:49:23',
            'tanggal_akhir' => '2024-06-20 12:49:23',
        ]);

    }
}
