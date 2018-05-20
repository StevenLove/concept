import React, { Component } from 'react';
import Concept from "./Concept"
// import Concepts from '../Configuration/concepts.js'
// import './App.css';

class ConceptList extends Component {

    naturalOrdering = [
        "object",
        "person",
        "female",
        "male",
        "work",
        "recreation",
        "wildlife",
        "flora",
        "literature",
        "music",
        "theater",
        "arts",
        "television",
        "title"
    ];




    render() {
        let concepts = this.naturalOrdering.map((name,index)=>{
            // return <div>{name}</div>
            return <Concept key={index} name={name}></Concept>
        })
        console.log("concepts",concepts);
        return (
            <div>
                <div> ConceptList </div>
                <p> hello </p> 
                {concepts}
            </div>
        );
    }
}

export default ConceptList;
