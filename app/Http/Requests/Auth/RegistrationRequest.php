<?php

namespace App\Http\Requests\Auth;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class RegistrationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "first_name" => "required|string",
            "last_name" => "required|string",
            "user_name" => "required|string",
            "email" => "required|string",
            "password" => "required|min:6|regex:/^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\x])(?=.*[!$#%]).*$/|confirmed",
            "password_confirmation" => "required|same:password",
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        return response()->json([
            'status' => false,
            'message' => 'validation error',
            'errors' => $validator->errors()
        ], 401);
    }
}
