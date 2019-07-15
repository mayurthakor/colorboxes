import React, { Component } from 'react'
import Box from './Box';
import "./BoxContainer.css";

class BoxContainer extends Component{
    static defaultProps = {
        numBoxes: 18,
        allColors: [
            "purple", 
            "magenta", 
            "yellow", 
            "lilac", 
            "pink",
            "LightPink",
            "brown",
            "coral",
            "LightYellow",
            "violet",
            "fuchsia",
            "purple",
            "Purple",
            "grey",
            "olive",
            "turquoise",
            "beige",
            "peru"
        ]
    };

    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
            <Box colors={this.props.allColors}/>
        ));

        return(
            <div className="BoxContainer">{boxes}</div>
        )    
    }
}

export default BoxContainer;