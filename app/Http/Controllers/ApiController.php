<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ApiUser;

class ApiController extends Controller
{
    function createUser(Request $request){

        $email = new \SendGrid\Mail\Mail(); 
        $email->setFrom("test@example.com", "Example User");
        $email->setSubject("Sending with SendGrid is Fun");
        $email->addTo($request->input('email'), "Example User");
        $email->addContent("text/plain", "and easy to do anywhere, even with PHP");
        $email->addContent(
            "text/html", "<strong>and easy to do anywhere, even with PHP</strong>"
        );
        $sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
        try {
            $response = $sendgrid->send($email);
            print $response->statusCode() . "\n";
            print_r($response->headers());
            print $response->body() . "\n";
        } catch (Exception $e) {
            echo 'Caught exception: '. $e->getMessage() ."\n";
        }

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
