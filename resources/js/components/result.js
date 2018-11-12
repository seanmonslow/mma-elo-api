import React from 'react';
import ReactDOM from 'react-dom';

export class Result extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fighter1id: this.props.fight.fighter1id,
            fighter2id: this.props.fight.fighter2id,
            event: this.props.fight.event,
            event_date: this.props.fight.event_date,
            result: this.props.fight.result,
            result_how: this.props.fight.result_how,
            otherFighter: {}
        };
    }
    render(){
        return(
            <div class="card">
                <div class="card-body">
                    {this.props.currentFighter.name} Vs. {this.state.otherFighter.name}
                </div>
            </div>
        );
    }
}
