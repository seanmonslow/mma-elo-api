import React from 'react';
import ReactDOM from 'react-dom';

export class Result extends React.Component{
    constructor(props){
        super(props);
        if(this.props.fight.fighter1id === this.props.currentFighter.id){
            this.state = {
                otherFighter: this.props.fight.otherFighter2
            };
        } else {
            this.state = {
                otherFighter: this.props.fight.otherFighter1
            };
        }
    }
    render(){
        return(
            <div className="card">
                <div className="card-body">
                    {this.props.currentFighter.name} Vs. {this.state.otherFighter.name}
                </div>
            </div>
        );
    }
}
