import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Autosuggest from 'react-autosuggest';
import {Fighter} from './fighter.js';
import {Homepage} from './homepage.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const getSuggestionValue = function(suggestion){
    //console.log(suggestion); 
    return suggestion.name;
}



const renderSuggestion = function(suggestion){
    let id = '/fighters/' + suggestion.id;
    return (<Link to = {id} >
        <div>
        {suggestion.name}<br></br>
        Record: {suggestion.wins}-{suggestion.draws}-{suggestion.losses}
        </div>
    </Link>);
};
  

export default class Page extends Component {
    constructor(){
        super();
        this.state = {
            value: '',
            fighterSuggestions: [],
            fighterInfo: {},
            fighterFights: []
        }
        this.onChange = this.onChange.bind(this);
        this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
        this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
        this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    }
    onChange(event, {newValue}){
        this.setState({
            value: newValue
        });
    };
    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested({value}){
        fetch('/fighterSearch/'+value)
        .then(response => response.json())
        .then(data => this.setState({ fighterSuggestions: data }))
        /*this.setState({
            fighterSuggestions: getSuggestions(value)
        });*/
    };

    onSuggestionsClearRequested(){
        this.setState({
            fighterSuggestions: []
        });
    };

    onSuggestionSelected(){
        return null;
    }

    render() {
        const value = this.state.value;
        const suggestions = this.state.fighterSuggestions;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Type a fighter\'s name',
            value,
            onChange: this.onChange
        };
        return (
            <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                    <a className="navbar-brand" href="/">MMA ELO</a>
                        <Autosuggest
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            getSuggestionValue={getSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={inputProps}
                            onSuggestionSelected={this.onSuggestionSelected}
                        />
                </nav>
                <Route exact path="/fighters/:id" component={Fighter} />
                <Route exact path="/" component={Homepage} />
            </div>
            </Router>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Page />, document.getElementById('app'));
}
