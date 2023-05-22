<?php

namespace Lifespikes\Employees\Models;

use Illuminate\Database\Eloquent\Model;
use Lifespikes\Employees\Factories\EmployeeFactory;

class Employee extends Model
{
    protected $fillable = [];

    protected static function factory(): EmployeeFactory
    {
        return EmployeeFactory::new();
    }
}
