<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class presensi extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function langganan()
    {
        return $this->belongsTo(langganan::class, 'id_langganan' );
    }

    public function jadwal(){
        return $this->belongsTo(jadwal::class, 'id_jadwal');
    }
}
