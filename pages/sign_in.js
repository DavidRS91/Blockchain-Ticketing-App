import React, { Component } from "react";
import generator from "../ethereum/generator";
import { Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import SignInForm from "../components/SignInForm";

class SignIn extends Component {
  render() {
    return (
      <Layout>
        <h2>Sign In</h2>
        <SignInForm />
        <br />
        <br />
        <h4>Don't have an account?</h4>
        <Button primary>Sign Up</Button>
      </Layout>
    );
  }
}

export default SignIn;
