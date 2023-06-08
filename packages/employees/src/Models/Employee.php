<?php

namespace Lifespikes\Employees\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Lifespikes\Employees\Factories\EmployeeFactory;
use Lifespikes\Reviews\Models\Reviews;

class Employee extends Model
{
    protected $fillable = [];
    protected $guarded = [];

    public function reviews(): HasMany
    {
        return $this->hasMany(Reviews::class);
    }

    protected static function factory(): EmployeeFactory
    {
        return EmployeeFactory::new();
    }
}
