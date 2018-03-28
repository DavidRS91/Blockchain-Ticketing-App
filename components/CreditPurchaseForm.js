import React, { Component } from "react";
import { Form, Button, Input } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import event from "../ethereum/event";

class EtherPurchaseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quanity: ""
    };
    this.onPurchase = this.onPurchase.bind(this);
  }

  onPurchase = async event => {
    try {
      const accounts = await web3.eth.getAccounts();
      await generator.methods.purchaseTicket(this.state.quanity).send({
        from: accounts[0]
      });

      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };

  render() {
    return (
      <Form>
        <Form.Field onSubmit={this.onPurchase}>
          <label>Quantity</label>
          <Input
            label="# of tickets"
            value={this.state.quanity}
            onChange={event => this.setState({ quanity: event.target.value })}
            labelPosition="right"
            id="quanity"
            placeholder="eg 1, 2, 3..."
          />
        </Form.Field>
        <Button> Purchase! </Button>
      </Form>
    );
  }
}

export default EtherPurchaseForm;
