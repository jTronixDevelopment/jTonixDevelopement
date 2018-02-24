// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import Home from './pages/home/index';
import Projects from './pages/projects/index';
import ContactUs from './pages/contactus/index';
import Teams from './pages/team/index';
import NotFound from './pages/NotFound/index';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={ Home } />
    <Route path="/projects" component={ Projects } />
    <Route path="/team" component={ Teams } />
    <Route path="/contactus" component={ ContactUs } />
    <Route path="*" component={ NotFound } />
  </Router>
);

export default Routes;
