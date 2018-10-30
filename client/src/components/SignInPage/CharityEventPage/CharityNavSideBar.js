import React from "react";
import { Link } from 'react-router-dom';
import "../../Nav/Nav.css";
import Button from '@material-ui/core/Button';

const CharityNavSideBar = (props) => (
    <div className = "charSideNav">
    <img src="http://www.rsa.neu.edu/wp-content/uploads/blank-profile-picture.png"/>
    <h3>Name</h3>
    {/* <a className= "sideNavItem" href = "#">Profile</a>
    <a className= "sideNavItem" href = "#">Events</a>
    <a className= "sideNavItem" href = "#">Sign Out</a> */}
    <Button className="sideNavItem" color="inherit">Profile</Button>
    <Button className="sideNavItem" color="inherit" onClick={props.createtoggle}>Create an Event</Button>

    <Button className="sideNavItem" color="inherit" onClick={props.toggle}>My Events</Button>
    <Button className="sideNavItem" color="inherit">Sign Out</Button>

    
    

    </div>

    
);

export default CharityNavSideBar;