import React from 'react';
import './NavBar.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


function NavBar() {
  return (   
    
    <div>
        <div class="menue-bar" id="top">
         <Switch>
            <ul>
            <li class="active1" id="home" className="navbar-brand"><Link to="/home">MedTech</Link></li> 
            <li><Link to="/depDetails"> <i class="fa fa-ellipsis-v" > </i>Departments </Link>
            </li>

            <li><Link to="/aboutus"><i class="fa fa-user" > </i> About Me </Link>

            </li>
            
            <li><Link to="/AddDepartment"><i class="fa fa-user-plus" > </i>Add Department </Link></li>
        </ul>
        </Switch>
    </div>
    </div>
  );
}

export default NavBar;
