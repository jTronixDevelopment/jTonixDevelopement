// src/components/NotFound/index.js
import React from 'react';

import './style.css';

import { Button, Jumbotron } from 'reactstrap';
const Jumbo = ({color,img,info})=>{
  console.log(img)
  var img = img?`url(${img})`:"none";
  console.log(img);
  return(
    <Jumbotron style={{backgroundImage: img}} className={`bg-${(color)?color:"primary"}`} >
      <h1 className="display-3">Test</h1>
      <p className="lead">
        { info }
      </p>
      <p>It uses utility classes for tyopgraphy and spacing to space content out within the larger container.</p>
      <p className="lead">
        <Button color="primary">Learn More</Button>
      </p>
    </Jumbotron>
  )}

export default Jumbo;
