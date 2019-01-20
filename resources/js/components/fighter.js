import React from 'react';
import ReactDOM from 'react-dom';
import {Result} from './result.js';
import {LineChart} from 'react-easy-chart';
import {Chart} from 'react-google-charts';

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
        let fighterId = this.state.fighterInfo.id;
        let data = this.state.fighterFights.map(function(fight){
            if(fight.fighter1id == fighterId){
                return [fight.event_date.substr(0, 10), Number(fight.fighter1eloafter)];
            } else {
                return [fight.event_date.substr(0, 10), Number(fight.fighter2eloafter)];
            }
        });
        data = data.reverse();
        data.unshift([
            'Date',
            'Elo',
          ]);
        if(data.length == 1){
            data.push(['1990-01-01', 1200]);
        }
        console.log(data);
        return(<div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">{this.state.fighterInfo.name}</div>
                    <div className="card-body">
                        <p className="card-text">Result: {this.state.fighterInfo.wins}-{this.state.fighterInfo.draws}-{this.state.fighterInfo.losses}</p>
                    </div>
                </div>
                <Chart
                    chartType="Line"
                    width={540}
                    height={250}
                    loader={<div>Loading Chart</div>}
                    data={data}
                    options={{
                        axes: {
                            x: {
                                0: { side: 'bottom', label: ""}
                            }
                        },
                        chart: {
                          title: 'Fighter\'s ELO history'
                        },
                      }}
                />
            </div>
            <div className="col-md-6">
                {this.state.fighterFights.map((fight) =>
                    <Result key={fight.id} currentFighter={this.state.fighterInfo} fight={fight}/>
                )}
            </div>
        </div>);
    }
}
