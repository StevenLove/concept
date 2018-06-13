import React, { Component } from 'react';
import Concept from "./Concept"

class SubconceptList extends Component{
	render() {
        let selectedGConcepts = this.props.selected.map((name,index)=>{
            if(this.props.selected[index].color === 'green'){
                return <Concept key={index} name={this.props.selected[index].concept} selectFn={this.props.selectFn}></Concept>
            } 
        })
        let selectedBConcepts = this.props.selected.map((name,index)=>{
            if(this.props.selected[index].color === 'blue'){
                return <Concept key={index} name={this.props.selected[index].concept} selectFn={this.props.selectFn}></Concept>
            } 
        })
        let selectedRConcepts = this.props.selected.map((name,index)=>{
            if(this.props.selected[index].color === 'red'){
                return <Concept key={index} name={this.props.selected[index].concept} selectFn={this.props.selectFn}></Concept>
            } 
        })
        return (
            <div className>
                <div className="greenSubConceptListContainer">{selectedGConcepts}</div>
                <div className="blueSubConceptListContainer">{selectedBConcepts}</div>
                <div className="redSubConceptListContainer">{selectedRConcepts}</div>
            </div>
        );
    }
}

export default SubconceptList;