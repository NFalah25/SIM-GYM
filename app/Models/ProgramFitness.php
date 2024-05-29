<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProgramFitness extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function jadwal()
    {
        return $this->hasMany(jadwal::class);
    }
}
