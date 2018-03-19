// src/components/NotFound/index.js
import React from 'react';

import './style.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


const CardComponent = (x)=>{
  var { title , content, subTitle, click, thumbNail } = x.info
  return(
    <Card>
      <CardImg top width="100%" src={thumbNail } alt="Card image cap" />
      <CardBody>
        <CardTitle>{ title }</CardTitle>
        <CardSubtitle>{ subTitle }</CardSubtitle>
        <CardText>{ content }</CardText>
        <Button color="primary" onClick = { click } >Visit</Button>
      </CardBody>
    </Card>
  )}

export default CardComponent;
