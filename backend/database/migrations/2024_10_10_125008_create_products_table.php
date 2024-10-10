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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('brand')->unique();
            $table->text('description')->nullable();
            $table->json('specification')->nullable();
            $table->decimal('real_price', 10, 2);
            $table->decimal('sale_price', 10, 2)->nullable();
            $table->decimal('discount_price', 10, 2)->nullable();
            $table->integer('quantity')->nullable();
            $table->string('SKU')->unique()->nullable();
            $table->boolean('is_featured')->default(false);
            $table->foreignId('user_id')->constrained('Users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
