
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SignInFormBack from "./SignInFormBack";
import "./SignInForm.css"
import API from "../../../utils/API";

  class SignInForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        username: "",
        password: "",
        userData: {},
        redirect: false
      }
    }

    setRedirect = () => {
      this.setState({
        redirect:true
      })
    }

    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/eventfeed' />
      }
    }

    handleInputChange = event => {
      let value = event.target.value;
      const name = event.target.name;
  
      this.setState({
        [name]: value
      });
    };


  handleFormSubmit = event => {
    event.preventDefault();

    API.newSignin({
      username: this.state.username,
      password: this.state.password
    })
      .then(this.setRedirect)
      .catch(err => console.log(err));
      
    }


render() {

  return (
  <SignInFormBack>
  <form>
  
  <div className="inputs">
  <input
    onChange={this.handleInputChange}
    value={this.state.username}
    name="username"
    type="text"
    className="form-control"
    placeholder="Username" 
    id="username" />
  
  <input
    onChange={this.handleInputChange}
    value={this.state.password}
    name="password"
    type="text"
    className="form-control"
    placeholder="Password" 
    id="password" />
 
  

  </div>

  {this.renderRedirect()}
  
  <button onClick={this.handleFormSubmit} className="signin-button button center">Sign in</button>
  
</form>
  
</SignInFormBack>

    );
  };

}

export default SignInForm;