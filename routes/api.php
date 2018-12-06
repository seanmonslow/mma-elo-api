<?php

use Illuminate\Http\Request;

use App\Http\Middleware\CheckValidApiKey;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::get('/{id}/info', 'FighterController@getFighter')->middleware(CheckValidApiKey::class);

Route::get('/{id}/fights', 'FighterController@getFightersFights')->middleware(CheckValidApiKey::class);

Route::get('/fighterSearch/{search}', 'FighterController@fighterSearch')->middleware(CheckValidApiKey::class);

Route::get('/homepagesummaryevents', function(){
    $events = DB::select("SELECT event, SUM(fighters1.wins + fighters2.wins) AS total_wins FROM results JOIN fighters AS fighters1 ON results.fighter1id = fighters1.id JOIN fighters AS fighters2 ON results.fighter2id = fighters2.id GROUP BY event, event_date ORDER BY total_wins DESC LIMIT 10");
    return $events;
})->middleware(CheckValidApiKey::class);