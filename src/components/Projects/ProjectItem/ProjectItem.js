import React , { Component } from 'react';

import { Row, Col, Container } from 'reactstrap';

import './projectitem.css';

export default class ProjectItme extends Component{
  defaultProps = {
    align : "left",
    img : "",
    siteTitle:'Unkown',
    description:"None",
    technologiesUsed:"None"
  }


  render(){
    console.log(this.props)
    let { align, img, siteTitle, description, technologiesUsed } = {...this.props.info};
    return(
      <Row>
        <Col xs="12" sm='12' md='6' lg='6'>
          <img className='projectItemImg' alt = "" src={ img }/>
        </Col>
        <Col xs="12" sm='12' md='6' lg='6'>
          <h3>{ siteTitle }</h3>
          <p>{ description }</p>
          <b>Tech Used</b>
          <p>{ technologiesUsed }</p>
        </Col>
      </Row>
    )
  }
}
