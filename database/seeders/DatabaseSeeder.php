<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

//        User::factory()->create([
//            'name' => 'Test User 2',
//            'email' => 'falahnaufal1@gmail.com',
//        ]);

        $user = User::factory()->create([
            'name' => 'Naufal',
            'email' => 'falahnaufal1@gmail.com',
        ]);

        $user->member()->create([
            'first_name'=> 'Naufal',
            'last_name'=> 'Falah',
            'no_hp'=> '081234567890',
            'alamat'=> 'Jl. Jalan',
            'birth_date'=> '2000-01-01',
            'tinggi_badan'=> 170,
            'berat_badan'=> 70,
            'jenis_kelamin'=> 'L',
        ]);

    }
}
