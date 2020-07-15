import React from 'react';
import {Container} from "./Containers";

export const Intro = function (props) {
    return (
        <Container>
            {props.children}
        </Container>
    );
}

export const IntroLine = function (props) {
    return (
        <p><i class={`fa ${props.iconClass} fa-fw margin-right large text-teal`}></i>{props.info}</p>
    );
}