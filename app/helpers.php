<?php

namespace App;

use Illuminate\Support\Str;

class Helper
{
    public static function slugify($str, $type)
    {
        $slug = "";
        if($type = 'user_name'){
           $slug = Str::slug($str);
        }
        return $slug;
    }

    public static function successResponse($code, $data, $message)
    {
        return [
            "status" => $code,
            "data" => $data,
            "message" => $message
        ];
    }

    public static function errorResponse($code, $message)
    {
        return [
            "status" => $code,
            "message" => $message
        ];
    }
}