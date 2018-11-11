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

Route::get('/', function(){
	return view('welcome');
});