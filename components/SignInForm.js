import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static getInitialProps(ctx) {
    if (redirectIfAuthenticated(ctx)) {
      return {};
    }

    const success = getCookie("success", ctx.req);
    if (success) {
      removeCookie("success");
    }
    return {
      success
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const email = this.state.email;
    const password = this.state.password;

    const error = await signIn(email, password);

    if (error) {
      this.setState({
        error
      });
      return false;
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="example@baldy.com"
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={event => this.setState({ password: event.target.value })}
          />
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
