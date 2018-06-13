import React, { Component } from 'react';

class Concept extends Component {

    /* this.props.selectFn is passed in from ConceptList */
    
    handleClick = event => {
        this.props.selectFn(this.props.name);
    }

    render(args) {
        let name = this.props.name;
        let imgSrc = "img/"+name+".png";
        let altText = name;
        return (
            <span onClick={this.handleClick} className="concept">
                <img  src={imgSrc} alt={altText}></img>
                {//<Markers colors={this.props.markerColors}></Markers>
                }
            </span>
        );
    }
}

export default Concept;
