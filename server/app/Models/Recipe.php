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

    public function Likes(){
        return  $this->hasMany(Like::class, 'recipe_id');
    }

    public function Comments(){
        return  $this->hasMany(Comment::class, 'recipe_id');
    }

    public function Images(){
        return  $this->hasMany(Image::class, 'recipe_id');
    }
}
