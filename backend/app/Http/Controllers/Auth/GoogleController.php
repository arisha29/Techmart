<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Request;

class GoogleController extends Controller
{
    // For normal OAuth login
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->stateless()->redirect();
    }

    // Handle OAuth callback
    public function handleGoogleCallback(Request $request)
    {
        try {
            // Get the Google user from the token provided by the frontend
            $googleUser = Socialite::driver('google')->stateless()->userFromToken($request->query('id_token'));

            if (!$googleUser) {
                return response()->json(['message' => 'Invalid Google token.'], 400);
            }

            // Create or log in the user based on Google data
            $user = $this->loginOrCreateUser($googleUser);

            // Return the user data as JSON
            return response()->json(['user' => $user, 'message' => 'Successfully logged in with Google.'], 200);

        } catch (\Exception $e) {
            // Handle any errors and return a 500 error with a message
            return response()->json(['message' => 'Error during Google login: ' . $e->getMessage()], 500);
        }
    }

    // Common function to log in or create a user
    private function loginOrCreateUser($googleUser)
    {
        $imageUrl = $googleUser->getAvatar();
        $imageContent = file_get_contents($imageUrl);
        $gImagePath = 'frontend/assets/profile/images/';
        $avatar = $googleUser->getEmail() . '-profile_image.jpg';
        file_put_contents($gImagePath . $avatar, $imageContent);

        $currentUser = User::where('google_id', $googleUser->getId())->first();
        $profileImage = $currentUser ? ($currentUser->profile_image ?: '/' . $avatar) : '/' . $avatar;

        // Create or update the user
        $user = User::updateOrCreate(
            ['email' => $googleUser->getEmail()],
            [
                'name' => $googleUser->getName(),
                'google_id' => $googleUser->getId(),
                'profile_image' => $profileImage,
                'password' => $googleUser['email'],
            ]
        );

        Auth::login($user);
        return $user;
    }
}

