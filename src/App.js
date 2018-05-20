import React, { Component } from 'react';
// import logo from './logo.svg';
import ConceptList from './ConceptList/ConceptList.js'
import './App.css';

class App extends Component {
    // render() {
    //   return (
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <h1 className="App-title">Welcome to React</h1>
    //       </header>
    //       <p className="App-intro">
    //         To get started, edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <ConceptList></ConceptList>
    //     </div>
    //   );
    // }
  render() {
    return(
        <div>
            <div id="hbar"></div>
            <div id="container">
                <div id="panel1" className="panel"></div>
                <div id="panel2" className="panel">
                    <ConceptList></ConceptList>
                </div>
                <div id="panel3" className="panel"></div>
            </div>
        </div>
    )
  }
}

export default App;
