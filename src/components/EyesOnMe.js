import React, {Component} from 'react';

// Deliverable #1
// In the components/EyesOnMe.js file, create a EyesOnMe React component.
export default class EyesOnMe extends Component {

  // Deliverable #2 & #3
  // In that component, render a button.
  // On that button, add event handlers that listens for the focus and blur events.
  render(){
    return(
      <button onFocus={this.focus} onBlur={this.blur}>Press Me</button>
    )
  }


  // Deliverable #4
  // When the focus event fires, use console.log to print out the text 'Good!'.
  // When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.
  focus = (event) => {
    console.log('Good!');
  }

  blur = (event) => {
    console.log('Hey! Eyes on me!');
  }


} // end of EyesOnMe Component
