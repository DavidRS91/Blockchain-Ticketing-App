import React, { Component } from "react";
import generator from "../ethereum/generator";
import { Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

class SignIn extends Component {
  render() {
    return (
      <Layout>
        <h2>Sign Up!</h2>
        <SignUpForm />
      </Layout>
    );
  }
}

export default SignIn;
