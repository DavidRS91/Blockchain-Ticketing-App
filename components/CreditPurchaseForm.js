import React, { Component } from "react";
import { Form, Button, Input } from "semantic-ui-react";
import { StripeProvider } from "react-stripe-elements";
import web3 from "../ethereum/web3";
import event from "../ethereum/event";
import MyStoreCheckout from "./MyStoreCheckout";
const { STRIPE_KEY } = require("../config");

class CreditPurchaseForm extends Component {
  constructor() {
    super();

    this.state = {
      stripe: null
    };
  }

  componentDidMount() {
    // componentDidMount only runs in a browser environment.
    // In addition to loading asynchronously, this code is safe to server-side render.

    // You can inject a script tag manually like this,
    // or you can use the 'async' attribute on the Stripe.js v3 <script> tag.
    const stripeJs = document.createElement("script");
    stripeJs.src = "https://js.stripe.com/v3/";
    stripeJs.async = true;
    stripeJs.onload = () => {
      this.setState({
        stripe: window.Stripe(STRIPE_KEY)
      });
    };
    document.body && document.body.appendChild(stripeJs);
  }

  render() {
    return (
      <StripeProvider stripe={this.state.stripe}>
        <MyStoreCheckout />
      </StripeProvider>
    );
  }
}

export default CreditPurchaseForm;
