import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import ProfilePic from './../../imgs/profile.png';
import './aboutme.css'

let Profile = ()=>(
  <Container className='about-me-content-container'>
    <div>
      <Row>
        <Col xs="12" sm='6' md='6' lg='6' className='text-center'>
          <img className='about-me-profile-pic' src = { ProfilePic }/>
        </Col>
        <Col xs="12" sm='6' md='6' lg='6' className='text-center'>
          <div className="about-me-bio">
            <h2>Bio</h2>
              <p>Hello! My name is Ryan Johnson and I am a web developer/ software engineer.</p>
            <ul className='about-me-bio-list'>
              <li>Los Angeles, CA</li>
              <li>Software Engineer</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  </Container>
)

export default class AboutMe extends Component {
  render(){
    return (
      <div className='about-me-container'>
        <div className="about-me-img-container"></div>
        <Profile/>
      </div>
    )
  }
}
