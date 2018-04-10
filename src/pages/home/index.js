// src/components/NotFound/index.js
import React, { Component } from 'react';

import Navbar from './../../components/NavBar/navbar';
import AboutMe from './../../components/AboutMe/aboutme';
import Skills from './../../components/Skills/skills';
import Projects from './../../components/Projects/projects';
import Footer from './../../components/Footer/footer';

export default class Home extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    return (
      <div>
        <Navbar/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    );
  }
}
