<?php

namespace Database\Seeders;

use App\Models\transaksi;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TransaksiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        transaksi::create([
            'id_user' => 2,
            'tanggal_transaksi' => '2024-05-14 12:49:23',
            'total_harga' => 10000,
            'tipe_transaksi' => 'Cashless',
        ]);

        transaksi::create([
            'id_user' => 3,
            'tanggal_transaksi' => '2024-05-14 12:49:23',
            'total_harga' => 10000,
            'tipe_transaksi' => 'Cashless',
        ]);


    }
}
