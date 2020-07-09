import React, { Fragment } from 'react';
import "../App.css";

export const Divider = function() {
    return (
        <hr className="divider"/>
    );
} 

const Card = function (props) {
    return (
        <div className="text-gray padding-16 card white" style={{...props.style}}>
            <h2>
                <i></i>
                {props.heading}
            </h2>
            {React.Children.count(props.children) > 1 ?
                React.Children.map(props.children, (child) =>
                    <Fragment>{child} <Divider /></Fragment>) :
                props.children}
        </div>
    );
}

export default Card;