<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Models\Ingredient;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function unauthorized(Request $request){
        return response()->json([
            'status' => 'Error',
            'message' => 'Unauthorized',
        ], 200);
    }

    public function profile(Request $request){
        return response()->json([
            'status' => 'Success',
            'data' => Auth::user(),
        ], 200);
    }

    public function login(Request $request){
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
 
        if (!$token) {
            return response()->json([
                'status' => 'Error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        $user->token = $token;
        
        return response()->json([
                'status' => 'Success',
                'data' => $user
            ]);

    }

    public function register(Request $request){
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = new User; 
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        $token = Auth::login($user);
        $user->token = $token;

        return response()->json([
            'status' => 'Success',
            'data' => $user
        ]);
    }

    public function logout(){
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh() {
        $user = Auth::user();
        $user->token = Auth::refresh();

        return response()->json([
            'status' => 'success',
            'data' => $user
        ]);
    }

    public function addIngredientToSL(Request $request, Ingredient $ingredient){
        $user_id = Auth::id();
        $ingredient->ShoppingLists()->attach($user_id);
    }
    public function removeIngredientFromSL(Request $request, Ingredient $ingredient){
        $user_id = Auth::id();
        $ingredient->ShoppingLists()->detach($user_id);
    }
    public function getShoppingList(Request $request){
        $user_id = Auth::id();

        $ings = Ingredient::whereHas('ShoppingLists', function ($query) use ($user_id) {
            $query->where('user_id', $user_id);
        })->get();

        return $ings;
    }
}
