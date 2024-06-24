<?php

namespace Database\Seeders;

use App\Models\transaksi;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TransaksiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        transaksi::create([
            'snap_token' => Str::random(10),
            'id_user' => 3,
            'tanggal_transaksi' => now(),
            'total_harga' => 10000,
            'status' => 'Paid',
            'id_program' => 1,
            'nama_program' => 'Angkat Beban',
            'durasi' => 1,
            'payment_type' => 'Qris'
        ]);
        transaksi::create([
            'snap_token' => Str::random(10),
            'id_user' => 4,
            'tanggal_transaksi' => now(),
            'total_harga' => 10000,
            'status' => 'Paid',
            'id_program' => 1,
            'nama_program' => 'Angkat Beban',
            'durasi' => 1,
            'payment_type' => 'Qris'
        ]);
        transaksi::create([
            'snap_token' => Str::random(10),
            'id_user' => 5,
            'tanggal_transaksi' => now(),
            'total_harga' => 10000,
            'status' => 'Paid',
            'id_program' => 1,
            'nama_program' => 'Angkat Beban',
            'durasi' => 1,
            'payment_type' => 'Qris'

        ]);
        transaksi::create([
            'snap_token' => Str::random(10),
            'id_user' => 6,
            'tanggal_transaksi' => now(),
            'total_harga' => 10000,
            'status' => 'Paid',
            'id_program' => 1,
            'nama_program' => 'Angkat Beban',
            'durasi' => 1,
            'payment_type' => 'Qris'
        ]);
        transaksi::create([
            'snap_token' => Str::random(10),
            'id_user' => 7,
            'tanggal_transaksi' => now(),
            'total_harga' => 10000,
            'status' => 'Paid',
            'id_program' => 1,
            'nama_program' => 'Angkat Beban',
            'durasi' => 1,
            'payment_type' => 'Qris'
        ]);
    }
}
