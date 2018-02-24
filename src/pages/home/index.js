// src/components/NotFound/index.js
import React, { Component } from 'react';

import NavBar from './../../components/navbar/index';
import Footer from './../../components/footer/index';
import JumboTron from './../../components/jumbotron/index';

import { Button } from 'reactstrap';

import './style.css';

export default class NotFound extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}
  style = { "textAlign" : "center" };

  render() {
    return (
      <div>
        <NavBar/>
        <JumboTron/>
        <Footer/>
        <i className="devicon-backbonejs-plain"></i>
      </div>
    );
  }
}
