<?php

use App\Http\Controllers\FormController;
use Illuminate\Support\Facades\Route;


Route::post('/apply',[FormController::class,'store']);
