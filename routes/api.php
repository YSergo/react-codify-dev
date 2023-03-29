<?php

use App\Http\Controllers\Api\ProjectsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ServiceController;



Route::get('/get-services', [ServiceController::class, 'getServices']);
Route::get('/get-projects', [ProjectsController::class, 'getProjects']);

