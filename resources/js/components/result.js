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
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9">
                            <h5 className="card-title">{this.props.currentFighter.name} Vs. {this.state.otherFighter.name}</h5>
                            <p className="card-text">Result: {this.props.fight.result}</p>
                            <p className="card-text">Date: {this.props.fight.event_date}</p>
                            </div>
                            <div className="col-sm">
                                <p className="card-text">ELO: 1200</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
