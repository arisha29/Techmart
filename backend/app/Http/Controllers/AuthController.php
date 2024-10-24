<?php

namespace App\Http\Controllers;

use App\Models\User;
use Cache;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Mail;
use Validator;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register','verifyEmail']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        try {
            $user = User::create([
                'name' => $validate['name'],
                'email' => $validate['email'],
                'password' => bcrypt($validate['password']),
            ]);

            $verificationCode = random_int(100000, 999999);

            Cache::put('email_verification_' . $user->email, $verificationCode, Carbon::now()->addMinutes(2));

            $messageContent = "We have sent an email with a 6-digit verification code. Please do not share this code with anyone. It will expire in 2 minute. Enter this code inside the verification form to verify your account.";

            Mail::html("
            <h1>Email Verification</h1>
            <p>{$messageContent}</p>
            <p><strong>Your Verification Code Is: {$verificationCode}</strong></p>
        ", function ($message) use ($user) {
                $message->to($user->email)
                    ->subject('Email Verification');
            });

            return response()->json([
                'message' => 'Successfully registered. Please check your email to verify your account.',
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                ],
            ], 201); // Return 201 Created response
        } catch (\Exception $e) {
            return response()->json(['error' => 'User registration failed.'], 500);
        }
    }

    /**
     * Verify the email with the provided code.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function verifyEmail(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'code' => 'required|string|size:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $verificationCode = (string) Cache::get('email_verification_' . $request->email);

        $inputCode = (string) $request->code;

        if (!$verificationCode || $verificationCode !== $inputCode) {
            return response()->json(['message' => 'Invalid or expired verification code.'], 400);
        }

        $user = User::where('email', $request->email)->first();
        if ($user) {
            $user->email_verified_at = Carbon::now();
            $user->save();
            Cache::forget('email_verification_' . $request->email);
            return response()->json(['message' => 'Email verified successfully.'], 200);
        }

        return response()->json(['message' => 'User not found.'], 404);
    }


    public function login(Request $request)
    {
        // Validate the request
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:users,email',
            'password' => 'required'
        ]);

        // Return validation errors if validation fails
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'email' => $validator->errors()->first(),
            ], 422);
        }

        // Find the user by email
        $user = User::where('email', $request->email)->first();

        // Check if the user's email is verified
        if (!$user->email_verified_at) {
            $attempts = Cache::get('login_attempts_' . $user->email, 0);

            // If too many attempts, block further logins for 60 minutes
            if ($attempts >= 5) {
                return response()->json(['message' => 'Too many attempts. Please wait 60 minutes before trying again.'], 429);
            }

            // Generate a 6-digit verification code
            $verificationCode = random_int(100000, 999999);

            // Store the verification code in the cache for 2 minutes
            Cache::put('email_verification_' . $user->email, $verificationCode, Carbon::now()->addMinutes(2));

            // Message content for the email
            $messageContent = "We have sent an email with a 6-digit verification code. Please do not share this code with anyone. It will expire in 2 minutes. Enter this code in the verification form to verify your account.";

            // Send verification email
            Mail::html("
            <h1>Email Verification</h1>
            <p>{$messageContent}</p>
            <p><strong>Your Verification Code Is: {$verificationCode}</strong></p>
        ", function ($message) use ($user) {
                $message->to($user->email)
                    ->subject('Email Verification');
            });

            // Increment login attempts
            Cache::increment('login_attempts_' . $user->email);

            // Return response asking to verify email
            return response()->json(['message' => 'Please confirm your email first. A new verification code has been sent.'], 403);
        }

        // Attempt to log in with email and password
        if (!$token = Auth::attempt($request->only(['email', 'password']))) {
            return response()->json(['message' => 'Invalid email or password. Please try again.'], 401);
        }

        // Clear login attempts after successful login
        Cache::forget('login_attempts_' . $user->email);

        // Return success response with token
        return $this->respondWithToken([
            'message' => 'Successfully logged in',
            'token' => $token
        ], 200);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
}
