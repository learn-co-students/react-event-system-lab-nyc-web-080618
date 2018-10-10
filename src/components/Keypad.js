// Code Keypad Component Here
import React from 'react';


class Keypad extends React.Component{

  eventHandler = () => {
    console.log('Entering password...');
  }

  render(){
    return  (
      <div>
      <h1>test</h1>
      <input type="password" onKeyUp={this.eventHandler} />
      </div>
    )
  }
}

export default Keypad;
