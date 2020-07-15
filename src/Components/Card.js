import React, { Fragment } from 'react';

export const Divider = function () {
    return (
        <hr className="divider" />
    );
}


const Card = function (props) {
    const classes = props.classes ? props.classes + " text-gray card white" : "text-gray card white";
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