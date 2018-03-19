// src/components/NotFound/index.js
import React, { Component } from 'react';

import './style.css';

import { Button, Jumbotron } from 'reactstrap';

const Jumbo = ()=>{
  return(
    <Jumbotron className='bg-alert'>
      <h1 className="display-3">Hello, world!</h1>
      <p className="lead">This is a simple hero unit, a simple Jumbotron-style component
        for calling extra attention to featured content or information.
      </p>
      <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
      <p className="lead">
        <Button color="primary">Learn More</Button>
      </p>
    </Jumbotron>
  )}

export default Jumbo;
