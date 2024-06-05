<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class jadwal extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function program()
    {
        return $this->belongsTo(Program::class, 'id_program');
    }

    public function presensi()
    {
        return $this->hasMany(presensi::class, 'id_jadwal');
    }
}
