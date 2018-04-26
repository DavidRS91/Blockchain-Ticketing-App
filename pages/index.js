import React, { Component } from "react";
import {
  Card,
  Icon,
  Header,
  Modal,
  Image,
  Button,
  Accordion,
  Segment
} from "semantic-ui-react";
import { Link } from "../routes.js";
import generator from "../ethereum/generator";
import web3, { web3Found, web3Account } from "../ethereum/web3";
import Layout from "../components/Layout";
import InfoPanel from "../components/InfoPanel";
import RequirementsPanel from "../components/RequirementsPanel";

class EventsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      loaded: false,
      open: false,
      displayGuide: "none",
      activeIndex: -1,
      balance: 0
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.showGuide = this.showGuide.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  static async getInitialProps() {
    const test = "tested";
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    const network = await web3.eth.net.getId((err, res) => {
      if (err) {
      }
    });
    return { accounts, test, network };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  async componentDidMount() {
    try {
      const acct = await web3Account;
      const balance = await web3.eth.getBalance(acct);
    } catch (err) {
      this.setState({ loaded: true, network: network });
      const acct = null;
      const balance = 0;
      console.log("ERROR: ", err);
    }
    this.setState({
      account: acct,
      loaded: true,
      balance: balance
    });
  }

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });
  showGuide = () => this.setState({ displayGuide: "flex" });

  render() {
    const { account, activeIndex, balance } = this.state;
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
              <Modal.Header style={{ color: "#329f5b" }}>Metamask</Modal.Header>
              <Modal.Content image>
                <Image wrapped size="medium" src="/static/metamask.svg" />
                <Modal.Description>
                  <Header style={{ color: "#329f5b" }}>
                    Your Connection to the Ethereum Blockchain
                  </Header>
                  {metaMaskModal}
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
          <Segment.Group style={{ width: "100%" }}>
            <RequirementsPanel
              balance={balance}
              network={this.props.network}
              title="What do I need to get started?"
            />
            <InfoPanel
              title="What is Metamask?"
              description={metamaskDescription}
            />
            <InfoPanel
              title="Installing Metamask"
              description={intstallDescription}
            />
            <InfoPanel
              title="Signing in to Metamask"
              description={signInDescription}
            />
            <InfoPanel
              title="Why is Metamask locked?"
              description={lockedDescription}
            />
            <InfoPanel
              title="Selecting the Rinkeby Test Network"
              description={rinkebyDescription}
            />
            <InfoPanel
              title="How do I get Ether?"
              description={getEtherDescription}
            />
          </Segment.Group>
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
          <i className="fab fa-ethereum fa-4x" />
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

const metamaskDescription = (
  <div>
    <p>
      Metamask is a google chrome extension that connects you to the blockchain
      and gives you a digital wallet to store Ether (a cryptocurrency).
    </p>
    <div style={{ position: "relative", height: "0", paddingBottom: "56.27%" }}>
      <iframe
        src="https://www.youtube.com/embed/6Gf_kRE4MJU?ecver=2"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: "0"
        }}
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  </div>
);

const intstallDescription = (
  <p>
    Installing Metamask is free and easy,{" "}
    <a
      href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
      target="_blank"
      style={{
        color: "#0c8346"
      }}
    >
      <strong>click here to get Metamask</strong>
    </a>{" "}
    from the Google Chrome Web Store.
  </p>
);

const rinkebyDescription = (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <p>
      First open metamask by clicking its logo in the top right of your browser
      (circled in red below). Next click on the network in the top left (see
      below), and select Rinkeby Test Net from the dropdown.
    </p>
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
);

const getEtherDescription = (
  <div style={{ display: "flex", flexDirection: "column" }}>
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
      dispenses Ether on for use on the Rinkeby Test Network. It will require
      you to make a post on social media containing your wallet's address in
      order to receive Ether.
    </p>

    <p>
      Note: See the image below for reference on how to copy your wallet's
      address.
    </p>
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
);

const lockedDescription = (
  <p>
    Metamask automatically locks your account after a certain period of time. To
    unlock simply click on the metaMask extension (to the right of the address
    bar in the browser) and type in your password.
  </p>
);

const signInDescription = (
  <div>
    <p>
      The first time you use Metamask, you will need to create a wallet (like an
      account). Click on the extension (the fox icon to the right of the address
      bar in the browser) and follow the instructions to create an account.
    </p>
    <p>
      <strong>Note: </strong> When creating an account, you will be given a list
      of seed words. Make sure to remember these in case you need to sign back
      in to your account.
    </p>
  </div>
);

const metaMaskModal = (
  <div>
    {" "}
    <p style={{ color: "#329f5b" }}>
      Metamask is a google chrome extension that enables users to interact with
      the Ethereum blockchain and provides them with a digital wallet for making
      transactions on the blockchain.
    </p>
    <p style={{ color: "#329f5b" }}>
      Users of Baldy need to install Metamask in order to purchase tickets, as
      your Metamask wallet address will serve as proof of ownership for tickets
      you have purchased, and Metamask will give you access to the events stored
      on the blockchain.
    </p>
    <br />
  </div>
);
