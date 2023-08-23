<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Recipe_Ingredient extends Pivot
{
    use HasFactory;

    public function recipe(){
        return $this->belongsTo(Recipe::class);
    }

    public function ingredient(){
        return $this->belongsTo(Ingredient::class);
    }
}

