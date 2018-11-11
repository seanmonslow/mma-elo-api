<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Fight;

class Fighter extends Model
{
    protected $table = 'fighters';

    public function fights(){
    	return Fight::where('fighter1id', $this->id)->orWhere('fighter2id', $this->id);
    }

    public static function sakuraba(){
    	return Fighter::find(84);
    }
}
