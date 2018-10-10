import React from 'react'

export default class EyesOnMe extends React.Component{
  constructor(){
    super()
  }

  handleFocus(){
    console.log('Good!')
  }

  handleBlur(){
    console.log('Hey! Eyes on me!')
  }

  render(){
    return(<button onFocus={this.handleFocus} onBlur={this.handleBlur}>Eyes</button>)
  }
}
