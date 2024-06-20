<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class langganan extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function transaksi()
    {
        return $this->belongsTo(transaksi::class, 'id_transaksi');
    }

    public function presensis()
    {
        return $this->hasMany(presensi::class, 'id_langganan');
    }
}
