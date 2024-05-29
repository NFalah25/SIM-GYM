<?php

namespace Database\Seeders;

use App\Models\program_fitnes;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        program_fitnes::create([
            'nama_program' => 'Angkat Beban',
            'durasi' => '1',
            'deskripsi' => 'Kegiatan ini bertujuan untuk melatih otot-otot tubuh',
            'harga' => 10000,
        ]);

        program_fitnes::create([
            'nama_program' => 'Yoga',
            'durasi' => '1',
            'deskripsi' => 'Kegiatan ini bertujuan untuk melatih kekuatan tubuh dan pikiran',
            'harga' => 15000,
        ]);

        program_fitnes::create([
            'nama_program' => 'Zumba',
            'durasi' => '1',
            'deskripsi' => 'Kegiatan ini bertujuan untuk melatih kekuatan tubuh dan pikiran',
            'harga' => 20000,
        ]);

        program_fitnes::create([
            'nama_program' => 'Kardio',
            'durasi' => '1',
            'deskripsi' => 'Kegiatan ini bertujuan untuk melatih otot jantung serta stamina tubuh',
            'harga' => 12000,
        ]);
    }
}
