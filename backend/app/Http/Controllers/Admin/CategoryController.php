<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Str;

class CategoryController extends Controller
{
    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:categories,name',
        ]);

        if (Category::where('name', $request->name)->exists()) {
            return response()->json(['message' => 'Category already exists.'], 400);
        }

        $category = new Category();

        $category->name = $request->name;
        $category->slug = Str::slug($request->name);
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

        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        if (Category::where('name', $request->name)->exists()) {
            return response()->json(['message' => 'Category already exists.'], 400);
        }

        $category->name = $request->name;
        $category->slug = Str::slug($request->name);
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
