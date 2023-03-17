import React from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            headerText: 'Name It!',
            headerExpanded: true,
            suggestedNames: [],
        };
    }
    handleInputChange = (inputText) => {
        name(inputText);
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText?name(inputText):[],
        });
    };
    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headerTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;
