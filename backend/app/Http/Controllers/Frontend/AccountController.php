<?php

namespace App\Http\Controllers\Frontend;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Models\UserLinks;
use DB;
use Hash;
use Illuminate\Http\Request;
use Validator;

class AccountController extends Controller
{
    public function store(Request $request)
    {

    }

    public function Profileupdate(Request $request)
    {
        $user = User::findOrFail(auth()->user()->id);

        if (!$user) {
            return response()->json(['message' => 'User not found!'], 404);
        }

        $validate = $request->validate([
            'name' => 'required|string|min:3|max:100',
            'phone' => 'nullable|regex:/^\+?[0-9]{10,15}$/',
            // 'profile_image' => 'nullable|mimes:jpg,jpeg,png,webp|max:4096',
            'profile_image' => 'nullable|max:4096|mimes:jpg,jpeg,png,webp|file',
        ], [
            'name.required' => 'The name field is required.',
            'name.string' => 'Please provide a valid name.',
            'name.min' => 'Name must be atleast 3 characters.',
            'name.max' => 'The provided name is too long. Maximum length is 100 characters.',
            'phone.regex' => 'Please provide a valid mobile number (10-15 digits).',
            // 'profile_image.max' => 'Profile image must not exceed 4MB in size.',
            // 'profile_image.mimes' => 'Only jpg, jpeg, png, and webp file formats are allowed for profile images.'
        ]);

        if (!$validate) {
            return response()->json($validate->errors(), 422);
        }

        $user->name = $request->name ?? $user->name;
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

        // if ($request->hasFile('profile_image')) {
        //     $file = $request->file('profile_image');
        //     $fileName = uniqid() . '.' . $file->getClientOriginalExtension();
        //     $filePath = $file->storeAs('assets/media/images/users', $fileName, 'public');

        //     $selected_image = 'storage/' . $filePath;
        //     $user->profile_image = $selected_image;
        // }

        $user->save();

        return response()->json(['message' => 'Profile updated successfully.']);
    }

    public function userLinks(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'website' => 'nullable|url|regex:/^(https?:\/\/(?:www\.)?[a-zA-Z0-9./-]+)$/',
            'instagram' => 'nullable|url',
            'facebook' => 'nullable|url',
            'twitter' => 'nullable|url',
        ], [
            'website.url' => 'Please provide a valid website URL (e.g., https://www.example.com).',
            'website.regex' => 'The website URL format is invalid. Ensure it starts with http:// or https://.',
            'instagram.url' => 'Please provide a valid Instagram profile URL.',
            'facebook.url' => 'Please provide a valid Facebook profile URL.',
            'twitter.url' => 'Please provide a valid Twitter profile URL.',
        ]);

        if ($validate->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validate->errors(),
            ], 422);
        }

        $userId = auth()->user()->id;

        $existingLinks = DB::table('user_links')->where('user_id', $userId)->first();

        if ($existingLinks) {
            $updateLinks = DB::table('user_links')->where('user_id', $userId)->update([
                'website' => $request->website,
                'instagram' => $request->instagram,
                'facebook' => $request->facebook,
                'twitter' => $request->twitter,
                'updated_at' => now()
            ]);

            if ($updateLinks) {
                return response()->json([
                    'success' => true,
                    'message' => 'Links updated successfully.',
                ], 200);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to update links. Please try again',
                ], 500);
            }
        } else {
            $links = DB::table('user_links')->insert([
                'user_id' => auth()->user()->id,
                'website' => $request->website,
                'instagram' => $request->instagram,
                'facebook' => $request->facebook,
                'twitter' => $request->twitter,
                'created_at' => now()
            ]);

            if ($links) {
                return response()->json([
                    'success' => true,
                    'message' => 'Links saved successfully.',
                ], 201);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to save links. Please try again',
                ], 500);
            }
        }
    }

    public function storeAddress(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'country' => 'required|string',
            'city' => 'required|string',
            'zip_code' => 'nullable|digits:5',
            'shipping_address' => 'required|string|max:255',
            'billing_address' => 'required|string|max:255',
        ], [
            'country.required' => 'The country field is required.',
            'city.required' => 'The city field is required.',
            'zip_code.digits' => 'The zip code must be exactly 5 digits.',
            'billing_address.required' => 'The billing address is required.',
            'shipping_address.required' => 'The shipping address is required.',
        ]);

        if ($validate->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validate->errors(),
            ], 422);
        }

        $userId = auth()->user()->id;

        $existingAddress = DB::table('addresses')->where('user_id', $userId)->first();

        if ($existingAddress) {
            $updateAddress = DB::table('addresses')->where('user_id', $userId)->update([
                'country' => $request->country,
                'city' => $request->city,
                'zip_code' => $request->zip_code,
                'shipping_address' => $request->shipping_address,
                'billing_address' => $request->billing_address,
                'updated_at' => now()
            ]);

            if ($updateAddress) {
                return response()->json([
                    'success' => true,
                    'message' => 'Address updated successfully.',
                ], 200);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to update address. Please try again',
                ], 500);
            }
        } else {
            $insertAddress = DB::table('addresses')->where('user_id', $userId)->insert([
                'user_id' => $userId,
                'country' => $request->country,
                'city' => $request->city,
                'zip_code' => $request->zip_code,
                'shipping_address' => $request->shipping_address,
                'billing_address' => $request->billing_address,
                'created_at' => now()
            ]);

            if ($insertAddress) {
                return response()->json([
                    'success' => true,
                    'message' => 'Address saved successfully.',
                ], 201);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to save address. Please try again',
                ], 500);
            }
        }
    }

    public function passwordUpdate(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'current_password' => 'required|string|min:8',
            'password' => 'required|string|min:8|confirmed',
        ], [
            'current_password.required' => 'The current password is required.',
            'current_password.min' => 'The current password must be at least 8 characters.',
            'password.required' => 'The new password is required.',
            'password.min' => 'The new password must be at least 8 characters.',
            'password.confirmed' => 'The password confirmation does not match.',
        ]);

        if ($validate->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validate->errors()->messages(),
            ], 422);
        }

        $user = auth()->user();

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'The current password is incorrect.'
            ], 400);
        }

        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json([
            'success' => true,
            'message' => 'Password updated successfully.'
        ]);
    }
}
