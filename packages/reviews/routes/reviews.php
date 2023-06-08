<?php

use Illuminate\Support\Facades\Route;
use Lifespikes\Reviews\Http\Controllers\reviewsController;

Route::resource('reviews', reviewsController::class);


