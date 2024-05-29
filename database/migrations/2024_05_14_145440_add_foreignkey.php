<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('presensis', function (Blueprint $table) {
            // langganan_id
            $table->foreign('id_langganan')->references('id')->on('langganans')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('id_jadwal')->references('id')->on('jadwals')->onDelete('cascade')->onUpdate('cascade');
        });

        Schema::table('jadwals', function (Blueprint $table) {
            // langganan_id
            $table->foreign('id_user')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('id_program')->references('id')->on('program_fitnes')->onDelete('cascade')->onUpdate('cascade');

        });

        Schema::table('langganans', function (Blueprint $table) {
            // langganan_id
            $table->foreign('id_user')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('id_transaksi')->references('id')->on('transaksis')->onDelete('cascade')->onUpdate('cascade');
        });

        Schema::table('transaksis', function (Blueprint $table) {
            // langganan_id
            $table->foreign('id_user')->references('id')->on('users')->onUpdate('cascade');
        });

        Schema::table('detail_transaksis', function (Blueprint $table) {
            // langganan_id
            $table->foreign('id_transaksi')->references('id')->on('transaksis')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('id_program_fitnes')->references('id')->on('program_fitnes')->onDelete('cascade')->onUpdate('cascade');
        });






    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('presensis', function (Blueprint $table) {
            $table->dropForeign(['id_langganan']);
            $table->dropForeign(['id_jadwal']);
        });

        Schema::table('jadwals', function (Blueprint $table) {
            $table->dropForeign(['id_user']);
            $table->dropForeign(['id_program']);
        });

        Schema::table('langganans', function (Blueprint $table) {
            $table->dropForeign(['id_user']);
            $table->dropForeign(['id_transaksi']);
        });

        Schema::table('transaksis', function (Blueprint $table) {
            $table->dropForeign(['id_user']);
        });

        Schema::table('detail_transaksis', function (Blueprint $table) {
            $table->dropForeign(['id_transaksi']);
            $table->dropForeign(['id_program_fitnes']);
        });
    }
};
