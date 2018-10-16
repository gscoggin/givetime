import React from "react";
import "./Button.css";

// Destructuring the type, className, children and onClick props, applying them to the button element
const Button = ({ type = "default", className, children, onClick }) => (
  <button>
 
 
<div class="mobile-app-toggle" data-mobile-app-toggle>
  <button class="button is-active">Volunteer</button>
  <button class="button">Charity</button>
</div>
  
  
    {children}
  </button>
);

export default Button;