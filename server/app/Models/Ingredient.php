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

    public function ShoppingLists(){
        return  $this->hasMany(Shopping_List::class, 'ingredient_id');
    }
}
