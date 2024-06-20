<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class detail_transaksi extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function transaksi()
    {
        return $this->belongsTo(transaksi::class, 'id_transaksi');
    }

    public function program()
    {
        return $this->belongsTo(Program::class, 'id_program');
    }
}
