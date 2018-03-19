// src/components/NotFound/index.js
import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

import Card from './../../components/card/index';

import './style.css';

export default class NotFound extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}
  cards = [
     {
       title : "Calculator",
       subTitle: "Redux, React, Boostrap",
       content: 'poop',
       thumbNail : "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
       click: ()=>{window.open("https://www.google.com", '_blank')}
     },
     {
       title : "Atlas",
       subTitle: "React, Redux, Webpack" ,
       content: 'poop',
       thumbNail : "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
       click: ()=>{ console.log("testing")}},
      {
       title : "Sarah Borrello",
       subTitle: "Square Space" ,
       content: "Poop",
       thumbNail : "https://static1.squarespace.com/static/57a12c9c4402436133deae4d/t/5a56e1e271c10b996460fd80/1515643366445/unnamed.jpg",
       click: ()=>{ console.log("testing")}
     }];

  render() {
    return (
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">Our Projects</h1>
            </Col>
          </Row>
          <Row>
            {
              this.cards.map((card, ind)=>
              <Col key={ ind + "row"} xs="12" sm="2" lg="4" md="4">
                <Card key={ ind } info = { card }/>
              </Col>)
            }
          </Row>
        </Container>
    );
  }
}
