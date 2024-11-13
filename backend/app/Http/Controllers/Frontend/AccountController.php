<?php

namespace App\Http\Controllers\Frontend;

use App\Models\User;
use App\Http\Controllers\Controller;
use DB;
use Hash;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function store(Request $request)
    {

    }

    public function update(Request $request)
    {

        $user = User::findOrFail(auth()->user()->id);

        if (!$user) {
            return response()->json(['message' => 'User not found!'], 404);
        }

        $validate = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255|email|unique:users',
            'password' => 'required|string|min:8|confirm',
            'password_confirmation' => 'required|string|min:8',
            'phone' => 'nullable|string|max:255',
            'profile_image' => 'nullable|max:4096'
        ]);

        if (!$validate) {
            return response()->json($validate->errors(), 422);
        }

        $user->name = $request->name ?? $user->name;
        $user->email = $request->email ?? $user->email;
        $user->password = Hash::make($request->password);
        $user->phone = $request->phone;

        if ($request->hasFile('profile_image')) {
            $file = $request->file('profile_image');
            $allowedFileExt = ['png', 'jpg', 'jpeg', 'webp'];

            if (in_array($file->getClientOriginalExtension(), $allowedFileExt)) {
                $fileName = uniqid() . '.' . $file->getClientOriginalExtension();
                $filePath = $file->storeAs('assets/media/images/users', $fileName, 'public');

                $selected_image = 'storage/' . $filePath;
                $user->profile_image = $selected_image;
            } else {
                return response()->json(['message' => 'Invalid image file format.']);
            }
        }
        
        $user->update();

        return response()->json(['message' => 'Profile updated successfully.']);
    }
}
