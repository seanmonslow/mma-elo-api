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
//use App\Fighter;

/*Route::get('/{id}/fights', function ($id) {
	$fighter = Fighter::find($id);
    return $fighter->fights()->get();
});

Route::get('/{id}/info', function ($id) {
	$fighter = Fighter::find($id);
    return $fighter;
});()*/

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
    $submissions = DB::select('select YEAR(event_date) AS year, COUNT(*) AS count, "Submission" AS type from results where result_how LIKE "%Submission%" GROUP BY YEAR(event_date)');
    $knockouts = DB::select('select YEAR(event_date) AS year, COUNT(*) AS count, "Knockout" AS type from results where result_how LIKE "%KO%" OR result_how LIKE "%TKO%" GROUP BY YEAR(event_date)');
    $decisions = DB::select('select YEAR(event_date) AS year, COUNT(*) AS count, "Decision" AS type from results where result_how LIKE "%Decision%" GROUP BY YEAR(event_date)');
    $results = array_merge($submissions, $knockouts, $decisions);
    return $results;
});