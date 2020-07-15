import React from 'react';

export const FontAwesomeIcon = function(props) {
    return (
        <i className={`fa ${props.iconClass? props.iconClass : ""} fa-fw margin-right xxlarge text-teal`}></i>
    );
}