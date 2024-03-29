import React from 'react';
import '../signIn/Sign_In.css';

class Register extends React.Component{

	constructor(props){
		super(props);
		this.state={
			email: '',
			password: '',
			name: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({ email : event.target.value })
	}

	onNameChange = (event) => {
		this.setState({ name : event.target.value })
	}

	onPassChange = (event) => {
		this.setState({ password : event.target.value })
	}

	onSubmit = (event) => {
		const { email, password, name } = this.state;

		if(this.props.validateEmail(email) && email && password && name){
			fetch('https://vast-beyond-01389.herokuapp.com/register', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: email,
					password: password,
					name: name
				})
			})
			.then(response => response.json())
			.then(data => {
				if (data==='Successfully registered user' && name && password && email) {
					this.props.onRouteChange('SignIn','SignIn');	
				}
			})
			.catch(console.log)
		}
		else{
			alert("Invalid email or password")
		}
	}


	render(){
		return(
			<article className="br4 ba dark-gray 
			b--black-10 center shadow-5" >
			<main className="pa4 black-90 mb3">
			 <div className="measure">
			    <fieldset id="sign_up" 
			    className="ba b--transparent ph0 mh0">
			    <legend 
			    className="f2 fw6 ph0 mh0 tc">
			    Register</legend>
			    <div className="mt3">
			    <label className="db fw6 lh-copy f6" 
			    htmlFor="email-address">Name</label>
			    <input 
			    className="pa2 input-reset ba bg-transparent 
			   	hover-bg-black hover-white w-100" 
			    type="text" name="name"  
			    id="name"
			    onChange={this.onNameChange}/>
			    </div>
			    <div className="mt3">
			    <label className="db fw6 lh-copy f6" 
			    htmlFor="email-address">Email</label>
			    <input 
			    className="pa2 input-reset ba bg-transparent 
			   	hover-bg-black hover-white w-100" 
			    type="email" name="email-address"  
			    id="email-address"
			    onChange={this.onEmailChange}/>
			    </div>
			    <div className="mv3">
			    <label className="db fw6 lh-copy f6" 
			    htmlFor="password">Password</label>
			    <input className="b pa2 input-reset ba 
			    bg-transparent hover-bg-black 
			    hover-white w-100" 
			    type="password" 
			    name="password"  
			    id="password"
			    onChange={this.onPassChange}/>
			    </div>
			    </fieldset>
			    <div>
			    <input className="b ph3 pv2 input-reset
			    ba b--black bg-transparent grow 
			    pointer f5 w-40" type="submit" 
			    value="Sign up"
			    onClick={this.onSubmit}/>
			    </div>
		  		</div>
			</main>
		</article>
		);	
	}

}

export default Register;