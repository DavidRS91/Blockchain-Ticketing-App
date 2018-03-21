import React, { Component } from "react";
import generator from "../ethereum/generator";
import { Button } from "semantic-ui-react";
import { Link } from "../routes";
import Layout from "../components/Layout";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

class SignIn extends Component {
  render() {
    return (
      <Layout>
        <h2>Sign In</h2>
        <SignInForm />
        <br />
        <br />
        <h4>Don't have an account?</h4>
        <Link route="/sign_up">
          <Button style={{ backgroundColor: "#329f5b", color: "white" }}>
            Sign Up
          </Button>
        </Link>
      </Layout>
    );
  }
}

export default SignIn;
