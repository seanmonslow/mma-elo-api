<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ApiUser;

class ApiController extends Controller
{
    function createUser(Request $request){

        $apikey =  bin2hex(random_bytes(32));

        $apiuser = new ApiUser;

        $apiuser->key = $apikey;

        $apiuser->email = $request->email;

        $apiuser->daily_uses = 0;

        $apiuser->save();

        return view("createapi", ['apikey' => $apikey]);

    }

    function view(){
        return view("apiform");
    }
}
