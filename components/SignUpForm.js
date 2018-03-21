import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class SignUpForm extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder="example@baldy.com" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Form.Field>
          <label>Password Confirmation</label>
          <input type="password" placeholder="Retype Password" />
        </Form.Field>
        <Button
          type="submit"
          style={{ backgroundColor: "#329f5b", color: "white" }}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default SignUpForm;
