import React, { Component } from 'react';
import ClickNHold from 'react-click-n-hold';

class Concept extends Component {

    /* this.props.selectFn is passed in from ConceptList */
    
    handleClick = () => {
        this.props.selectFn(this.props.name);
    }
    handleHold = event => {
        this.props.holdFn(this.props.name);
    }
    start(e){
        console.log("Test start");
    }
    end = ((hcf) => {
        return (e,enough) => {
            if(!enough){
                hcf();
            }
        }
    })(this.handleClick)
    render() {
        let name = this.props.name;
        let imgSrc = "img/"+name+".png";
        let altText = name;
        let className = "concept";
        if(this.props.main === "yes"){
            className = className + "Main";
        }
        if(this.props.main !== ""){
            return (
                <ClickNHold
                    time={1.5}
                    onStart={this.start}
                    onClickNHold={this.handleHold}
                    onEnd={this.end}
                >
                    <span className={className}>
                        <img  src={imgSrc} alt={altText}></img>
                    </span>
                </ClickNHold>
            );
        }
        else{
            return(
                <span onClick={this.handleClick} className={className}>
                        <img  src={imgSrc} alt={altText}></img>
                </span>
            );
        }
    }
}

export default Concept;
