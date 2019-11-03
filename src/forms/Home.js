import React from 'react';
class Home extends React.Component{
	constructor(props){
		super(props)
		this.state={
			login:localStorage.getItem("Login")?true:false,
			username:'',
			password:'',
			
		}
	}
LoginButton=()=>{
	if(this.state.login){
		return(
			<button onClick={this.handleLogin}>LogOut</button>
			)
	}
	else{
		return(
			<div>
				<div>
					<label>UserName</label>
					<input name="username" onChange={this.handleChange} />
				</div>
					<div>
						<label>Password</label>
						<input type="password" name="password" onChange={this.handleChange} />
					</div>
			
			<button onClick={this.handleLogin}>LogIn</button>
			</div>
		)
	}
}
handleChange=(event)=>{
	const {name,value}=event.target
	this.setState({
		username: name==='username'?value:null
	})
}

handleLogin=()=>{
	let login=this.state.login
	this.setState({
		login: login?false:true
	},()=>this.clearLocalStorage(this.state.login))
}

clearLocalStorage=login=>{
	localStorage.setItem("Login",login)
	if(!login){
		localStorage.clear()
	}
}

	render(){
		return(
				<div>
					{this.LoginButton()}
						{this.state.login?
							<div>
								Greetings to {this.state.username}!
							</div>
							:null

						}
				</div>
			)
	}
}

export default Home