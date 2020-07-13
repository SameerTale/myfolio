import React from 'react';
import "../App.css";
import Scorebar from "./Scorebar";
import Card from "./Card";


const Avatar = function (props) {
    return (
        <div>
            <img src={props.imagePath} style={{ width: "100%" }} alt="Avatar" />
            <h2>{props.name}</h2>
            <Scorebar percent="80" />
        </div>
    );
}

const Aside = function (props) {
    return (
        <Card heading="" style={{minWidth: "280px"}} classes="flex-45">
            <Avatar imagePath={props.imagePath} name={props.name} />
        </Card>
    );
}

export default Aside;