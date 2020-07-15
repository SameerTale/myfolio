import React from 'react';

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