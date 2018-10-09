// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

  constructor(){
    super();
    this.handleInputPassword = this.handleInputPassword.bind(this);
  }

  handleInputPassword(){
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleInputPassword}/>
      </div>
    );
  }
}
//example: https://stackoverflow.com/questions/35862979/how-to-detect-which-react-component-triggers-onkeyup-event
