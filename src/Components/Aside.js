import React from 'react';
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
                <IntroLine iconClass="fa-briefcase" info="Sr Programmer Analyst"/>
                <IntroLine iconClass="fa-home" info="Nagpur, India"/>
                <IntroLine iconClass="fa-envelope" info="sameertale0412@gmail.com"/>
                <IntroLine iconClass="fa-phone" info="9594159311"/>
            </Intro>
            <ScorePanel iconClass="fa-code" heading="Concepts">
                <li>Fundamentals of Computer Science</li>
                <li>Object Oriented Programming</li>
                <li>Data-Structures and Algorithms</li>
                <li>TCP/IP, UDP, HTTP/S, FTP, SFTP, FTPS</li>
                <li>AWS, Firebase, Azure, AmazonS3</li>
                <li>Machine Learning</li>
            </ScorePanel>
            <ScorePanel iconClass="fa-code" heading="Languages">
                <li>C#, C++, Javascript, HTML, CSS, Python</li>
            </ScorePanel>
            <ScorePanel iconClass="fa-cubes" heading="Technologies">
                <li>.Net Framework, React.js, Typescript, MobX, Material UI</li>
            </ScorePanel>
            <ScorePanel iconClass="fa-cubes" heading="Databases">
                <li>MSSQL Server, MySQL, Oracle, Teradata, Postgres</li>
            </ScorePanel>
        </Card>
    );
}

export default Aside;