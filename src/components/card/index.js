// src/components/NotFound/index.js
import React, { Component } from 'react';

import './style.css';

export default class NotFound extends Component {
  static propTypes = {}
  static defaultProps = {
    title : "",
    content : "",
    contentImg : ""
  }
  state = {}

  render() {
    return (
      <div className="card-container">
        <div className="card-title">{ this.props.title }</div>
        <div className="card-content">{ this.props.content }</div>
        <div className="card-img">{ this.props.contentImg }</div>
        <div className="card-footer"></div>
      </div>
    );
  }
}
