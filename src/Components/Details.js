import React from 'react';
import "../App.css";
import Card from "./Card";
import { FontAwesomeIcon } from "./IconEntry";
import { FlexContainer } from "./Containers";
import TimelineGroup, { TimelineHeader, Timeline, TimelineContent, HighlightTime } from "./TimelineGroup";

function WorkEx() {
  return (
    <Card icon={<FontAwesomeIcon iconClass="fa-suitcase" />} heading="Work Experience" >
      <TimelineGroup>
        <TimelineHeader>Quantum Phinance Consulting Pvt. Ltd. | Senior Programmer Analyst</TimelineHeader>
        <Timeline> Aug 2018 - <HighlightTime>Current</HighlightTime></Timeline>
        <TimelineContent>
          <i>Quantum Phinance is a product based consultancy. <b>Sheetkraft</b> is one of its product. It is a 'Rapid Automation Development Platform’ built on .Net framework and ReactJs</i>
          <p>
            <b>Highlights</b>
            <ul>
              <li>Single-handedly developed generic template tool to automate the dynamic reports generations in an Excel, which attracted clients such as Franklin Templeton, HDFC</li>
              <li>Integrated the databases into ‘Sheetkraft’ to fetch data from various sources like MSSQL, Oracle, Postgres, Teradata and MySQL.</li>
              <li>Created different UIs for ‘Sheetkraft’ MS Excel addin based on the requirements (XAML format)</li>
              <li>Worked on various API creations as required for the new features</li>
              <li>Worked on Frontend with technologies such as React, Mobx and Material UI</li>
            </ul>
          </p>
          <p>
            <b>Key Responsibilities</b>
            <ul>
              <li>Spearheaded the developments of new features like sending automatic emails, importing raw data from text file, exporting raw data to text file and so on</li>
              <li>Spearheaded the developments of new UIs</li>
              <li>Guiding teams working on the client side in setting up the complex business processes</li>
              <li>Improvements and bugs fixing in developed features</li>
            </ul>
          </p>
          <p>
            <b>Leadership</b>
            <ul>
              <li>Spearheaded the teams into development and business projects</li>
              <li>Conducting training sessions for the new joiner batch</li>
              <li>Development of new training module</li>
              <li>Guiding and monitoring documentation and blogs</li>
            </ul>
          </p>
        </TimelineContent>
      </TimelineGroup>
    </Card>
  )
}

function Education() {
  return (
    <Card classes="padding-16" icon={<FontAwesomeIcon iconClass="fa-book" />} heading="Education" >
      <TimelineGroup>
        <TimelineHeader>Indian Institute of Technology, Bombay (IITB)</TimelineHeader>
        <Timeline> July 2012 - May 2016</Timeline>
        <TimelineContent>
          B.Tech in Chemical Engineering
        </TimelineContent>
      </TimelineGroup>
      <TimelineGroup>
        <TimelineHeader>National Institute of Open Schooling (India)</TimelineHeader>
        <Timeline> 2011 </Timeline>
        <TimelineContent>
          Completed my Junior College
        </TimelineContent>
      </TimelineGroup>
      <TimelineGroup>
        <TimelineHeader>Jawahar Navoday Vidhyalay, Talodhi(Ba.) Chandrapur</TimelineHeader>
        <Timeline> 2009 </Timeline>
        <TimelineContent>
          Completed my Matriculate
        </TimelineContent>
      </TimelineGroup>
    </Card>
  )
}

function Hobbies() {
  return (
    <Card classes="padding-16" icon={<FontAwesomeIcon iconClass="fa-spinner" />} heading="Co-Curricular" >
      <div>
        <b>Sports: </b> Basket-ball, Badminton, Table-Tennis<br />
        <b>Drama: </b> Set up a drama at school<br />
        <b>Dance: </b> Part of Dance group in College<br />
      </div>
    </Card>
  );
}

export default function Details() {
  return (
    <FlexContainer style={{ minWidth: "280px" }}>
      <WorkEx />
      <Education />
      <Hobbies />
    </FlexContainer>
  );
}