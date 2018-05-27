import React, { Component } from 'react';
// import logo from './logo.svg';
import ConceptList from './ConceptList/ConceptList.js'
import './App.css';

class App extends Component {
  render() {
    return(
        <div>
            <div id="hbar">
                <h2> Rules, Options </h2>
            </div>
            <div id="container">
                <div id="panel1" className="panel">Subconcept selector</div>
                <div id="panel2" className="panel">
                    <ConceptList></ConceptList>
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
