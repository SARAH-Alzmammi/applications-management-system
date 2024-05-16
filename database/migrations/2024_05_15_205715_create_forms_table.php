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
        Schema::create('forms', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->date('date_of_birth');
            $table->string('gender');
            $table->string('nationality');
            $table->string('cv_attachment');
            $table->unsignedBigInteger('hr_manager_id')->nullable();
            $table->unsignedBigInteger('hr_coordinator_id')->nullable();
            $table->string('hr_manager_status')->default('pending');
            $table->string('hr_coordinator_status')->default('pending');
            $table->timestamps();

            $table->foreign('hr_manager_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('hr_coordinator_id')->references('id')->on('users')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('forms');
    }
};
