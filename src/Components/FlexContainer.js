import React from 'react';
import "../App.css";

const FlexContainer = function (props) {
    return (
        <div className="flexContainer" style={{flexDirection: props.direction ?? "column", ...props.style}}>
            {props.children}
        </div>
    );
}

export default FlexContainer;