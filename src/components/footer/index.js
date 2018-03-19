// src/components/NotFound/index.js
import React from 'react';

import './style.css';
import { Container , Row, Col } from 'reactstrap';

const links = [
  {
    label: "Github",
    url: "url"
  },
  {
    label: "Github",
    url: "url"
  },
  {
    label: "Github",
    url: "url"
  },
  {
    label: "Github",
    url: "url"
  },

]

const Footer = ()=>{
  return(
    <Container fluid className='bg-primary footer'>
      <Row className='text-center'>
        <Col xs='12' sm="6" md='6'>
          <h5>Links</h5>
          <ul>
          {
            links.map(({url , label },ind)=>
              <li key={ ind + "li" }><a key={ ind } href={ url }>{ label }</a></li>
            )
          }
          </ul>
        </Col>
        <Col xs='12' sm="6" md='6'>
        </Col>
      </Row>
    </Container>
  )}

export default Footer;
