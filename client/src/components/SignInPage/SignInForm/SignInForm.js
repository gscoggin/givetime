
import React, { Component } from "react";
import SignInFormBack from "./SignInFormBack";
import SignInButton from "./SignInButton";
import "./SignInForm.css"
import API from "../../../utils/API";



  class SignInForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        username: "",
        password: "",
      }
    }

  handleFormSubmit = event => {
    event.preventDefault();
  
      API.newVolunteer({
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber,
        username: this.state.username
      })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }


render() {

  return (
//onst SignInForm = ({ size, children }) => (
  <SignInFormBack>
  <form action="http://localhost:3001/api/signin" method="POST">
  
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
  };

}

export default SignInForm;