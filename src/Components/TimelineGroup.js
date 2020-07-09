import React from 'react';
import "../App.css";

const TimelineGroup = function (props) {
    return (
        <div className="timelineGroup white">
        {props.children}
        </div>
    );
}

export const TimelineHeader = function (props) {
    return (
        <h5 style={{ opacity: 0.60, color: "#000" }}><b>{props.children}</b></h5>
    );
}

export const Timeline = function (props) {
    return (
        <h6 className="text-teal">
            <i className="margin-right"></i>
            {props.children}
        </h6>
    );
}

export const TimelineContent = function (props) {
    return (
        <p style={{color: "Black"}}>{props.children}</p>
    );
}

export const HighlightTime = function (props) {
    return (
        <span style={{borderRadius: "4px", color: "#fff",
        backgroundColor: "#009688", padding: "0px 2px 0px 2px"}}>{props.children}</span>
    );
}

export default TimelineGroup;