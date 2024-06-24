<?php

namespace Database\Seeders;

use App\Models\Program;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Program::create([
            'nama_program' => 'Angkat Beban',
            'durasi' => '1',
            'deskripsi' => "This activity aims to train the body's muscles",
            'harga' => 10000,
        ]);

        Program::create([
            'nama_program' => 'Angkat Beban',
            'durasi' => '30',
            'deskripsi' => "This activity aims to train the body's muscles",
            'harga' => 80000,
        ]);

        Program::create([
            'nama_program' => 'Yoga',
            'durasi' => '1',
            'deskripsi' => 'This activity aims to train body and mind strength',
            'harga' => 15000,
        ]);

        Program::create([
            'nama_program' => 'Yoga',
            'durasi' => '30',
            'deskripsi' => 'This activity aims to train body and mind strength',
            'harga' => 100000,
        ]);

        Program::create([
            'nama_program' => 'Zumba',
            'durasi' => '1',
            'deskripsi' => 'This activity aims to train body flexibility and agility',
            'harga' => 20000,
        ]);
        Program::create([
            'nama_program' => 'Zumba',
            'durasi' => '30',
            'deskripsi' => 'This activity aims to train body flexibility and agility',
            'harga' => 120000,
        ]);

        Program::create([
            'nama_program' => 'Kardio',
            'durasi' => '1',
            'deskripsi' => 'This activity aims to train the heart muscle and body stamina',
            'harga' => 12000,
        ]);
        Program::create([
            'nama_program' => 'Kardio',
            'durasi' => '30',
            'deskripsi' => 'This activity aims to train the heart muscle and body stamina',
            'harga' => 90000,
        ]);
    }
}
