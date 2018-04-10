import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './footer.css';

import Icon from './../Skills/skillsIcon';

import LinkedIn from './../../imgs/linkedin.png';
import Github from './../../imgs/github.png';
import CodePen from './../../imgs/codepen.png';

export default class AboutMe extends Component {
  render(){
    return (
      <div className='footer-container'>
        <Container>
          <Row>
            <Col xs='12' sm='6' md='6' lg='6'>
              <ul className='footer-link-list text-center' >
                <h3>Links</h3>
                <li className='footer-link-item'>
                  <a href='https://www.linkedin.com/in/ryanjohnson9/'><Icon img={ LinkedIn } label="LinkedIn"/></a>
                </li>
                <li className='footer-link-item'>
                  <a href='https://github.com/johnson2500'><Icon img={ Github } label="Github"/></a>
                </li>
                <li className='footer-link-item'>
                  <a href='#'><Icon img={ CodePen } label="CodePen"/></a>
                </li>
              </ul>
            </Col>
            <Col xs='12' sm='6' md='6' lg='6'>
              <ul className='footer-link-list text-center' >
                <h3>Contact</h3>
                <li className='footer-link-item'>
                  <a href='#'><p><b>Email: </b>johnson2500@live.com</p></a>
                </li>
                <li className='footer-link-item'>
                  <a href='#'><p><b>Phone: </b>1-508-207-3518</p></a>
                </li>
                <li className='footer-link-item'>
                  <a href='#'><p><b>Location: </b>Los Angeles, CA</p></a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
