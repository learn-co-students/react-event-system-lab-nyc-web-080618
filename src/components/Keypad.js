import React, {Component} from 'react';

// Deliverable #1
// In the components/Keypad.js file, create a Keypad React component.
export default class Keypad extends Component {

  // Deliverable #2 & #3
  // In that component, render an input with the right type (password).
  // On that input, add an event handler that listens for the keyUp event.
  render(){
    return (
      <input type='password' onKeyUp={this.simulate}/>
    )
  }

  // Deliverable #4
  // When that event fires, use console.log to print out the text 'Entering password...'
  simulate = (event) => {
    console.log('Entering password...');
  }

} // end of Keypad Component
