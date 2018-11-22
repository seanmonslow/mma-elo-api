import React from 'react';
import ReactDOM from 'react-dom';
import {Line} from 'react-chartjs';

export class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            summaryFightResults: {}
        }
    }
    componentDidMount(){
        fetch('/homepagesummary')
        .then(response => response.json())
        .then(data => this.setState({ summaryFightResults: data }))
    }
    render(){
        var data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        return(
            <div className="container">
                <div className="row">
                    <Line data={data} width="500" height="250"/>
                    <Line data={data} width="500" height="250"/>
                </div>
            </div>
        );
    }
}
