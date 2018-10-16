import React from "react";
import "./Nav.css";

const NavSideBar = ({ size, children}) => (
    <div className = "sideNav">
    <img src="http://www.rsa.neu.edu/wp-content/uploads/blank-profile-picture.png"/>
    <h3>Name</h3>
    <a className= "sideNavItem" href = "#">Profile</a>
    <a className= "sideNavItem" href = "#">Events</a>
    <a className= "sideNavItem" href = "#">Sign Out</a>
    </div>
);

export default NavSideBar;