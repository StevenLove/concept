import React, { Component } from 'react';
// import {ScrollTo} from "react-scroll-to";
import * as Scroll from 'react-scroll';
let scroll = Scroll.animateScroll;

class ScrollWithMouse extends Component {

    scrollDiff = 10;
    scrollTime = 20 ;
    handle = undefined;
    scrollAmt = 0;
    id = this.props.scrollID;
    

    speeds = [10,15,25,40]
    
    scrollDown=n=>{
        console.log("scroll down",this.id);
        if(n === undefined) n = this.scrollDiff;
        scroll.scrollMore(n,{
            containerId:this.id,
            smooth:false,
            duration:0
        });
    }
    scrollUp=n=>{
        if(n === undefined) n = -this.scrollDiff;
        scroll.scrollMore(-n,{
            containerId:this.id,
            smooth:false,
            duration:0
        });
    }
    startScrollDown = speed => {
        speed = this.speeds[speed];
        this.scrollDown(speed);
        this.handle = setInterval(()=>this.scrollDown(speed),this.scrollTime)
    }
    startScrollUp = speed => {
        speed = this.speeds[speed];
        this.scrollUp(speed);
        this.handle = setInterval(()=>this.scrollUp(speed),this.scrollTime)
    }
    stopScrolling = () => {
        clearInterval(this.handle)
    }

    render() {
        return (
            <div className="scrollContainer">
                <div className="scrollArea scrollArea-up" style={{height:"20px"}} onMouseEnter={(e)=>this.startScrollUp(0,e)} onMouseLeave={this.stopScrolling}></div>
                <div className="scrollArea scrollArea-up" style={{height:"15px"}} onMouseEnter={(e)=>this.startScrollUp(1,e)} onMouseLeave={this.stopScrolling}></div>
                <div className="scrollArea scrollArea-up" style={{height:"10px"}} onMouseEnter={(e)=>this.startScrollUp(2,e)} onMouseLeave={this.stopScrolling}></div>
                <div className="scrollArea scrollArea-up" style={{height:"5px"}} onMouseEnter={(e)=>this.startScrollUp(3,e)} onMouseLeave={this.stopScrolling}></div>
                <div id="inner">
                    {this.props.children}
                </div>
                <div className="scrollArea scrollArea-down" style={{height:"20px"}} onMouseEnter={(e)=>this.startScrollDown(0,e)} onMouseLeave={this.stopScrolling}></div>
                <div className="scrollArea scrollArea-down" style={{height:"15px"}} onMouseEnter={(e)=>this.startScrollDown(1,e)} onMouseLeave={this.stopScrolling}></div>
                <div className="scrollArea scrollArea-down" style={{height:"10px"}}  onMouseEnter={(e)=>this.startScrollDown(2,e)} onMouseLeave={this.stopScrolling}></div>
                <div className="scrollArea scrollArea-down" style={{height:"5px"}}  onMouseEnter={(e)=>this.startScrollDown(3,e)} onMouseLeave={this.stopScrolling}></div>

            </div>
        )
    }
}

export default ScrollWithMouse;
