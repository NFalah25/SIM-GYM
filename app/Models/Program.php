<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'programs';

    public function jadwal()
    {
        return $this->hasMany(jadwal::class, 'id_program');
    }

    public function detail_transaksi()
    {
        return $this->hasMany(detail_transaksi::class, 'id_program');
    }
}
