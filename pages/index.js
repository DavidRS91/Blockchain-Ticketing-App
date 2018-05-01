import React, { Component } from "react";
import { Link } from "../routes.js";
import generator from "../ethereum/generator";
import web3, { web3Found, web3Account } from "../ethereum/web3";
import Layout from "../components/Layout";
import HelpPanels from "../components/HelpPanels";
import MetaMaskPrompt from "../components/MetaMaskPrompt";

class EventsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      open: false,
      network: null
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  static async getInitialProps() {
    const accounts = await web3.eth.getAccounts();
    return { accounts };
  }

  async componentDidMount() {
    const network = await web3.eth.net.getId();
    this.setState({
      loaded: true,
      network: network
    });
  }

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { accounts } = this.props;
    return (
      <Layout>
        {!web3Found && this.state.loaded ? <MetaMaskPrompt /> : ""}

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/static/logo.png"
            alt="my image"
            style={{ alignSelf: "center", width: "100%" }}
          />
        </div>
        <HelpPanels network={this.state.network} />
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
