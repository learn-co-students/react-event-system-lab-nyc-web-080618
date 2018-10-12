// Code EyesOnMe Component Here
import React, {Component} from 'React'



class EyesOnMe extends Component{
  onFocus = ()=> console.log('Good!')
  onBlur = ()=> console.log('Hey! Eyes on me!')
  render(){
    return(
      <button onBlur={this.onBlur} onFocus={this.onFocus}> Hello</button>
    )
  }

}


export default EyesOnMe
