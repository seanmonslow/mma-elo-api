<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{id}/info', 'FighterController@getFighter');

Route::get('/{id}/fights', 'FighterController@getFightersFights');

Route::get('/fighterSearch/{search}', 'FighterController@fighterSearch');

Route::get( '/fighters/{path?}', function(){
    return view( 'welcome' );
} )->where('path', '.*');

Route::get('/', function(){
	return view('welcome');
});

Route::get('/homepagesummary', function(){
    $submissions = DB::select('select COUNT(*) AS count, "Submission" AS type from results where result_how LIKE "%Submission%"');
    $knockouts = DB::select('select COUNT(*) AS count, "Knockout" AS type from results where result_how LIKE "%KO%" OR result_how LIKE "%TKO%"');
    $decisions = DB::select('select COUNT(*) AS count, "Decision" AS type from results where result_how LIKE "%Decision%"');
    $results = array_merge($submissions, $knockouts, $decisions);
    return $results;
});

Route::get('/homepagesummaryranking', function(){
    $rankings = DB::select("SELECT * FROM fighters ORDER BY highest_elo DESC LIMIT 10");
    return $rankings;
});

Route::get('/homepagesummaryfights', function(){
    $fights = DB::select("SELECT fighters1.id AS fighter1id, fighters2.id AS fighter2id, fighters1.name AS fighter1name, fighters2.name AS fighter2name, DATE(results.event_date) AS event_date FROM results JOIN fighters AS fighters1 ON results.fighter1id = fighters1.id JOIN fighters AS fighters2 ON results.fighter2id = fighters2.id ORDER BY (results.fighter1eloafter + results.fighter1eloafter) DESC LIMIT 10");
    return $fights;
});

/*Route::get('/homepagesummaryevents', function(){
    $events = DB::select("SELECT event, DATE(event_date) AS event_date, SUM(fighters1.wins + fighters2.wins) AS total_wins FROM results JOIN fighters AS fighters1 ON results.fighter1id = fighters1.id JOIN fighters AS fighters2 ON results.fighter2id = fighters2.id GROUP BY event, event_date ORDER BY total_wins DESC LIMIT 10");
    return $events;
});*/

Route::get('/apisignup', 'ApiController@view');

Route::post('/apisignup', 'ApiController@createUser');