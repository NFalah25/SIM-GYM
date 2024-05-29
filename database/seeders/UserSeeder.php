<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Admin
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'admin',
            'first_name' => 'Admin',
            'last_name' => 'Admin',
            'phone_number' => '081234567890',
            'address' => 'Jl. Admin No. 1',
            'height' => '170',
            'weight' => '70',
            'gender' => 'L',
            'email_verified_at' => now(),
        ]);

        //Member
        User::factory()->create([
            'name' => 'Member',
            'email' => 'user@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'member',
            'first_name' => 'Member',
            'last_name' => 'Member',
            'phone_number' => '081234567890',
            'address' => 'Jl. Member No. 1',
            'height' => '170',
            'weight' => '70',
            'gender' => 'L',
            'email_verified_at' => now(),
        ]);

        User::factory()->create([
            'name' => 'Naufal1',
            'email' => 'falahnaufal1@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'member',
            'first_name' => 'Naufal',
            'last_name' => 'Falah',
            'phone_number' => '081234567890',
            'address' => 'Jl. Member No. 13',
            'height' => '170',
            'weight' => '70',
            'gender' => 'L',
            'email_verified_at' => now(),
        ]);

        User::factory()->create([
            'name' => 'Fitrah2',
            'email' => 'fitrah@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'member',
            'first_name' => 'Fitrah',
            'last_name' => 'Ramadhani',
            'phone_number' => '081234567890',
            'address' => 'Jl. Member No. 14',
            'height' => '170',
            'weight' => '70',
            'gender' => 'L',
            'email_verified_at' => now(),
        ]);

        User::factory()->create([
            'name' => 'Rifqi3',
            'email' => 'rifqi@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'member',
            'first_name' => 'Rifqi',
            'last_name' => 'Maulana',
            'phone_number' => '081234567890',
            'address' => 'Jl. Member No. 15',
            'height' => '170',
            'weight' => '70',
            'gender' => 'L',
            'email_verified_at' => now(),
        ]);

        User::factory()->create([
            'name' => 'Sriwana4',
            'email' => 'sriwana@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'member',
            'first_name' => 'Sriwana',
            'last_name' => 'Sriwana',
            'phone_number' => '081234567890',
            'address' => 'Jl. Member No. 16',
            'height' => '170',
            'weight' => '70',
            'gender' => 'P',
            'email_verified_at' => now(),
        ]);

        User::factory()->create([
            'name' => 'Taufiq',
            'email' => 'taufiq@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'member',
            'first_name' => 'Taufiq',
            'last_name' => 'Hidayat',
            'address' => 'Jl. Member No. 17',
            'phone_number' => '081234567890',
            'height' => '170',
            'weight' => '70',
            'gender' => 'L',
            'email_verified_at' => now(),
        ]);


        //Trainer
        User::factory()->create([
            'name' => 'Trainer',
            'email' => 'trainer@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'trainer',
            'first_name' => 'Trainer',
            'last_name' => 'Trainer',
            'phone_number' => '081234567890',
            'address' => 'Jl. Trainer No. 1',
            'height' => '170',
            'weight' => '70',
            'gender' => 'L',
            'email_verified_at' => now(),
        ]);

        User::factory()->create([
            'name' => 'Trainer1',
            'email' => 'trainer1@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'trainer',
            'first_name' => 'Trainer1',
            'last_name' => 'Trainer1',
            'phone_number' => '081234567890',
            'address' => 'Jl. Trainer No. 2',
            'height' => '170',
            'weight' => '70',
            'gender' => 'L',
            'email_verified_at' => now(),
        ]);

        User::factory()->create([
            'name' => 'Trainer2',
            'email' => 'trainer2@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'trainer',
            'first_name' => 'Trainer2',
            'last_name' => 'Trainer2',
            'phone_number' => '081234567890',
            'address' => 'Jl. Trainer No. 3',
            'height' => '170',
            'weight' => '70',
            'gender' => 'L',
            'email_verified_at' => now(),
        ]);


        User::factory()->create([
            'name' => 'Trainer3',
            'email' => 'trainer3@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'trainer',
            'first_name' => 'Trainer3',
            'last_name' => 'Trainer3',
            'phone_number' => '081234567890',
            'address' => 'Jl. Trainer No. 4',
            'height' => '170',
            'weight' => '70',
            'gender' => 'L',
            'email_verified_at' => now(),
        ]);
    }
}
