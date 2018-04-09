import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

import SkillImg from './../../imgs/skills.png';

import './skills.css';

export default class Skills extends Component {

  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className='skills-container'>
        <Container>
          <Row>
            <Col xs='12' sm='6' md='6' lg='6'>
              <img className='skills-icon' src={ SkillImg }/>
            </Col>
            <Col xs='12' sm='6' md='6' lg='6'>
              <Row>
                <Col xs='12' sm='6' md='6' lg='6'>
                  <ul>
                    Front End
                    <li>comp</li>
                    <li>comp</li>
                    <li>comp</li>
                  </ul>
                </Col>
                <Col xs='12' sm='6' md='6' lg='6'>
                  <ul>
                    Front End
                    <li>comp</li>
                    <li>comp</li>
                    <li>comp</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
