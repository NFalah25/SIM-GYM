<?php

namespace Database\Seeders;

use App\Models\presensi;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PresensiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        presensi::create([
            'id_langganan' => 1,
            'id_jadwal' => 1,
            'waktu_presensi' => '2024-05-14 12:49:23',
        ]);
    }
}
