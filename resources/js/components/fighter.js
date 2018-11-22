import React from 'react';
import ReactDOM from 'react-dom';
import {Result} from './result.js';

export class Fighter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fighterInfo: [],
            fighterFights: []
        };
        /*fetch('/'+suggestion.id+'/info')
        .then(response => response.json())
        .then(data => this.setState({ fighterInfo: data }))
        fetch('/'+suggestion.id+'/fights')
        .then(response => response.json())
        .then(data => this.setState({ fighterFights: data }))*/
    }
    
    componentDidMount(){
        fetch('/'+this.props.match.params.id+'/info')
        .then(response => response.json())
        .then(data => this.setState({ fighterInfo: data }))
        fetch('/'+this.props.match.params.id+'/fights')
        .then(response => response.json())
        .then(data => this.setState({ fighterFights: data }))
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.id != prevProps.match.params.id){
            fetch('/'+this.props.match.params.id+'/info')
            .then(response => response.json())
            .then(data => this.setState({ fighterInfo: data }))
            fetch('/'+this.props.match.params.id+'/fights')
            .then(response => response.json())
            .then(data => this.setState({ fighterFights: data }))
        }
    }

    render(){
        return(<div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">{this.state.fighterInfo.name}</div>
                    <div className="card-body">
                        <p className="card-text">Result: {this.state.fighterInfo.wins}-{this.state.fighterInfo.draws}-{this.state.fighterInfo.losses}</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                {this.state.fighterFights.map((fight) =>
                    <Result key={fight.id} currentFighter={this.state.fighterInfo} fight={fight}/>
                )}
            </div>
        </div>);
    }
}
