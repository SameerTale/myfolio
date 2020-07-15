import React from 'react';
import "../App.css";
import {Container} from "./Containers";

const TimelineGroup = function (props) {
    return (
        <Container>
            {props.children}
        </Container>
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
            <i class="fa fa-calendar fa-fw margin-right"></i>
            {props.children}
        </h6>
    );
}

export const TimelineContent = function (props) {
    return (
        <article style={{color: "Black"}}>{props.children}</article>
    );
}

export const HighlightTime = function (props) {
    return (
        <span style={{borderRadius: "4px", color: "#fff",
        backgroundColor: "#009688", padding: "0px 2px 0px 2px"}}>{props.children}</span>
    );
}

export default TimelineGroup;