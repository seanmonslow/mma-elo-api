import React from 'react';
import ReactDOM from 'react-dom';

export class Result extends React.Component{
    constructor(props){
        super(props);
        if(this.props.fight.fighter1id === this.props.currentFighter.id){
            this.state = {
                otherFighter: this.props.fight.otherFighter2,
                fighterElo: this.props.fight.fighter1eloafter,
                result: this.props.fight.result
            };
        } else {
            let fightresult = "";
            if(this.props.fight.result == "loss"){
                fightresult = "win";
            } else if(this.props.fight.result == "win"){
                fightresult = "loss";
            } else {
                fightresult = this.props.fight.result;
            }
            this.state = {
                otherFighter: this.props.fight.otherFighter1,
                fighterElo: this.props.fight.fighter2eloafter,
                result: fightresult
            };
        }
    }
    render(){
        let otherfighterurl;
        let otherFighterName;
        if(this.state.otherFighter !== null){
            otherfighterurl = "/fighters/"+this.state.otherFighter.id;
            otherFighterName = this.state.otherFighter.name;
        } else {
            otherFighterName = "Unknown fighter";
            otherfighterurl = "/";
        }
        return(
            <div className="card">
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9">
                            <h5 className="card-title">{this.props.currentFighter.name} Vs. <a href={otherfighterurl}>{otherFighterName}</a></h5>
                            <p className="card-text">Result: {this.state.result}</p>
                            <p className="card-text">Date: {this.props.fight.event_date}</p>
                            </div>
                            <div className="col-sm">
                                <p className="card-text">ELO After: {this.state.fighterElo}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
