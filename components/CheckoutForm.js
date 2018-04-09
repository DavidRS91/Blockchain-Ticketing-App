import React from "react";
import { injectStripe } from "react-stripe-elements";
import { Button } from "semantic-ui-react";
import { web3, web3Found, web3Account } from "../ethereum/web3";

import CardSection from "./CardSection";

class CheckoutForm extends React.Component {
  handleSubmit = ev => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({ name: "Jenny Rosen" }).then(({ token }) => {
      console.log("Received Stripe token:", token);
    });

    onSubmit = async event => {
      const { address, price } = this.props;
      event.preventDefault();
      const eventInstance = Event(address);
      const purchasePrice = price * this.state.quantity;
      this.setState({ loading: true, errorMessage: "" });

      try {
        const accounts = await web3.eth.getAccounts();
        await eventInstance.methods
          .purchaseTicket(parseInt(this.state.quantity, 10))
          .send({
            from: accounts[0],
            value: purchasePrice
          });
        Router.pushRoute(`/events/${address}`);
      } catch (err) {
        this.setState({ errorMessage: err.message });
      }
      this.setState({ loading: false });
    };

    // However, this line of code will do the same thing:
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardSection style={{ backgroundColor: "white" }} />
        <br />
        <Button style={{ color: "white", backgroundColor: "#329f5b" }}>
          Confirm Order
        </Button>
        {/* <button>Confirm order</button> */}
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
