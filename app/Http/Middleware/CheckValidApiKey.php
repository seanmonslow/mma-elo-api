<?php

namespace App\Http\Middleware;

use Closure;
use App\ApiUser;
use Illuminate\Support\Facades\DB;

class CheckValidApiKey
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $apiuser = DB::table('api_users')->where('key', $_GET["api_key"])->first();

        //return response($apiuser->email, 401);

        if($apiuser == null){
            return response(["message"=>"No api key found"], 401);
        } elseif($apiuser->daily_uses > 10000){
            return response(["message"=>"Exceeded daily uses"], 401);
        } else {
            return $next($request);
        }
    }
}
