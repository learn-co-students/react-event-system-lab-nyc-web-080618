// Code Keypad Component Here
import React, {Component}from 'react'

class Keypad extends Component{

handlePasswordInput =()=>{
  return console.log('Entering Password...')
}


  render(){
    return(
      <div>
      <input
        onkeyUp={this.handlePasswordInput}
        type="password" />
      </div>
    )
  }
}

export default Keypad
