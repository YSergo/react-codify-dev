<?php

use App\Http\Controllers\Api\ProjectsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\ApplicationController;

Route::get('/get-services', [ServiceController::class, 'getServices']);
Route::get('/get-projects', [ProjectsController::class, 'getProjects']);

Route::post('/send-application', [ApplicationController::class, 'handleApplication']);

