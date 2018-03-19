// src/components/NotFound/index.js
import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

import Jumbo from './../../components/jumbotron/index'
import ProfileIcon from './../../components/profileIcon/index'

import './style.css';

export default class Home extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    return (
      <div>
        <Jumbo color="success" info={ <ProfileIcon/> }/>
        <Jumbo color="primary"/>
        <Jumbo color="danger"/>
        <Jumbo color="primary"/>
      </div>
    );
  }
}
