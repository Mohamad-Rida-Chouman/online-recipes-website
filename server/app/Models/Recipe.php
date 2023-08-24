<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'cuisine',
    ];

    public function Liked(): BelongsToMany {
        return $this->belongsToMany(User::class, 'likes', 'recipe_id', 'user_id')
                    ->withTimestamps();
    }

    public function Commented(): BelongsToMany {
        return $this->belongsToMany(User::class, 'comments', 'recipe_id', 'user_id')
                    ->withTimestamps();
    }

    public function RecipeIngredient() {
        return $this->belongsToMany(Ingredient::class, 'recipe_ingredients', 'recipe_id', 'ingredient_id')
                    ->withTimestamps();
    }

    public function Images(){
        return $this->hasMany(Image::class, 'recipe_id');
    }
}
