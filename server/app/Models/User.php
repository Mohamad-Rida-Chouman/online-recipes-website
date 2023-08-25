<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Comment;
use App\Models\Ingredient;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function ShoppingLists(){
        return $this->belongsToMany(Ingredient::class, 'shopping_lists', 'user_id', 'ingredient_id')
                    ->withTimestamps();
    }

    public function Likes(){
        return $this->belongsToMany(Recipe::class, 'likes', 'user_id', 'recipe_id')
                    ->withTimestamps();
    }

    // public function Comments(){
    //     return $this->belongsToMany(Recipe::class, 'comments', 'user_id', 'recipe_id')
    //                 ->withTimestamps();
    // }

    public function Schedules(){
        return  $this->hasMany(Schedule::class, 'user_id');
    }

    public function userComments() {
        return $this->hasMany(Comment::class, 'user_id');
    }
}
