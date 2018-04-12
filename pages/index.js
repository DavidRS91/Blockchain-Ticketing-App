import React, { Component } from "react";
import {
  Card,
  Icon,
  Header,
  Modal,
  Image,
  Button,
  Accordion
} from "semantic-ui-react";
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
      open: false,
      displayGuide: "none",
      activeIndex: -1
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.showGuide = this.showGuide.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

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
  showGuide = () => this.setState({ displayGuide: "Block" });

  render() {
    const { account, activeIndex } = this.state;
    return (
      <Layout>
        {!web3Found && this.state.loaded ? (
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#E5E3E3",
              padding: "10px",
              margin: "0px 40px",
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
            style={{ alignSelf: "center", width: "100%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Button
            style={{
              backgroundColor: "rgba(255,255,255,0)",
              display: "flex",
              alignItems: "center",
              color: "#329f5b",
              borderWidth: "1px",
              borderColor: "#329f5b",
              borderStyle: "solid",
              backgroundColor: "#edf8f0",
              padding: "5px 10px",
              borderRadius: "10px"
            }}
            onClick={this.showGuide}
          >
            <i class="fas fa-info-circle fa-2x" />
            <h4
              style={{
                paddingLeft: "10px",
                alignSelf: "center",
                margin: "0px"
              }}
            >
              Get Started With Baldy
            </h4>
          </Button>
        </div>
        <div
          style={{
            padding: "20px",
            margin: "0px 40px",
            borderRadius: "10px",
            display: this.state.displayGuide
          }}
        >
          <h4 style={{ textAlign: "center" }}>
            Follow these steps to purchase tickets with Baldy!
          </h4>
          <Accordion styled>
            <Accordion.Title
              style={{ color: "#329f5b" }}
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              1. Install Metamask and create an account
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <p>
                Metamask is a chrome extension that connects you to the
                blockchain and gives you a digital wallet to store currency and
                other tokens. Installation is easy and free!{" "}
                <a
                  href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
                  target="_blank"
                  style={{
                    color: "#0c8346"
                  }}
                >
                  <strong>Click here to install</strong>
                </a>
                .
              </p>
            </Accordion.Content>

            <Accordion.Title
              style={{ color: "#329f5b" }}
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              2. Ensure Metamask is connected to the Rinkeby Test Network
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p>
                To change the network Metamask is connected to, first open
                metamask by clicking its logo in the top right of your browser
                (circled in red below). Next click on the network in the top
                left, and select Rinkeby Test Net from the dropdown. You are now
                connected to the Rinkeby Test Network!
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <img
                  src="/static/metamaskScreenshot.png"
                  alt="my image"
                  style={{
                    alignSelf: "center",
                    height: "200px",
                    border: "thin solid #8fd5a6"
                  }}
                />
              </div>
            </Accordion.Content>

            <Accordion.Title
              style={{ color: "#329f5b" }}
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              3. Acquire Ether to purchase tickets (it's free!)
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <p>
                <strong>
                  <a
                    target="_blank"
                    style={{
                      color: "#0c8346"
                    }}
                    href="https://faucet.rinkeby.io/"
                  >
                    faucet.rinkeby.io
                  </a>
                </strong>{" "}
                is a site that dispenses Ether on for use on the Rinkeby Test
                Network. This Ether won't have any monetary value, but it will
                allow you to purchase tickets on Baldy. Follow the instructions
                on the site to get your own.
              </p>

              <p>
                Note: When specifying which account you would like to deposit
                your Ether into, you will need to copy your wallet's address
                from Metamask. See the image below for reference on how to do
                this.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <img
                  src="/static/copyWalletAddress.png"
                  alt="my image"
                  style={{
                    alignSelf: "center",
                    height: "200px",
                    border: "thin solid #8fd5a6"
                  }}
                />
              </div>
            </Accordion.Content>
            <Link prefetch route="/events">
              <Accordion.Title
                style={{ color: "#329f5b", textAlign: "center" }}
              >
                You're all set! Click here to view upcoming events!
              </Accordion.Title>
            </Link>
          </Accordion>
        </div>
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
