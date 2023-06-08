<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('num_identification')->nullable();
            $table->string('name');
            $table->string('last_name');
            $table->string('email');
            $table->string('age');
            $table->date('birth_date');
            $table->string('address');
            $table->string('phone');
            $table->boolean('probationary')->default(true);
            $table->boolean('hired')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
