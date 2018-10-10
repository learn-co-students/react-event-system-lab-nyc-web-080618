import React from 'react'

export default class Keypad extends React.Component{
  constructor(){
    super()
    this.state = {
    }
  }

  handleKeyUp(e){
    console.log('Entering password...')
  }

  render(){
    return(<form><input onKeyUp={this.handleKeyUp} type='password' value={this.state.keypad}/></form>)
  }
}
