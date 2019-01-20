import React from 'react';
import ReactDOM from 'react-dom';
//import {PieChart} from 'react-easy-chart';
import {Chart} from 'react-google-charts';

export class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            summaryFightResults: [],
            summaryRanking: [],
            summaryBestFights: [],
            summaryBestEvents: []
        }
    }
    componentDidMount(){
        /*fetch('/homepagesummary').then(
            function(response){
                if (response.status !== 200) {
                    return;
                }
                response.json().then(function(data) {
                    this.setState({ summaryFightResults: data });
                });
            }
        );*/
        fetch('/homepagesummary')
        .then(response => response.json())
        .then(data => this.setState({ summaryFightResults: data }))
        
        fetch('/homepagesummaryranking')
        .then(response => response.json())
        .then(data => this.setState({ summaryRanking: data }))
        
        fetch('/homepagesummaryfights')
        .then(response => response.json())
        .then(data => this.setState({ summaryBestFights: data }))    

        /*fetch('/homepagesummaryevents')
        .then(response => response.json())
        .then(data => this.setState({ summaryBestEvents: data }))*/    

    }
    render(){
        let types = this.state.summaryFightResults;
        let kos = 0;
        let submissions = 0;
        let decisions = 0;
        for(let i = 0; i <  this.state.summaryFightResults.length; i++){
            if(types[i].type == "Submission"){
                submissions = types[i].count;
            } else if(types[i].type == "Knockout"){
                kos = types[i].count;
            } else {
                decisions = types[i].count;
            }
        }
        let fighters = this.state.summaryRanking.map((fighter, index)=>{
            //console.log(fighter);
            let url = "/fighters/" + fighter.id;
            return(<tr key={index + 1}>
                <th scope="row">{index + 1}</th>
                <td><a href={url}>{fighter.name}</a></td>
                <td>{fighter.wins}-{fighter.draws}-{fighter.losses}</td>
            </tr>);
        });

        let events = this.state.summaryBestEvents.map((event, index)=>{
            return(<tr key={index + 1}>
                <th scope="row">{index + 1}</th>
                <td>{event.event}</td>
                <td>{event.event_date}</td>
            </tr>);
        });

        let fights = this.state.summaryBestFights.map((fight, index)=>{
            let fighter1url = "/fighters/"+ fight.fighter1id;
            let fighter2url = "/fighters/"+ fight.fighter2id;
            return(<tr key={index + 1}>
                <th scope="row">{index + 1}</th>
                <td><a href={fighter1url}>{fight.fighter1name}</a></td>
                <td><a href={fighter2url}>{fight.fighter2name}</a></td>
                <td>{fight.event_date}</td>
                <td>{fight.total_wins}</td>
            </tr>);
        });
        //console.log(fighters);
        //<Doughnut data={data} width="500" height="250"/>
        //<Pie data={data} options={options}/>
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4>Most common fight finish</h4>
                        <Chart
                            width={'500px'}
                            height={'300px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Finish Type', 'Total Amount'],
                                [ 'Submission', submissions ],
                                [ 'Knockout', kos ],
                                [ 'Decision', decisions ]
                            ]}
                            options={{
                                title: 'Fight Finishes',
                            }}
                        />
                    </div>
                    <div className="col-md-6">
                        <h4>Fighters with the highest ELO</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Record</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fighters}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    {/*<div className="col-md-6">
                        <h4>Events with the most wins from each fighter</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Event</th>
                                <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events}
                            </tbody>
                        </table>
                        </div>*/}
                    <div className="col-md-6">
                        <h4>Fights with the highest combined ELO</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Fighter 1</th>
                                <th scope="col">Fighter 2</th>
                                <th scope="col">Event Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fights}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
