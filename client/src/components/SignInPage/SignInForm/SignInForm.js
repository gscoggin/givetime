
import React from "react";
import SignInFormBack from "./SignInFormBack";
import SignInButton from "./SignInButton";
import "./SignInForm.css"

const SignInForm = ({ size, children }) => (

  <SignInFormBack>
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
    //  value={"firstname"}
     name="password"
     type="text"
     className="form-control"
     placeholder="Password" 
     id="firstname" />
 
  

  </div>
  
  <SignInButton />
  
</form>
  
</SignInFormBack>



);

export default SignInForm;