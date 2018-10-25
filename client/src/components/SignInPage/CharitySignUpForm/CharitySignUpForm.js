
import React from "react";
import CharityFormBack from "./CharityFormBack";
import SignInButton from "./../SignInButton";
import "./CharitySignUpForm.css"

const CharitySignUpForm = ({ size, children }) => (

  <CharityFormBack>
  <form action="charity-form-control">
  
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
     name="charityname"
     type="text"
     className="form-control"
     placeholder="Charity Name" 
     id="charityname" />
 
  <input
    //  onChange={props.handleInputChange}
    //  value={props.value}
     name="charitylist"
     type="text"
     className="form-control"
     placeholder="Charity Category" 
      />
      
 
  <input
    //  onChange={props.handleInputChange}
    //  value={props.value}
     name="charityemail"
     type="text"
     className="form-control"
     placeholder="Email" 
     id="charityemail" />
 
  <input
    //  onChange={props.handleInputChange}
    //  value={props.value}
     name="phonenumber"
     type="text"
     className="form-control"
     placeholder="Phone Number" 
     id="phonenumber" />
  <p>Are you a 501-C3 Charity?</p>
  <input 
    type="radio" 
    className="editList" 
    id="charityYes" 
    value="charityYes"/>
  <label htmlFor="charityYes">Yes</label>

  <input 
    type="radio" 
    className="editList" 
    id="charityNo" 
    value="charityNo"/>
  <label htmlFor="charityNo">No</label>



  </div>
  
  <SignInButton />
  
</form>
  
</CharityFormBack>



);

export default CharitySignUpForm;