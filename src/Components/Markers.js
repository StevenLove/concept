import React, { Component } from 'react';

class Markers extends Component {

    render(args) {
        return (
            <div className="markers" onClick={this.handleClick}>
                {
                    this.props.colors.map((color,id)=>{
                        return <div key={id} className={"marker marker-"+color}></div>
                    })
                }
            </div>
        );
    }
}

export default Markers;
