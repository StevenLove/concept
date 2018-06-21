import React, { Component } from 'react';
import Concept from "./Concept"

class SelectedList extends Component{
    // the {variablename} syntax is only for inside the element like below in the <Concept>
	render() {
        const allColors = ['red','green','blue','yellow','black'];
        const getConceptStringsOfColor = targetColor => {
            return this.props.selected[targetColor];
        }

        const handleClick = (concept,color,index) => {
            let record = {
                concept:concept,
                color:color,
                index:index
            }
            this.props.selectFn(record);
        }

        const makeConceptElementFromString = (concept,color,index) => {
            return <Concept
                key={index}
                name={concept}
                selectFn={()=>handleClick(concept,color,index)}>
             </Concept>
        } 
        let conceptGroups = allColors.map(color=>{
            let conceptStrings = getConceptStringsOfColor(color);
            return conceptStrings.map((concept,index)=>{
                return makeConceptElementFromString(concept,color,index);
            })
        }) 

        return (
            <div>
                <div className="scl scl-g">{conceptGroups[1]}</div>
                <div className="scl scl-u">{conceptGroups[2]}</div>
                <div className="scl scl-r">{conceptGroups[0]}</div>
                <div className="scl scl-y">{conceptGroups[3]}</div>
                <div className="scl scl-b">{conceptGroups[4]}</div>
            </div>
        );
    }
}

export default SelectedList;