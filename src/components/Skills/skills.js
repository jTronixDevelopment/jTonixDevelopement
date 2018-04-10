import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

import SkillsIcon from './skillsIcon';

import ReactIcon from './../../imgs/react.png';
import CSS3 from './../../imgs/css.png';
import HTML5 from './../../imgs/html.png';
import NodeJS from './../../imgs/nodejs.png';
import JS from './../../imgs/javascript.png';

import Heroku from './../../imgs/heroku.png';
import AWS from './../../imgs/amazon.png';
import Firebase from './../../imgs/google.png';
import Git from './../../imgs/git.png';

import './skills.css';

let Expertise = ()=>{
  return (
    <Col xs='12' sm='12' md='12' lg='12'>
      <h3>Expertise</h3>
      <Row>
        <Col xs='6' sm='3'><SkillsIcon img={ CSS3 } label='CSS3'/></Col>
        <Col xs='6' sm='3'><SkillsIcon img={ NodeJS } label='NodeJS'/></Col>
        <Col xs='6' sm='3'><SkillsIcon img={ HTML5 } label='HTML5'/></Col>
        <Col xs='6' sm='3'><SkillsIcon img={ ReactIcon } label='ReactJS'/></Col>
      </Row>
      <Row>
        <Col xs='6' sm='3'><SkillsIcon img={ Heroku } label='Heroku'/></Col>
        <Col xs='6' sm='3'><SkillsIcon img={ AWS } label='AWS'/></Col>
        <Col xs='6' sm='3'><SkillsIcon img={ Firebase } label='Firebase'/></Col>
        <Col xs='6' sm='3'><SkillsIcon img={ Git } label='Git'/></Col>
      </Row>
    </Col>
  )
}

let BasicSkills = ()=>{
  return (
    <Col xs='12' sm='12' md='12' lg='12'>
      <Row>
        <Col><h2>Learning</h2></Col>
      </Row>
      <Row>
        <Col xs='12' sm='6' md='6' lg='3'>
          <ul className='skills-list'>
            <b>Back End</b>
            <li>Node JS</li>
            <li>Express</li>
            <li>Socket IO</li>
            <li>Google Firebase</li>
          </ul>
        </Col>
        <Col xs='12' sm='6' md='6' lg='3'>
          <ul className='skills-list'>
            <b>Back End</b>
            <li>Node JS</li>
            <li>Express</li>
            <li>Socket IO</li>
            <li>Google Firebase</li>
          </ul>
        </Col>
        <Col xs='12' sm='6' md='6' lg='3'>
          <ul className='skills-list'>
            <b>Frameworks/Libraries</b>
            <li>React JS</li>
            <li>jQuery/UI/Mobile</li>
            <li>Bootstrap/Foundation</li>
            <li>ES6</li>
          </ul>
        </Col>
        <Col xs='12' sm='6' md='6' lg='3'>
          <ul className='skills-list'>
            <b>Back End</b>
            <li>Node JS</li>
            <li>Express</li>
            <li>Socket IO</li>
            <li>Google Firebase</li>
          </ul>
        </Col>
      </Row>
    </Col>
  )
}

export default class Skills extends Component {
  render(){
    return (
      <div className='skills-container text-center'>
        <Container>
          <Row>
            <Expertise/>
            <BasicSkills/>
          </Row>
        </Container>
      </div>
    )
  }
}
