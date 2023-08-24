<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
    public function index()
    {
        $comments = Comment::all();
        return response()->json($comments);
    }

    public function store(Request $request)
    {
        $validator = Validator::make( $request->all(), [
            'user_id' => 'required|numeric',
            'recipe_id' => 'required|numeric',
            'text' => 'required|string',
        ]);

        if ( $validator->fails() ) {
            return response()->json($validator->errors(), 500);
        }

        $comment = Comment::create($request->all());
        return response()->json($comment, 200);
    }
}
