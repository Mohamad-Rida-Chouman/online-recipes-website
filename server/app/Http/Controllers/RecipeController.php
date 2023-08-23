<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recipe;
use Illuminate\Support\Facades\Validator;

class RecipeController extends Controller
{
    public function index()
    {
        $recipes = Recipe::all();
        return response()->json($recipes);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validator = Validator::make( $request->all(), [
            'name' => 'required|string',
            'cuisine' => 'required|string',
        ]);

        if ( $validator->fails() ) {
            return response()->json($validator->errors(), 500);
        }

        $recipe = Recipe::create($request->all());
        return response()->json($recipe, 200);
    }

    public function show(Recipe $recipe)
    {
        return response()->json($recipe, 200);
    }

    public function edit(Recipe $recipe)
    {
        //
    }

    public function update(Request $request, Recipe $recipe)
    {
        $validator = Validator::make( $request->all(), [
            'name' => 'required|unique:recipes,name',
            'cuisine' => 'required|string',
        ]);

        if ( $validator->fails() ) {
            return response()->json($validator->errors(), 500);
        }

        $recipe = Recipe::create($request->all());
        return response()->json($recipe, 200);
    }

    public function destroy(Recipe $recipe)
    {
        $recipe->delete();
        return response()->json('',200);
    }

    public function assignImages(Request $request, Recipe $recipe) {
        $imageIds = $request->get('image_ids');
        if ($imageIds) {
            $recipe->Images()->sync($imageIds);
        }
    }
    public function assignIngredients(Request $request, Recipe $recipe) {
        $ingredientsIds = $request->get('ingredients_ids');
        if ($ingredientsIds) {
            $recipe->RecipeIngredient()->sync($ingredientsIds);
        }
    }
}
