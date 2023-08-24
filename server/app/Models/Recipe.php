<?php

namespace App\Models;

use App\Models\Comment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Recipe extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'cuisine',
    ];

    public function Liked() {
        return $this->belongsToMany(User::class, 'likes', 'recipe_id', 'user_id')
                    ->withTimestamps();
    }

    public function CommentingUsers() {
        return $this->belongsToMany(User::class, 'comments', 'recipe_id', 'user_id')
                    ->withTimestamps();
    }

    public function Comments() {
        return $this->hasMany(Comment::class, 'recipe_id');
    }

    public function RecipeIngredient() {
        return $this->belongsToMany(Ingredient::class, 'recipe_ingredients', 'recipe_id', 'ingredient_id')
                    ->withTimestamps();
    }

    public function Images(){
        return $this->hasMany(Image::class, 'recipe_id');
    }
}
