<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Fight;

class Fighter extends Model
{
    protected $table = 'fighters';

    public function fights(){
        $fights = Fight::where('fighter1id', $this->id)->orWhere('fighter2id', $this->id)->orderBy('event_date', 'DESC');
        return $fights;
    }
}
