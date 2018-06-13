import React, { Component } from 'react';
// import logo from './logo.svg';
import ConceptList from './Components/ConceptList.js'
import './App.css';
import SubconceptSelector from './Components/SubconceptSelector.js';
import SelectedList from './Components/SelectedList';

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
    }

    // unselectConcept = record => {
    //     console.log("unselecting record",record);
    //     let concept = record.concept;
    //     let color = record.color;
    //     let selectedConcepts = this.state.selectedConcepts.slice(0); // make a copy of selected Concepts
        
    //     let indexToRemove = 0;
    //     let n = record.index; // index of this record in a list of records of only its color
    //     for(let i = 0; i <= n; ++i){ // iterate n+1 times
            
    //     }
        
    //     let conceptsOfThisColor = selectedConcepts.filter(record=>record.color === color); // get just the ones of the right color
    //     let conceptToRemove = conceptsOfThisColor[record.index]; // find the obj we want to remove
    //     let indexToRemove = selectedConcepts.indexOf(element=>element === conceptToRemove); // using object equality by reference here
        
    //     if(indexToRemove === -1){ // target not found
    //         throw("how was this possible? tried to remove concept but couldnt find it",record,selectedConcepts);
    //     }
    //     selectedConcepts.splice(indexToRemove,1); // remove the target concept
    //     this.setState({
    //         selectedSubconcept:this.state.selectedSubconcept,
    //         selectedConcepts:selectedConcepts
    //     })
    // }

  render() {
    return(
        <div>
            <div id="hbar">
                <h2> Rules, Options </h2>
            </div>
            <div id="container">
                <div id="panel1" className="panel">
                    <SubconceptSelector selectFn={this.selectSubconcept} selectedSubconcept={this.state.selectedSubconcept}></SubconceptSelector>
                </div>
                <div id="panel2" className="panel">
                    <ConceptList selectFn={this.selectConcept} selected={this.state.selectedConcepts}></ConceptList>
                </div>
                <div id="panel3" className="panel">
                    <SelectedList /*selectFn={this.unselectConcept}*/ selected={this.state.selectedConcepts} />
                </div>
            </div>
        </div>
    )
  }
}

export default App;
