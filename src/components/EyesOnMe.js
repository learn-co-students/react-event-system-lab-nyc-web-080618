import React from 'react';

export default class EyesOnMe extends React.Component {
  render(){
    return (
      <button onFocus={this.focuser} onBlur={this.blurer}></button>
    )
  }
  focuser() {
    console.log('Good!')
  }
  blurer() {
    console.log('Hey! Eyes on me!')
  }
}
