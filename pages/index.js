import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { Link } from "../routes.js";
import generator from "../ethereum/generator";
import { web3, web3Found, web3Account } from "../ethereum/web3";
import Layout from "../components/Layout";

class EventsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: ""
    };
  }

  componentDidMount() {
    web3Account.then(acct => {
      this.setState({
        account: acct
      });
    });
  }

  render() {
    const { account } = this.state;
    return (
      <Layout>
        <h1>Welcome to Baldy!</h1>
        <p style={{ fontSize: "15px" }}>
          Baldy is a blockchain-based ticketing solution aimed at reducing
          fraudulent ticket sales and eliminating ticket scalping.
        </p>
        <br />
        {`${account}`}
        <br />
        {web3Found ? (
          "Metamask ready to go"
        ) : (
          <p>
            Uh oh! Looks like you don't have Metamask.{" "}
            <a>Click here to get started</a>
          </p>
        )}
        <br />
        <br />
        <h3>How does it work?</h3>
        <p>
          Baldy keeps a record of all ticket purchasers on the Ethereum
          blockchain and verifies their purchase via QR-code when entering an
          event.
        </p>
        <br />
        <br />
        <h3>Do I need to buy cryptocurrency to participate?</h3>
        <p>
          No cryptocurrency? No problem! The beauty of Baldy is that it aims to
          be accessible to all. You can pay with ether or your credit card, you
          simply need a metamask digital wallet to store your proof of purchase.
        </p>
      </Layout>
    );
  }
}

export default EventsIndex;
