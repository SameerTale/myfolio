import React from 'react';
import "../App.css";
import Card from "./Card";
import FlexContainer from "./FlexContainer";
import TimelineGroup, { TimelineHeader, Timeline, TimelineContent, HighlightTime } from "./TimelineGroup";

function WorkEx() {
    return (
      <Card heading="Work Ex" >
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
  
  function Education() {
    return (
      <Card heading="Education" >
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
      <FlexContainer style={{minWidth: "280px", flexShrink: 2}}>
        <WorkEx />
        <Education />
      </FlexContainer>
    );
  }