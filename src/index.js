// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Routes from './App';

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
  ,
  document.getElementById('root')
);
