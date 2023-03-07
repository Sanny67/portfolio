<?php

namespace App\Http\Controllers\API;

use App\Helper;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegistrationRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(RegistrationRequest $request)
    {
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $input['user_name'] = Helper::slugify($input['first_name'] . ' ' . $input['last_name'], 'user_name');
        $data['user'] = User::create($input);
        $data['token'] = $data['user']->createToken('MyApp')->plainTextToken;
        
        return Helper::successResponse(201, $data, "User registered succesfully");
    }

    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if(!@$user) {
            return Helper::errorResponse(400, 'This email does not exist');
        } else if(!Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return Helper::errorResponse(400, 'The password you entered does not match');
        } else {
            $data['user'] = Auth::user();
            $data['user'] = $request->user();
            $data['token'] = $data['user']->createToken('MyApp')->plainTextToken;
            
            return Helper::successResponse(200, $data, "User logged in succesfully");
        }
    }

    
}
