import React, { Fragment } from 'react';
import "../App.css";

export const Divider = function () {
    return (
        <hr className="divider" />
    );
}

export const FontAwesomeIcon = function(props) {
    return (
        <i className={`fa ${props.iconClass? props.iconClass : ""} fa-fw margin-right xxlarge text-teal`}></i>
    );
}

const Card = function (props) {
    const classes = props.classes ? props.classes + " text-gray padding-16 card white" : "text-gray padding-16 card white";
    return (
        <div className={classes} style={{ ...props.style }}>
            {props.heading &&
                <h2>
                    {props.icon? props.icon: <i></i>}
                    {props.heading}
                </h2>
            }
            {React.Children.count(props.children) > 1 ?
                props.children.map((child, i) => {
                    if (i === props.children.length - 1)
                        return child;
                    return <Fragment>{child} <Divider /></Fragment>;
                }) :
                props.children}
        </div>
    );
}

export default Card;