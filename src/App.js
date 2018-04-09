// src/routes.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home/index'
import NotFound from './pages/NotFound/index'

const Routes = (props) => (
  <Switch>
    <Route path="/" component={ Home }/>
    <Route path="/home" component={ NotFound } />
    <Route component={ NotFound } />
  </Switch>
);

export default Routes;
