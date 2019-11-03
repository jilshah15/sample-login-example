import React from 'react';
class Registration extends React.Component{
	constructor(props){
		super(props)
		this.state={
			emp:{
				name:'',
				gender:'',
				
			}
		}
	}

handleChange=(event)=>{
	let emp=this.state.emp
	emp[event.target.name]=event.target.value
	this.setState({
				emp
	})
}	

handleSubmit=(event)=>{
	event.preventDefault();
	localStorage.setItem('emp',JSON.stringify(this.state.emp))
	this.props.history.push('/aboutus')
}
	render(){
		console.log(this.state)
		const {emp}=this.state
		return(
				<div>
					{localStorage.getItem("Login")?
				<form onSubmit={this.handleSubmit}>
						<h1>Registration Form</h1>
						<div>
							<label>Name</label>
							<input name="name" onChange={this.handleChange} defaultValue={emp.eName}/>
						</div>
							<div>
								<label>Gender</label>
								<input type="radio"
										name="gender"
										value="male" onChange={this.handleChange}
										checked={this.state.emp['gender']==='male'?true:false}

								/><label>Male</label>
									<input type="radio"
										name="gender"
										value="female" onChange={this.handleChange}
										checked={this.state.emp['gender']==='female'?true:false}

								/><label>Female</label>
							</div>
								<div>
									<button>Register</button>
								</div>
					</form>
					:<div>
						please login!!!
					</div>
				}
										
				</div>
			)
	}
}
export default Registration