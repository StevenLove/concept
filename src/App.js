import React, { Component } from 'react';
// import logo from './logo.svg';
import ConceptList from './Components/ConceptList.js'
import './App.css';
import SubconceptSelector from './Components/SubconceptSelector.js';
import SelectedList from './Components/SelectedList';
import WordLists from './Components/WordLists';

class App extends Component {
    constructor(props) {
        super(props); // boilerplate
        this.state = {
            selectedSubconcept: "green", // initialize selected to be green
            selectedConcepts: {
                "green":[], // elements in this array will be a concept name, like "male" or "white" or "supreme"
                "blue":[],
                "red":[],
                "yellow":[],
                "black":[]
            },
            concept: "",
            hidden: "hidden"
        }; 
    }
    copyState = () => JSON.parse(JSON.stringify(this.state));

    /* This fn is sent down to SubconceptSelector.js */
    selectSubconcept = color => {
        this.setState({
            selectedSubconcept:color
        });
    }

    /* This fn is sent down to Concept.js */
    selectConcept = concept => {
        let color = this.state.selectedSubconcept;
        let stateCopy = this.copyState();
        stateCopy.selectedConcepts[color].push(concept);
        this.setState(stateCopy);
    }

    unselectConcept = record => {
        console.log("unselecting record",record);
        let color = record.color;
        let index = record.index;
        let stateCopy = this.copyState();

        stateCopy.selectedConcepts[color].splice(index,1);
        this.setState({selectedConcepts:stateCopy.selectedConcepts})
    }

    getRandomWord = (wordList) => {
        let num = wordList.length;
        let index = Math.floor(Math.random() * num); // ranges from 0 to num-1
        // let stateCopy = this.copyState();
        this.setState({"concept":wordList[index]});
    }
    hideWord = () => this.setState({"hidden":"hidden"});
    showWord = () => this.setState({"hidden":"unHidden"});
  render() {
    return(
        <div>
            {/* <div id="hbar">
                <h2> Rules, Options </h2>
            </div> */}
            <div id="container">
                <div id="panel1" className="panel">
                    <WordLists selectFn={this.getRandomWord} showFn={this.showWord} hideFn={this.hideWord} word={this.state.concept} isHidden={this.state.hidden}></WordLists>
                    <SubconceptSelector selectFn={this.selectSubconcept} selectedSubconcept={this.state.selectedSubconcept}></SubconceptSelector>
                </div>
                <div id="panel2" className="panel">
                    <ConceptList selectFn={this.selectConcept} selected={this.state.selectedConcepts}></ConceptList>
                </div>
                <div id="panel3" className="panel">
                    <SelectedList selectFn={this.unselectConcept} selectSubconcept={this.selectSubconcept} selected={this.state.selectedConcepts} />
                </div>
            </div>
        </div>
    )
  }
}

export default App;
