import React from 'react';
import "../App.css";

export const FontAwesomeIcon = function(props) {
    return (
        <i className={`fa ${props.iconClass? props.iconClass : ""} fa-fw margin-right xxlarge text-teal`}></i>
    );
}