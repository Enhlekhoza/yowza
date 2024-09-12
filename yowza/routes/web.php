<?php

use Illuminate\Support\Facades\Route;

// Landing page
Route::get('/', function () {
    return redirect()->route('home');
});

// Home
Route::get('/home', function () {
    return view('home.index');
})->name('home'); 