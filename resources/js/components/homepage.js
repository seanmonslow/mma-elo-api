import React from 'react';
import ReactDOM from 'react-dom';
import {Line} from 'react-chartjs';

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

        fetch('/homepagesummaryevents')
        .then(response => response.json())
        .then(data => this.setState({ summaryBestEvents: data }))    

    }
    render(){
        let years = [];
        let decisions = [];
        let submissions = [];
        let knockouts = [];
        this.state.summaryFightResults.forEach(function(element){
            if(years.indexOf(element.year) == -1){
                years.push(element.year);
                decisions.push(0);
                submissions.push(0);
                knockouts.push(0);
            }
        });
        years.sort();
        this.state.summaryFightResults.forEach(function(element){
            let indexOf = years.indexOf(element.year);
            if(indexOf != -1){
                if(element.type == "Submission"){
                    submissions[indexOf] = element.count;
                } else if(element.type == "Knockout"){
                    knockouts[indexOf] = element.count;
                } else if(element.type == "Decision"){
                    decisions[indexOf] = element.count;
                }
            }
        });
        let data = {
            labels: years,
            datasets: [
                {
                    label: "Decisions",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: decisions
                },
                {
                    label: "Knockouts",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: knockouts
                },
                {
                    label: "Submissions",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: submissions
                }
            ]
        };
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
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4>Most common fight finish</h4>
                        <Line data={data} width="500" height="250"/>
                    </div>
                    <div className="col-md-6">
                        <h4>Most wins from a fighter</h4>
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
                    <div className="col-md-6">
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
                    </div>
                    <div className="col-md-6">
                        <h4>Fights with the most past wins</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Fighter 1</th>
                                <th scope="col">Fighter 2</th>
                                <th scope="col">Event Date</th>
                                <th scope="col">Sum of fighter wins</th>
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
