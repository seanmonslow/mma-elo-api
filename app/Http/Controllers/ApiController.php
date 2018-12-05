<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ApiUser;

class ApiController extends Controller
{
    function createUser(Request $request){

        $apikey = bin2hex(random_bytes(16));

        $apiuser = new ApiUser;

        $apiuser->key = $apikey;

        $apiuser->email = $request->input('email');

        $apiuser->daily_uses = 0;

        $apiuser->save();

        return view("apiform", ['apikey' => $apikey]);

    }

    function view(){
        return view("apiform");
    }
}
