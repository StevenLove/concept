import React, { Component } from 'react';

class Concept extends Component {
    // name="hi";

    markers = [];


    handleClick = event => {
        console.log("event",event);
        event.currentTarget.style.backgroundColor = '#cc0000';
    }

    render(args) {
        let name = this.props.name;
        let imgSrc = "img/"+name+".png";
        let altText = name;
        console.log("this",this);
        return (
            <span className="concept">
                <img onClick={this.handleClick} src={imgSrc} alt={altText}></img>
                <div class="marker">hi</div>
            </span>
        );
    }
}

export default Concept;
