<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recipe;
use App\Models\Image;
use App\Models\Ingredient;
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
        $imageData = $request->get('image');
        $image = new Image;
        $image->image = $imageData;
        $image->recipe_id = $recipe["id"];
        $image->save();
    }
    public function assignIngredients(Request $request, Recipe $recipe) {
        $ingredientNames = strtolower($request->get('ingredients'));
        $ingredientNames = array_map('trim', explode(',', $ingredientNames));
        $ingredients = [];
        foreach ($ingredientNames as $ingredientName) {
            $ingredient = Ingredient::where('name', '=', $ingredientName)->first();
            
            if (!$ingredient) {
                $ingredient = new Ingredient;
                $ingredient->name = $ingredientName;
                $ingredient->save();
            }
            
            $ingredients[] = $ingredient;
        }
        $ingredientIds = array_map(function ($ingredient) {
            return $ingredient->id;
        }, $ingredients);

        $recipe->RecipeIngredient()->sync($ingredientIds);
    }

    public function getRecipesWithImages(){
        $recipesWithImages = Recipe::with('images')->get();
        return $recipesWithImages;
    }

    public function getOneRecipe(Recipe $recipe){
        $result_recipe = Recipe::with(['images', 'RecipeIngredient'])->find($recipe);
        return $result_recipe;
    }
}
