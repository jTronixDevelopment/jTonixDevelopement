// src/components/NotFound/index.js
import React, { Component } from 'react';

import './style.css';
import { Jumbotron, Container } from 'reactstrap';
import { Row, Col } from 'reactstrap';

export default class NotFound extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    return (
      <Jumbotron fluid className='bg-primary'>
        <Container fluid>
          <Row className='text-center'>
            <Col xs='6' sm="3" md='3'>
              <h5>f</h5>
            </Col>
            <Col xs='6' sm="3" md='3'>
            </Col>
            <Col xs='6' sm="3" md='3'>.col</Col>
            <Col xs='6' sm="3" md='3'>.col</Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
