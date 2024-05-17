<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJadwalKelasTable extends Migration
{
    public function up()
    {
        Schema::dropIfExists('jadwal_kelas'); // Menghapus tabel jika sudah ada sebelumnya

        Schema::create('jadwal_kelas', function (Blueprint $table) {
            $table->id();
            $table->string('hari');
            $table->string('waktu');
            $table->string('nama_ruangan');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('jadwal_kelas');
    }
}
