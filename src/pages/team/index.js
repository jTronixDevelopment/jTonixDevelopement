// src/components/NotFound/index.js
import React, { Component } from 'react';
import NavBar from './../../components/navbar/index';
import Footer from './../../components/footer/index';

import Card from './../../components/card/index';

import OlliesPic from './../../imgs/ollie.jpg';

import './style.css';

export default class NotFound extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    return (
      <div>
        <NavBar/>
          <Card title='Ollie Asker' content='Testing' contentImg={ <img src={ OlliesPic}/> }/>
        <Footer/>
      </div>
    );
  }
}
