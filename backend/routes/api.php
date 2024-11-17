<?php

use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Frontend\AccountController;
use Illuminate\Support\Facades\Route;

// Public Routes
Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::post('verify', [AuthController::class, 'verifyEmail']);
Route::post('/forgot-password', [ForgotPasswordController::class, 'sendResetLinkEmail']);
Route::post('reset/password', [ForgotPasswordController::class, 'resetPassword']);
Route::post('profile/update',[AccountController::class, 'Profileupdate']);
Route::post('user-links', [AccountController::class, 'userLinks']);
Route::post('user-address', [AccountController::class, 'storeAddress']);
Route::post('update-password', [AccountController::class, 'passwordUpdate']);


// Protected Routes
Route::middleware(['auth:api'])->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
    Route::get('auth/google', [GoogleController::class, 'redirectToGoogle']);
    Route::get('auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);
});
