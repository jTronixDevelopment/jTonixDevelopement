// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route , browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';

import Routes from './routes';

ReactDOM.render(
  <Routes history={ browserHistory } />,
  document.getElementById('root')
);
