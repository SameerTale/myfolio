import React, { Fragment } from 'react';
import "../App.css";
import { Container } from "./Containers";
import { FontAwesomeIcon } from "./IconEntry";

export function Scorebar(props) {
    return (
        <div className="light-grey round-xlarge small">
            <div className="center round-xlarge teal" style={{ width: `${props.percent}%` }}>
                <div className="center" style={{ color: "White" }}>{props.percent}%</div>
            </div>
        </div>
    );
}

export function Score(props) {
    return (
        <Fragment>
            <p>{props.legend}</p>
            <Scorebar percent={props.percent} />
        </Fragment>
    )
}

export function ScorePanel(props) {
    return (
        <Container>
            {props.heading &&
                <h4>
                    {props.iconClass ? <FontAwesomeIcon iconClass={props.iconClass} /> : <i></i>}
                    {props.heading}
                </h4>
            }
            {props.children}
        </Container>
    );
}