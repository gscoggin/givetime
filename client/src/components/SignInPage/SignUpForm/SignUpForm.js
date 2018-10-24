
import React from "react";
import Foundation from 'react-foundation';
import FormBack from "./../FormBack";
import SignInButton from "./../SignInButton";
import "./SignUpForm.css"

const SignUpForm = ({ size, children }) => (

  <FormBack>
  <form action="form-control">
  
  <div className="inputs">
  <input
    //  onChange={props.handleInputChange}
    //  value="username"
     name="username"
     type="text"
     className="form-control"
     placeholder="Username" 
     id="username" />

  <input
    //  onChange={props.handleInputChange}
    //  value="username"
     name="password"
     type="text"
     className="form-control"
     placeholder="Password" 
     id="password" />
  
  <input
    //  onChange={props.handleInputChange}
    //  value={"firstname"}
     name="firstname"
     type="text"
     className="form-control"
     placeholder="First Name" 
     id="firstname" />
 
  <input
    //  onChange={props.handleInputChange}
    //  value={props.value}
     name="lastname"
     type="text"
     className="form-control"
     placeholder="Last Name" 
     id="lastname" />
 
  <input
    //  onChange={props.handleInputChange}
    //  value={props.value}
     name="email"
     type="text"
     className="form-control"
     placeholder="Email" 
     id="email" />
 
  <input
    //  onChange={props.handleInputChange}
    //  value={props.value}
     name="phonenumber"
     type="text"
     className="form-control"
     placeholder="Phone Number" 
     id="phonenumber" />

  </div>
  
  <SignInButton />
  
</form>
  
</FormBack>



);

export default SignUpForm;