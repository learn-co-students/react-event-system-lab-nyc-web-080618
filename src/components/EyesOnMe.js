import React from 'react';
import ReactDOM from 'react-dom';

class EyesOnMe extends React.Component {

  onFocusEvent(){
    console.log("Good!")
  }
  onBlurEvent(){
    console.log("Hey! Eyes on me!")
  }

  render(){
    return(
      <button onFocus={this.onFocusEvent} onBlur={this.onBlurEvent}>Butttooooonnn</button>
    )
  }
}

export default EyesOnMe;
