import React from "react";
import { Link } from 'react-router-dom';
import "./Nav.css";
import Button from '@material-ui/core/Button';

const NavSideBar = ({ size, children}) => (
    <div className = "sideNav">
    <img src="http://www.rsa.neu.edu/wp-content/uploads/blank-profile-picture.png"/>
    <h3>Name</h3>
    {/* <a className= "sideNavItem" href = "#">Profile</a>
    <a className= "sideNavItem" href = "#">Events</a>
    <a className= "sideNavItem" href = "#">Sign Out</a> */}
    <Button className="sideNavItem" color="inherit">Profile</Button>
    <Button className="sideNavItem" color="inherit">Find Events in My Area</Button>

    <Button className="sideNavItem" color="inherit">My Events</Button>
    <Button className="sideNavItem" color="inherit">Sign Out</Button>

    
    

    </div>

    
);

export default NavSideBar;