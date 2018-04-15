import React, { Component } from "react";
import {
  Form,
  Button,
  Input,
  Message,
  Dimmer,
  Loader,
  Modal,
  Icon,
  Header
} from "semantic-ui-react";
import Layout from "../../components/Layout";
import web3 from "../../ethereum/web3";
import Event from "../../ethereum/event";
import { Link } from "../../routes";
import CreditPurchaseForm from "../../components/CreditPurchaseForm";
import { Converter } from "../../lib/requests";
import { Router } from "../../routes";

class EventPurchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      errorMessage: "",
      loading: false,
      paymentType: "",
      confirmationModal: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.payWithCard = this.payWithCard.bind(this);
    this.payWithEther = this.payWithEther.bind(this);
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
      title: summary[6],
      exchangeRates: exchangeRate
    };
  }

  payWithCard() {
    this.setState({ paymentType: "Card" });
  }

  payWithEther() {
    this.setState({ paymentType: "Ether" });
  }

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
      console.log("now");
      this.setState({ confirmationModal: true });
      // Router.pushRoute(`/events/${address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <Modal open={this.state.confirmationModal}>
          <Modal.Header>Purchase Complete!</Modal.Header>
          <Modal.Description style={{ padding: "15px" }}>
            <p style={{ fontSize: "16px" }}>
              You have successfully purchased {this.state.quantity} ticket{this
                .state.quantity === "1"
                ? ""
                : "s"}{" "}
              to {this.props.title}{" "}
            </p>
            <Link route={`/events`}>
              <Button>Back to Events</Button>
            </Link>
          </Modal.Description>
        </Modal>
        <Dimmer active={this.state.loading}>
          <Loader size="massive">Processing Transaction</Loader>
        </Dimmer>
        <h1 style={{ textAlign: "center", fontSize: "50px" }}>
          Purchase Tickets to {this.props.title}
        </h1>
        <br />
        <Form onSubmit={this.onSubmit}>
          <Message
            negative
            style={{
              display: `${!!this.state.errorMessage ? "block" : "none"}`
            }}
          >
            <Message.Header>Oops!</Message.Header>
            <p>{this.state.errorMessage}</p>
          </Message>
          <Form.Group widths="equal">
            <Form.Field>
              <label>How many tickets would you like to purchase?</label>
              <Input
                // label="# of tickets"
                value={this.state.quantity}
                onChange={event =>
                  this.setState({ quantity: event.target.value })
                }
                // labelPosition="right"
                id="quantity"
                placeholder="eg 1, 2, 3..."
              />
            </Form.Field>
          </Form.Group>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <br />
          <h4 style={{ marginLeft: "10px" }}>Select Payment Type</h4>
          <Button.Group style={{ margin: "10px" }}>
            <Button type="button" onClick={this.payWithEther}>
              Ether
            </Button>
            <Button.Or text="or" />
            <Button type="button" onClick={this.payWithCard}>
              Credit Card
            </Button>
          </Button.Group>
          {this.state.paymentType === "Ether" ? (
            <div
              style={{
                backgroundColor: "rgba(143, 213, 166, 0.4)",
                padding: "15px",
                borderRadius: "10px"
              }}
            >
              <h3>
                Pay With Ether ({this.state.quantity === 0 ||
                this.state.quantity === ""
                  ? 0
                  : Math.round(
                      parseInt(this.state.quantity, 10) *
                        web3.utils.fromWei(this.props.price, "ether") *
                        100
                    ) / 100}{" "}
                Ether)
              </h3>
              <br />
              <Form.Field
                id="submit"
                control={Button}
                content="Confirm Order"
                style={{ color: "white", backgroundColor: "#329f5b" }}
              />
            </div>
          ) : (
            ""
          )}
        </Form>
        {this.state.paymentType === "Card" ? (
          <div
            style={{
              backgroundColor: "rgba(143, 213, 166, 0.4)",
              padding: "15px",
              borderRadius: "10px"
            }}
          >
            <h3>
              Pay With Credit Card ({`${"$"}${
                this.state.quantity === 0 || this.state.quantity === ""
                  ? 0
                  : Math.round(
                      parseInt(this.state.quantity, 10) *
                        web3.utils.fromWei(this.props.price, "ether") *
                        100 *
                        this.props.exchangeRates.CAD
                    ) / 100
              }`})
            </h3>
            <Message negative>
              <Message.Header>Sorry!</Message.Header>
              <p>Baldy is not currently accepting credit card payments</p>
            </Message>
            <CreditPurchaseForm />
          </div>
        ) : (
          ""
        )}
      </Layout>
    );
  }
}

export default EventPurchase;
