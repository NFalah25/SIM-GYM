<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class transaksi extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function langganan(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(langganan::class, 'id_transaksi');
    }

    public function detail_transaksi(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(detail_transaksi::class, 'id_transaksi');
    }

    public function program(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(program::class, 'id_program');
    }
}
