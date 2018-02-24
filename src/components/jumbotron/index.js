// src/components/NotFound/index.js
import React, { Component } from 'react';
import './style.css';

import { Jumbotron, Container } from 'reactstrap';

export default class JumboTron extends Component {
  static propTypes = {}
  static defaultProps = {
    content : 'Hello World',
    title : 'Hello World',
    style : { textAlign : 'center', background : 'lightblue' }
  }
  state = {}

  componentDidMount(){
  }

  render() {
    return (
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    );
  }
}
