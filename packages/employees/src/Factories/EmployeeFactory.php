<?php

namespace Lifespikes\Employees\Factories;
use Illuminate\Database\Eloquent\Factories\Factory;
use Lifespikes\Employees\Models\Employee;

class EmployeeFactory extends Factory
{
    protected $model = Employee::class;
    public function definition(): array
    {
        return [
            'num_identification' => fake()->creditCardNumber(),
            'name' => fake()->name(),
            'last_name' => fake()->lastName(),
            'email' => fake()->unique()->safeEmail(),
            'age' => fake()->unique()->randomNumber(),
            'birth_date' => fake()->unique()->date(),
            'address' => fake()->unique()->sentence(15),
            'phone' => fake()->unique()->phoneNumber(),
            'probationary' => fake()->randomElement([true, false]),
            'hired' => fake()->randomElement([true, false])
        ];
    }
}
