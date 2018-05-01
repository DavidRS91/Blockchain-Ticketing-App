import React, { Component } from "react";
import { Form, Message, Input, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Event from "../ethereum/event";

class PurchaseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      errorMessage: "",
      loading: false,
      confirmationModal: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = async event => {
    const { address, price } = this.props;
    const { quantity } = this.state;
    event.preventDefault();
    const eventInstance = Event(address);
    const purchasePrice = price * quantity;
    this.props.handleLoading(true);

    try {
      const accounts = await web3.eth.getAccounts();
      await eventInstance.methods.purchaseTicket(parseInt(quantity, 10)).send({
        from: accounts[0],
        value: purchasePrice
      });
      console.log("now");
      this.props.handleModal(true);
    } catch (err) {
      this.props.handleLoading(true, err.message);
    }
    this.props.handleLoading(false);
  };

  render() {
    const { price, title } = this.props;
    const { confirmationModal, quantity, loading, errorMessage } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Message
          negative
          style={{
            display: `${!!errorMessage ? "block" : "none"}`
          }}
        >
          <Message.Header>Oops!</Message.Header>
          <p>{errorMessage}</p>
        </Message>
        <Form.Group widths="equal">
          <Form.Field>
            <label>How many tickets would you like to purchase?</label>
            <Input
              value={quantity}
              onChange={event => {
                this.props.handleQuantity(event.target.value);
                this.setState({ quantity: event.target.value });
              }}
              id="quantity"
              placeholder="eg 1, 2, 3..."
            />
          </Form.Field>
        </Form.Group>
        <Message error header="Oops!" content={errorMessage} />
        <br />
        <h4 style={{ marginLeft: "10px" }}>Select Payment Type</h4>
        <div
          style={{
            backgroundColor: "rgba(143, 213, 166, 0.4)",
            padding: "15px",
            borderRadius: "10px"
          }}
        >
          <h3>
            Pay With Ether ({quantity === 0 || quantity === ""
              ? 0
              : Math.round(
                  parseInt(quantity, 10) *
                    web3.utils.fromWei(price, "ether") *
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
      </Form>
    );
  }
}

export default PurchaseForm;
