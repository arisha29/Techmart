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
            'name' => 'required|string|max:100',
            'phone' => 'nullable|string|max:255',
            'profile_image' => 'nullable|max:4096',
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

        $user->save();

        return response()->json(['message' => 'Profile updated successfully.']);
    }

    public function userLinks(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'website' => 'nullable|url',
            'instagram' => 'nullable|url',
            'facebook' => 'nullable|url',
            'twitter' => 'nullable|url',
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
            'country' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'zip_code' => 'nullable|string|max:255',
            'shipping_address' => 'nullable|string|max:255',
            'billing_address' => 'nullable|string|max:255',
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
                'user_id'=> $userId,
                'country'=>$request->country,
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
}
