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

        $email = new \SendGrid\Mail\Mail(); 
        $email->setFrom("api@mmaelo.com", "MMA ELO API");
        $email->setSubject("MMA API key");
        $email->addTo($request->input('email'), "Developer");
        $email->addContent(
            "text/html", "Hi, <br><br>Here's your API key: ".$apikey."<br><br> You have a 10,000 daily limit"
        );
        $sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
        try {
            $response = $sendgrid->send($email);
            //print $response->statusCode() . "\n";
            //print_r($response->headers());
            //print $response->body() . "\n";
        } catch (Exception $e) {
        }

        return view("apiform", ['apikey' => $apikey]);

    }

    function view(){
        return view("apiform");
    }

    function viewdoc(){
        return view("apidoc");
    }
}
