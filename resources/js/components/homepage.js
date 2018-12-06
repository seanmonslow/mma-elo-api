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
        var data = {
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
        return(
            <div className="container">
                <div className="row">
                    <Line data={data} width="500" height="250"/>
                </div>
            </div>
        );
    }
}
