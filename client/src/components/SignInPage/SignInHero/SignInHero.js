

import React from "react";
import Foundation from 'react-foundation';
import SignInForm from "./../SignInForm";
import "./SignInHero.css"

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
const SignInHero = ({ size, children }) => (
  


<div className="sign-in-hero-full-screen">


  <SignInForm />

  
  

</div>

);



export default SignInHero;