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
        Schema::table('users', function (Blueprint $table) {
            $table->string('first_name')->after('name')->nullable();
            $table->string('last_name')->after('first_name')->nullable();
            $table->string('phone_number')->after('email')->nullable();
            $table->string('address')->after('phone_number')->nullable();
            $table->integer('height')->after('address')->nullable();
            $table->integer('weight')->after('height')->nullable();
            $table->string('gender')->after('weight')->nullable();
            $table->string('foto')->after('gender')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('first_name');
            $table->dropColumn('last_name');
            $table->dropColumn('phone_number');
            $table->dropColumn('address');
            $table->dropColumn('height');
            $table->dropColumn('weight');
            $table->dropColumn('gender');
            $table->dropColumn('foto');

        });
    }
};
