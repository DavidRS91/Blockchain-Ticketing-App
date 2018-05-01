import React, { Component } from "react";
import { Icon, Modal, Image, Button, Header } from "semantic-ui-react";
import { metaMaskModal } from "./panelContents/panelDescriptions";

class MetaMaskPrompt extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    return (
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
    );
  }
}
export default MetaMaskPrompt;
