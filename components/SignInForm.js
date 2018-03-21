import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class SignInForm extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Email</label>
          <input placeholder="example@baldy.com" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Button
          style={{ backgroundColor: "#329f5b", color: "white" }}
          type="submit"
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default SignInForm;
