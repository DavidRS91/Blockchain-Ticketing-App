import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import web3 from "../../ethereum/web3";
import Event from "../../ethereum/event";
import CreditPurchaseForm from "../../components/CreditPurchaseForm";
import { Converter } from "../../lib/requests";

class EventPurchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      errorMessage: "",
      loading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  static async getInitialProps(props) {
    const eventInstance = Event(props.query.address);
    const summary = await eventInstance.methods.getSummary().call();
    const exchangeRate = await Converter.etherToCAD();
    return {
      address: props.query.address,
      price: summary[0],
      capacity: summary[1],
      manager: summary[2],
      isOpen: summary[3],
      ticketsSold: summary[4],
      exchangeRates: exchangeRate
    };
  }

  onSubmit = async event => {
    const { address, price } = this.props;
    console.log(parseInt(this.state.quantity, 10));
    event.preventDefault();
    const eventInstance = Event(address);
    const purchasePrice = price * this.state.quantity;
    console.log(typeof purchasePrice);
    console.log(typeof this.state.quantity);
    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await eventInstance.methods
        .purchaseTicket(parseInt(this.state.quantity, 10))
        .send({
          from: accounts[0],
          value: purchasePrice
        });
      Router.replaceRoute(`/event/${address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
      console.log(err);
      console.log("failed");
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1>Event Purchase Page</h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Quantity</label>
            <Input
              label="# of tickets"
              value={this.state.quantity}
              onChange={event =>
                this.setState({ quantity: event.target.value })
              }
              labelPosition="right"
              id="quantity"
              placeholder="eg 1, 2, 3..."
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Form.Field id="submit" control={Button} content="Purchase" />
        </Form>
        <CreditPurchaseForm />
      </Layout>
    );
  }
}

export default EventPurchase;
