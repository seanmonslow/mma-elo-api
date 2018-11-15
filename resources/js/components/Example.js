import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Autosuggest from 'react-autosuggest';
import {Result} from './result.js';

const getSuggestionValue = function(suggestion){
    //console.log(suggestion); 
    return suggestion.name;
}

const renderSuggestion = suggestion => (
    <div>
      {suggestion.name}<br></br>
      Record: {suggestion.wins}-{suggestion.draws}-{suggestion.losses}
    </div>
  );
  

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

    onSuggestionSelected(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }){
        console.log(suggestion.id);
        fetch('/'+suggestion.id+'/info')
        .then(response => response.json())
        .then(data => this.setState({ fighterInfo: data }))
        fetch('/'+suggestion.id+'/fights')
        .then(response => response.json())
        .then(data => this.setState({ fighterFights: data }))
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
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                    <a className="navbar-brand" href="#">MMA ELO</a>
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
                <div className="row">
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
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Page />, document.getElementById('app'));
}
