

import React from "react";
import SignUpForm from "./../SignUpForm";

import "./SignUpHero.css"


// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
const SignUpHero = ({ size, children }) => (
  


<div className="sign-up-hero-full-screen">


   <SignUpForm />
  
  
  

</div>

);



export default SignUpHero;