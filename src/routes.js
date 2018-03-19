// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import Home from './pages/home/index';
import Projects from './pages/projects/index';
import ContactUs from './pages/contactus/index';
import Team from './pages/team/index';
import NotFound from './pages/NotFound/index';

import Footer from './components/footer/index';
import NavBar from './components/navbar/index';

const Routes = (props) => (
  <div>
    <NavBar/>
    <Router {...props}>
      <Route path="/" component={ Home }/>
      <Route path="/projects" component={ Projects } />
      <Route path="/team" component={ Team } />
      <Route path="/contactus" component={ ContactUs } />
      <Route path="*" component={ NotFound } />
    </Router>
    <Footer/>
  </div>
);

export default Routes;
