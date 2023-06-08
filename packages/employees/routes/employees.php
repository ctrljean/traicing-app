<?php

use Illuminate\Support\Facades\Route;
use Lifespikes\Employees\Http\Controllers\EmployeeController;

Route::resource('employees', EmployeeController::class);

Route::get('employees/{employee}/reviews', [EmployeeController::class, 'showReviews']);
