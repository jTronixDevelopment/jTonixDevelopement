// src/components/NotFound/index.js
import React, { Component } from 'react';

import { Container, Row, Col, Alert, Button } from 'reactstrap';

import Jumbo from './../../components/jumbotron/index'
import ProfileIcon from './../../components/profileIcon/index'

import './style.css';

export default class Home extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  changeButton(e){
    var test = document.getElementById('test');
    if(test.className.includes('success') ){
      test.className = test.className.replace("alert-success","alert-warning");
    } else {
      test.className = test.className.replace("alert-warning","alert-success");
    }
  }
  
  render() {
    return (
      <div>
        <Jumbo color="secondary"/>
        <Alert color="success" id="test">
          Testing
        </Alert>
        <Button color='primary' onClick={this.changeButton.bind(this)}>Change Alert</Button>
      </div>
    );
  }
}
