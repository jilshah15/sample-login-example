import React from 'react';
class Aboutus extends React.Component{
	constructor(props){
		super(props)
		this.state={
			activeItem:'home',
			emp:localStorage.getItem('emp')?
			JSON.parse(localStorage.getItem('emp')):{
				name:'',
				gender:'',
				

			}
		}
	}	
	render(){
		const {emp}=this.state
		return(
				<div>
					{localStorage.getItem("Login")?
				<div>
							This is your Employee details:
								<div>
									Employee name is={emp.name}
								</div>
									<div>
										Employee gender is={emp.gender}
									</div>
						</div>
						:
						<div>
							please login!!
						</div>
					}
						
				</div>
			)
	}
}
export default Aboutus