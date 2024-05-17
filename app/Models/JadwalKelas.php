<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JadwalKelas extends Model
{
    use HasFactory;

    protected $table = 'jadwal_kelas'; // Nama tabel

    protected $fillable = [
        'nama_kelas',
        'hari',
        'jam',
    ];
}
