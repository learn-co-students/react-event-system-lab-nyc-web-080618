import React from 'react';
import ReactDOM from 'react-dom';

class Keypad extends React.Component{

keyUpEvent(){
  console.log("Entering password...")
}

render(){
  return(
    <input onKeyUp={this.keyUpEvent}type="password" />
  )
}
}

export default Keypad;
