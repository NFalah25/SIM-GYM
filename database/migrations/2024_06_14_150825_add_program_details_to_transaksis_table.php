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
        Schema::table('transaksis', function (Blueprint $table) {
            $table->foreignId('id_program')->nullable()->constrained('programs')->after('status');
            // $table->bigInteger('id_program')->unsigned()->nullable()->after('status');
            $table->string('nama_program')->nullable()->after('id_program');
            $table->integer('durasi')->nullable()->after('nama_program');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('transaksis', function (Blueprint $table) {
            $table->dropColumn('id_program');
            $table->dropColumn('nama_program');
            $table->dropColumn('durasi');
        });
    }
};
