import React, { Component } from "react";
import { Card, Icon, Dimmer, Loader } from "semantic-ui-react";
import { Link } from "../routes.js";
import generator from "../ethereum/generator";
import { web3, web3Found, web3Account } from "../ethereum/web3";
import Layout from "../components/Layout";

class EventsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      loaded: false
    };
  }

  componentDidMount() {
    web3Account.then(acct => {
      this.setState({
        account: acct,
        loaded: true
      });
    });
  }

  render() {
    const { account } = this.state;
    return (
      <Layout>
        <img
          src="/static/logo.png"
          alt="my image"
          style={{ alignSelf: "center" }}
        />
        {/* <p style={{ fontSize: "15px", textAlign: "center" }}>
          Baldy is a blockchain-based ticketing solution aimed at reducing
          fraudulent ticket sales and eliminating ticket scalping.
        </p> */}
        <br />
        {!web3Found && this.state.loaded ? (
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#E5E3E3",
              padding: "10px",
              marginLeft: "150px",
              marginRight: "150px",
              borderRadius: "15px",
              color: "#7F7777"
            }}
          >
            <Icon
              name="warning circle"
              style={{ color: "#0c8346", fontSize: "40px" }}
              size="huge"
            />
            <p style={{ fontSize: "17px", fontWeight: "700" }}>
              Uh oh! Looks like you don't have Metamask.
            </p>
            <a
              href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
              target="_blank"
              style={{
                fontWeight: "700",
                fontSize: "17px",
                color: "#0c8346",
                fontStyle: "italic"
              }}
            >
              Click here to install
            </a>
          </div>
        ) : (
          ""
        )}
        {/*
        <br />
        <br />
        <h3 style={{ textAlign: "center" }}>How does it work?</h3>
        <p style={{ textAlign: "center" }}>
          Baldy keeps a record of all ticket purchasers on the Ethereum
          blockchain and verifies their purchase via QR-code when entering an
          event.
        </p>
        <br />
        <br />
        <h3 style={{ textAlign: "center" }}>
          Do I need to buy cryptocurrency to participate?
        </h3>
        <p style={{ textAlign: "center" }}>
          No cryptocurrency? No problem! The beauty of Baldy is that it aims to
          be accessible to all. You can pay with ether or your credit card, you
          simply need a metamask digital wallet to store your proof of purchase.
        </p> */}
      </Layout>
    );
  }
}

export default EventsIndex;
