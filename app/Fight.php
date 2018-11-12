<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Fighter;

class Fight extends Model
{
    protected $table = 'results';
    protected $appends = ['otherFighter1', 'otherFighter2'];

    public function getOtherFighter1Attribute(){
        return Fighter::find($this->fighter1id);
    }
    public function getOtherFighter2Attribute(){
        return Fighter::find($this->fighter2id);
    }
}
