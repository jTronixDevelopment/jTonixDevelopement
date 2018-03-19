// src/components/NotFound/index.js
import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

import Jumbo from './../../components/jumbotron/index'

import './style.css';

export default class Home extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    return (
      <div>
        <Jumbo/>
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">Home</h1>
            </Col>
          </Row>
          <Row>
          </Row>
        </Container>
      </div>
    );
  }
}
