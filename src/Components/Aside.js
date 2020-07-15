import React from 'react';
import "../App.css";
import {Score, ScorePanel} from "./ScorePanel";
import Card from "./Card";
import {Intro, IntroLine} from "./Intro";


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
        <Card heading="" style={{minWidth: "280px"}} classes="flex-45">
            <Avatar imagePath={props.imagePath} name={props.name} />
            <Intro>
                <IntroLine iconClass="fa-briefcase" info="Sr Programmer"/>
                <IntroLine iconClass="fa-home" info="Nagpur, India"/>
                <IntroLine iconClass="fa-envelope" info="sameertale0412@gmail.com"/>
                <IntroLine iconClass="fa-phone" info="9594159311"/>
            </Intro>
            <ScorePanel iconClass="fa-code" heading="Languages">
                <Score legend="C#" percent="90"/>
                <Score legend="C++" percent="75"/>
                <Score legend="JavaScript" percent="75"/>
                <Score legend="HTML" percent="75"/>
                <Score legend="CSS" percent="70"/>
            </ScorePanel>
            <ScorePanel iconClass="fa-cubes" heading="Technologies">
                <Score legend=".Net Framework" percent="70"/>
                <Score legend="React.js" percent="80"/>
                <Score legend="Typescript" percent="85"/>
                <Score legend="MobX" percent="90"/>
                <Score legend="Material UI" percent="70"/>
            </ScorePanel>
        </Card>
    );
}

export default Aside;