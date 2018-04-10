import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import './projects.css';

import ProjectItem from './ProjectItem/ProjectItem';

import ATTThumb from './../../imgs/attChat.PNG'

export default class AboutMe extends Component {
  constructor(){
    super();
    this.projects =[
      {
        align : "left",
        img : ATTThumb,
        siteTitle:'Unkown',
        description:"None",
        technologiesUsed:"None"
      },
      {
        align : "left",
        img : "",
        siteTitle:'Unkown',
        description:"None",
        technologiesUsed:"None"
      },
      {
        align : "left",
        img : "",
        siteTitle:'Unkown',
        description:"None",
        technologiesUsed:"None"
      }
    ]
  }

  render(){
    return (
      <div className='projects-container'>
      <Container>
        {
          this.projects.map((item,ind)=>{
            return <ProjectItem key={ind} info = {item}/>
          })
        }
        <ProjectItem siteTitle="AT&T" />
      </Container>
      </div>
    )
  }
}
