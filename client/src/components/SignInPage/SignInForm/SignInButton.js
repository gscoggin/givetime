
import React from "react";
import "./SignInForm.css"

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
const SignInButton = ({ size, children }) => (
  
  <button className="signin-button button center">Sign in</button>


);



export default SignInButton;