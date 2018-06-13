import React, { Component } from 'react';
import Concept from "./Concept"

class SubconceptList extends Component{
	render() {
        let selectedConcepts = this.props.selected.map((name,index)=>{ 
            return <Concept key={index} name={this.props.selected[index].concept} selectFn={this.props.selectFn}></Concept>
        })
        return (
            <div className="subConceptListContainer" >
                {selectedConcepts}
            </div>
        );
    }
}

export default SubconceptList;