import React, { Component } from 'react'
//import { AUTH_TOKEN } from '../constants'

import InputLogin from "./InputLogin"


class Login extends Component {
	
constructor(props) {
  super(props);
  // No llames this.setState() aquí!
	  this.state = {
		login: true, // switch between Login and SignUp
		email: '',
		password: '',
		name: '',
		hasErrors : {
		  login : false
	  },
		  login:false
	  };
	this.validateInput = this.validateInput.bind(this)
}
  
  validateInput(name, value) {
	  this.setState({
		  [name]  : value
	  });
	  console.log("koko")
  }
	
  render() {
    const { login, email, password, name } = this.state
    return (
		<div onClick={() => console.log(this.state)}> 
     		<InputLogin name="login" validateInput={this.validateInput}/>
     	</div>
    )
  }
}

export default Login