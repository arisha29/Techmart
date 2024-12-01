<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $category = new Category();

        $category->name = $request->name;
        if ($request->has('slug') && !empty($request->slug)) {
            $category->slug = $request->slug;
        } else {
            $category->slug = str_replace('', '-', strtolower($request->name));
        }

        $category->save();

        return response()->json(['message' => 'category created successfully'], 200);
    }

    public function show()
    {
        $categories = Category::all();

        if ($categories->isEmpty()) {
            return response()->json(['message' => 'No categories found!'], 404);
        }

        return response()->json(['categories' => $categories], 200);
    }

    public function edit()
    {
        //
    }

    public function update(Request $request, $slug)
    {
        $category = Category::where('slug', $slug)->first();

        if (!$category) {
            return response()->json(['message' => 'category not found.'], 404);
        }

        $category->name = $request->name;
        $category->slug = $request->has('slug') && !empty($request->slug)
            ? $request->slug
            : str_replace(' ', '-', strtolower($request->name));

        $category->save();

        return response()->json(['message' => 'category updated successfully.']);
    }

    public function destory($slug)
    {
        $category = Category::where('slug', $slug)->first();

        if (!$category) {
            return response()->json(['message' => 'category not found.'], 404);
        }

        $category->delete();

        return response()->json(['message' => 'category deleted successfully.']);
    }
}
