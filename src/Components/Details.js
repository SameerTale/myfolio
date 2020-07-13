import React from 'react';
import "../App.css";
import Card, {FontAwesomeIcon} from "./Card";
import FlexContainer from "./FlexContainer";
import TimelineGroup, { TimelineHeader, Timeline, TimelineContent, HighlightTime } from "./TimelineGroup";

function WorkEx() {
    return (
      <Card icon={<FontAwesomeIcon iconClass="fa-suitcase" />} heading="Work Experience" >
        <TimelineGroup>
          <TimelineHeader>Quantum Phinance Consulting Pvt. Ltd. | Senior Programmer Analyst</TimelineHeader>
          <Timeline> Aug 2016 - <HighlightTime>Current</HighlightTime></Timeline>
          <TimelineContent>
          - Products based consultancy| Sheetkraft, Beacon, InsightCorp 
-- Sheetkraft is a 'Rapid Automation Development Platform’ built on .Net framework.
          </TimelineContent>
        </TimelineGroup>
        <TimelineGroup>
          <TimelineHeader> Front-End Developer - Quantum Phinance</TimelineHeader>
          <Timeline> Aug 2017 - <HighlightTime>Current</HighlightTime></Timeline>
          <TimelineContent>
            I have worked on several features of the product called Sheetkraft. It is the generic platform to build web applications. It is used to rapidly automate the complex processes and publish it into an app;
        </TimelineContent>
        </TimelineGroup>
      </Card>
    )
  }
  
  function Education() {
    return (
      <Card icon={<FontAwesomeIcon iconClass="fa-suitcase" />} heading="Education" >
        <TimelineGroup>
          <TimelineHeader> .Net Developer - Quantum Phinance</TimelineHeader>
          <Timeline> Aug 2017 - <HighlightTime>Current</HighlightTime></Timeline>
          <TimelineContent>
            I have worked on several features of the product called Sheetkraft. It is the generic platform to build web applications. It is used to rapidly automate the complex processes and publish it into an app;
        </TimelineContent>
        </TimelineGroup>
        <TimelineGroup>
          <TimelineHeader> Front-End Developer - Quantum Phinance</TimelineHeader>
          <Timeline> Aug 2017 - <HighlightTime>Current</HighlightTime></Timeline>
          <TimelineContent>
            I have worked on several features of the product called Sheetkraft. It is the generic platform to build web applications. It is used to rapidly automate the complex processes and publish it into an app;
        </TimelineContent>
        </TimelineGroup>
      </Card>
    )
  }
  
  export default function Details() {
    return (
      <FlexContainer style={{minWidth: "280px"}}>
        <WorkEx />
        <Education />
      </FlexContainer>
    );
  }