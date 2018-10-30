
import React, {Component} from "react";
import SignInForm from "./../SignInForm";

import "./SignInHero.css"
import { defaultProps } from "recompose";


// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
class SignInHero extends Component {

render() {

    return (

        <div className="sign-in-hero-full-screen">

        <SignInForm onUpdate = {this.props.onUpdate}/>

</div>

)}
};



export default SignInHero;
