<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('program_fitnes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('nama_program')->nullable();
            $table->integer('durasi')->nullable();
            $table->integer('harga')->nullable();
            $table->string('deskripsi')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('program_fitnes');
    }
};
