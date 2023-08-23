<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;
use Illuminate\Support\Facades\Validator;

class ImageController extends Controller
{
    public function index()
    {
        $images = Image::all();
        return response()->json($images);
    }

    public function store(Request $request)
    {
        $validator = Validator::make( $request->all(), [
            'image' => 'required|string',
            'recipe_id' => 'required|numeric',
        ]);

        if ( $validator->fails() ) {
            return response()->json($validator->errors(), 500);
        }

        $image = Image::create($request->all());
        return response()->json($image, 200);
    }

 
}
