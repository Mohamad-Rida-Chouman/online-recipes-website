<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\API\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});
Route::resource('recipes', RecipeController::class);
Route::post('recipes/{recipe}/images', [RecipeController::class, 'assignImages']);
Route::post('recipes/{recipe}/ingredients', [RecipeController::class, 'assignIngredients']);
Route::get('recipe_with_images', [RecipeController::class, 'getRecipesWithImages']);
Route::get('recipes/{recipe}', [RecipeController::class, 'getOneRecipe']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
