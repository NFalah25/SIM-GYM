<?php

namespace Database\Seeders;

use App\Models\jadwal;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JadwalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        jadwal::create([
            'id_user' => 9,
            'id_program' => 2,
            'hari' => 'Senin',
            'waktu_mulai' => '11:00:00',
            'waktu_selesai' => '13:00:00',
            'nama_ruangan' => 'Aula 1',
        ]);

        jadwal::create([
            'id_user' => 9,
            'id_program'=> 2,
            'hari' => 'Selasa',
            'waktu_mulai' => '11:00:00',
            'waktu_selesai' => '13:00:00',
            'nama_ruangan' => 'Aula 2',
        ]);

        jadwal::create([
            'id_user' => 9,
            'id_program' => 1,
            'hari' => 'Rabu',
            'waktu_mulai' => '11:00:00',
            'waktu_selesai' => '13:00:00',
            'nama_ruangan' => 'Aula 3',
        ]);

        jadwal::create([
            'id_user' => 9,
            'id_program' => 1,
            'hari' => 'Kamis',
            'waktu_mulai' => '11:00:00',
            'waktu_selesai' => '13:00:00',
            'nama_ruangan' => 'Aula 4',
        ]);
    }
}
