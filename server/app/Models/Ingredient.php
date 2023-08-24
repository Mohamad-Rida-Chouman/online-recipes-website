<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function ShoppingLists(): BelongsToMany {
        return $this->belongsToMany(User::class, 'shopping_lists', 'ingredient_id', 'user_id')
                    ->withTimestamps();
    }

    public function IngredientRecipe() {
        return $this->belongsToMany(Recipe::class, 'recipe_ingredients', 'ingredient_id', 'recipe_id')
                    ->withTimestamps();
    }
}
