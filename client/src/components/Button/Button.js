import React from "react";
import "./Button.css";
import { Link } from 'react-router-dom';

// Destructuring the type, className, children and onClick props, applying them to the button element
const Button = ({ type = "default", className, children, onClick }) => (
  <button>
 
 
<div class="mobile-app-toggle" data-mobile-app-toggle>
  <Link to ="/signup" class="button">Volunteer</Link>
  <Link to ="/charitysignup" class="button">Charity</Link>
</div>
  
  
    {children}
  </button>
);

export default Button;