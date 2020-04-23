import React, { Component, useState } from 'react'


const InputLogin = (props) => {
	const [value, setValue] = useState("");
	const [error, setError] = useState(true);
	
	let errors = false;
	let valuex = "";
	
	function validate (e) {
		let value = e.target.value
		if (value.lenght <= 10 ) {
			errors = true
		} else {
			errors = false
			console.log(errors)
		}
			console.log(value)
		props.validateInput(props.name, value)
	}
	
	return(
	<div className="input-login-container">
		<input name="login" onChange={validate} type="text"/> 
	</div>
	)
}


export default InputLogin