import React from 'react';
import "../App.css";

export default function Scorebar (props) {
    return (
        <div className="light-grey round-xlarge small">
            <div className="center round-xlarge teal" style={{width: `${props.percent}%`}}>
                <div className="center" style={{color: "White"}}>{props.percent}%</div>
            </div>
        </div>
    );
}