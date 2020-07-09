import React from 'react';
import "../App.css";
import Card from "./Card";


const Avatar = function (props) {
    return (
        <div>
            <img src={props.imagePath} style={{ width: "100%" }} alt="Avatar" />
            <h2>{props.name}</h2>
        </div>
    );
}

const Aside = function (props) {
    return (
        <Card heading="" style={{minWidth: "200px", maxWidth: "400px", flexShrink: 1}}>
            <Avatar imagePath={props.imagePath} name={props.name} />
        </Card>
    );
}

export default Aside;