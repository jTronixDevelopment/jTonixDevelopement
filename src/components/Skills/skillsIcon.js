import React , { Component } from 'react';

export default class SkillsIcon extends Component{
  render(){
    return(
      <div className='skills-icon' >
        <img className='skills-icon-image' src={ this.props.img }/>
        <p className='skills-icon-label'>{this.props.label}</p>
      </div>
    )
  }
}
