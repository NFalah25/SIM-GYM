<?php

namespace Database\Seeders;

use App\Models\detail_transaksi;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Detail_TransaksiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        detail_transaksi::create([
            'id_transaksi' => 1,
            'id_program' => 1,
            'jumlah' => 10000,
        ]);

        detail_transaksi::create([
            'id_transaksi' => 2,
            'id_program' => 2,
            'jumlah' => 10000,
        ]);
    }
}
