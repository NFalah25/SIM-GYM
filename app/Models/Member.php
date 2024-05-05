<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;
    protected $fillable = [
        'first_name',
        'last_name',
        'no_hp',
        'alamat',
        'birth_date',
        'tinggi_badan',
        'berat_badan',
        'jenis_kelamin',
    ];
    public function user(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(User::class);
    }
}
