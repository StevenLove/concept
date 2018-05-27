import React, { Component } from 'react';

class Concept extends Component {


    /* This runs once at the beginning */
    constructor(props) {
        super(props); // not sure
        this.state = {markers: []}; // initialize 'markers' property on state
    }

    addMarker = color => {
        let newMarkers = [...this.state.markers,color];
        this.setState({
            markers:newMarkers
        })
    }

    handleClick = event => {
        this.addMarker("red")
    }

    render(args) {
        let name = this.props.name;
        let imgSrc = "img/"+name+".png";
        let altText = name;
        return (
            <span className="concept">
                <img onClick={this.handleClick} src={imgSrc} alt={altText}></img>
                <div className="markers">
                    {
                        this.state.markers.map(color=>{
                            return <div className={"marker "+"marker-"+color}></div>
                        })
                    }
                </div>
            </span>
        );
    }
}

export default Concept;
