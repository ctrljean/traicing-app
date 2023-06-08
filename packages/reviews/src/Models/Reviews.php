<?php

namespace Lifespikes\Reviews\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Lifespikes\Employees\Models\Employee;
use Lifespikes\Reviews\Factories\ReviewsFactory;

class Reviews extends Model
{
    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }

    protected static function factory(): ReviewsFactory
    {
        return ReviewsFactory::new();
    }
}
