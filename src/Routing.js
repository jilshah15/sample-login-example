import React from 'react';
import './App.css';
import Home from './forms/Home';
import Registration from './forms/Registration';
//import Login from './forms/Login';
import Aboutus from './forms/Aboutus';
import {BrowserRouter,Link,Route} from 'react-router-dom';

class Routing extends React.Component{
 render(){
  return(
      <div>
      <BrowserRouter>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand">Employeetech</a>
            </div>
            <ul class="nav navbar-nav">
            
                <li class="active"><Link to="/home">Home</Link></li>
                <li><Link to="/registration">Registration</Link></li>
                
                <li><Link to="/aboutus">About Us</Link></li>
            </ul>
          </div>
        </nav>
        <Route path="/home" component={Home}></Route>
        <Route path="/registration" component={Registration}></Route>
        
        <Route path="/aboutus" component={Aboutus}></Route>
        </BrowserRouter>
    </div>

    )
 } 
}
export default Routing
