// Code EyesOnMe Component Here
// Code Keypad Component Here
import React from 'react';


  export default class EyesOnMe extends React.Component{

    handleBlur = () =>{
      console.log('Hey! Eyes on me!');
    }

    handleFocus = () => {
      console.log("Good!");
    }


    render(){
      return(
        <button
        onBlur={this.handleBlur}
        onFocus = {this.handleFocus}
        >Hey</button>
      )

    }


  }
