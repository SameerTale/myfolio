import React from 'react';
import "../App.css";

export const FlexContainer = function (props) {
    return (
        <div className="flexContainer" style={{flexDirection: props.direction ?? "column", ...props.style}}>
            {props.children}
        </div>
    );
}

export const Container = function (props) {
    return (
        <div className="white" style={{...props.style}}>
            {props.children}
        </div>
    );
}