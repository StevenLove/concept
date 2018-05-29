import React, { Component } from 'react';
// import logo from './logo.svg';
import ConceptList from './Components/ConceptList.js'
import './App.css';
import SubconceptSelector from './Components/SubconceptSelector.js';

class App extends Component {
    constructor(props) {
        super(props); // boilerplate
        this.state = {
            selectedSubconcept: "green",
            selectedConcepts: [] // elements look like {concept:"male",color:"blue"}
        }; // initialize selected to be green
    }

    /* This fn is sent down to SubconceptSelector.js */
    selectSubconcept = color => {
        this.setState({
            selectedSubconcept:color,
            selectedConcepts:this.state.selectedConcepts
        });
        console.log("subconcept selected",color);
    }

    /* This fn is sent down to Concept.js */
    selectConcept = concept => {
        let newSelection = {concept:concept,color:this.state.selectedSubconcept}
        let newConcepts = [...this.state.selectedConcepts,newSelection];
        // let newState = Object.assign({},)
        this.state.selectedConcepts.push(newSelection);
        this.setState({
            selectedSubconcept:this.state.selectedSubconcept,
            selectedConcepts:newConcepts
        });
        console.log("concept selected",concept);
    }
    

  render() {
    return(
        <div>
            <div id="hbar">
                <h2> Rules, Options </h2>
            </div>
            <div id="container">
                <div id="panel1" className="panel">
                    <SubconceptSelector selectFn={this.selectSubconcept}></SubconceptSelector>
                </div>
                <div id="panel2" className="panel">
                    <ConceptList selectFn={this.selectConcept} selected={this.state.selectedConcepts}></ConceptList>
                </div>
                <div id="panel3" className="panel">
                    Chosen concepts
                </div>
            </div>
        </div>
    )
  }
}

export default App;
