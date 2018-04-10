import React, { Component } from "react";
import { Card, Icon, Header, Modal, Image, Button } from "semantic-ui-react";
import { Link } from "../routes.js";
import generator from "../ethereum/generator";
import { web3, web3Found, web3Account } from "../ethereum/web3";
import Layout from "../components/Layout";

class EventsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      loaded: false,
      open: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  componentDidMount() {
    web3Account.then(acct => {
      this.setState({
        account: acct,
        loaded: true
      });
    });
  }

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { account } = this.state;
    return (
      <Layout>
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
                fontStyle: "italic",
                whiteSpace: "pre"
              }}
            >
              Click here to install{"    "}
            </a>
            <Modal
              open={this.state.open}
              trigger={
                <button
                  onClick={this.open}
                  style={{
                    fontWeight: "700",
                    fontSize: "17px",
                    color: "#0c8346",
                    fontStyle: "italic",
                    whiteSpace: "pre",
                    border: "none",
                    backgroundColor: "rgba(255,255,255,0)"
                  }}
                >
                  {"    "}What is Metamask?
                </button>
              }
            >
              <Modal.Header>Metamask</Modal.Header>
              <Modal.Content image>
                <Image wrapped size="medium" src="/static/metamask.svg" />
                <Modal.Description>
                  <Header>Your Connection to the Ethereum Blockchain</Header>
                  <p style={{ color: "black" }}>
                    Metamask is a google chrome extension that enables users to
                    interact with the Ethereum blockchain and provides them with
                    a digital wallet for making transactions on the blockchain.
                  </p>
                  <p style={{ color: "black" }}>
                    Users of Baldy need to install Metamask in order to purchase
                    tickets, as your Metamask wallet address will serve as proof
                    of ownership for tickets you have purchased, and Metamask
                    will give you access to the events stored on the blockchain.
                  </p>
                  <Button content="Got it" onClick={this.close} />
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </div>
        ) : (
          ""
        )}

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/static/logo.png"
            alt="my image"
            style={{ alignSelf: "center", height: "500px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <i class="fas fa-info-circle fa-3x" />
          <h3 style={{ paddingLeft: "10px", paddingBottom: "20px" }}>
            Getting Started With Baldy
          </h3>
        </div>
        <br />
        <br />
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <i class="fab fa-ethereum fa-4x" />
          <h3 style={{ paddingLeft: "10px", paddingBottom: "20px" }}>
            Hosted on the Ethereum Rinkeby Test Network
          </h3>
        </div>
        <br />
      </Layout>
    );
  }
}

export default EventsIndex;
