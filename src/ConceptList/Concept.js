import React, { Component } from 'react';

class Concept extends Component {
    // name="hi";
    render(args) {
        let name = this.props.name;
        let imgSrc = "img/"+name+".png";
        let altText = name;
        console.log("this",this);
        return (
            <div>
                <img src={imgSrc} alt={altText}></img>
            </div>
        );
    }
}

export default Concept;
