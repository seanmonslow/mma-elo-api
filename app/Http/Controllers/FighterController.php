<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Fighter;
use Illuminate\Support\Facades\DB;

class FighterController extends Controller
{
    function getFighter($id){
    	return Fighter::find($id);
    }

    function getFightersFights($id){
    	$fighter = Fighter::find($id);
    	return $fighter->fights()->get();
    }

    function fighterSearch($searchTerm){
    	$fighters = DB::table('fighters')->select('*')->where('name', 'LIKE', '%'.$searchTerm.'%')->orderBy('wins', 'DESC')->limit(5)->get();
    	return $fighters;
    }
}
