<?php

namespace Lifespikes\Reviews\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Lifespikes\Reviews\Models\Reviews;

class ReviewsFactory extends Factory
{
    protected $model = Reviews::class;
    public function definition(): array
    {
        return [
            'employees_id' => fake()->numberBetween(1, 10),
            'date_review' => fake()->date('Y-m-d'),
            'qualification' => fake()->numberBetween(1, 100),
            'observation' => fake()->paragraph(),
        ];
    }
}
