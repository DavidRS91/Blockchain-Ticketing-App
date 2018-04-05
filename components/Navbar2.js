import React, { Component } from "react";
import { Menu, Card, Popup, Icon } from "semantic-ui-react";
import { Link } from "../routes";
import { web3, web3Found, web3Account } from "../ethereum/web3";
const { ADMIN_WALLET_ACCOUNT } = require("../config");

const itemStyle = {
  color: "rgba(50, 159, 91,0.95)",
  fontSize: "1.1em",
  padding: "10px",
  alignSelf: "center",
  fontWeight: "700"
};
const accountStyle = {
  color: "rgba(50, 159, 91,0.95)",
  fontSize: "0.8em",
  padding: "5px",
  display: "flex",
  marginRight: "5px",
  flexDirection: "column",
  justifyContent: "center",
  alignSelf: "center",
  fontStyle: "italic",
  opacity: "0.7"
};

const navbarStyle = {
  display: "flex",
  backgroundColor: "rgba(255, 255, 255,1)",
  color: "white"
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      mestamask: ""
    };
  }

  static async getInitialProps() {
    const accounts = await web3.eth.getAccounts();
    return { accounts };
  }

  componentDidMount() {
    web3Account.then(acct => {
      this.setState({
        account: acct,
        metamask: web3Found
      });
    });
  }

  render() {
    const { account, metamask } = this.state;
    return (
      <nav style={navbarStyle}>
        <Link prefetch route="/">
          <a style={itemStyle} className="item">
            <img
              src="/static/bLogoGreen.png"
              alt="my image"
              style={{ height: "40px", marginLeft: "15px" }}
            />
          </a>
        </Link>
        <Link prefetch route="/events">
          <a style={itemStyle} className="item">
            View Events
          </a>
        </Link>
        {/* <Link prefetch route={`/events/${account}/user`}>
          <a style={itemStyle} className="item">
            My Events
          </a>
        </Link> */}

        <span style={{ marginLeft: "auto" }} />
        {account === ADMIN_WALLET_ACCOUNT ? (
          <Link prefetch route="/events/new">
            <a style={itemStyle} className="item">
              Create An Event
            </a>
          </Link>
        ) : (
          ""
        )}
        {account !== undefined ? (
          <Link prefetch route={`/events/${account}/user`}>
            <a style={itemStyle} className="item">
              My Events
            </a>
          </Link>
        ) : (
          ""
        )}
        <Popup
          trigger={
            process.browser ? (
              <div
                style={{ height: "40px", width: "40px", alignSelf: "center" }}
              >
                <Icon
                  name={
                    metamask && account !== undefined
                      ? "check circle"
                      : "calendar"
                  }
                  style={{
                    paddingTop: "25%",
                    paddingRight: "10px",
                    color: `${
                      metamask && account !== undefined
                        ? "#329f5b"
                        : "firebrick"
                    }`,
                    fontSize: "30px",
                    alignSelf: "center"
                  }}
                />
              </div>
            ) : (
              ""
            )
            // <div
            //   style={{
            //     display: "flex",
            //     justifyContent: "center",
            //     alignSelf: "center",
            //     margin: "10px"
            //   }}
            // >
            //   <img
            //     style={{
            //       width: "30px",
            //       height: "30px",
            //       backgroundColor: "white",
            //       borderRadius: "100%",
            //       alignSelf: "center",
            //       border: "3px solid #0c8346",
            //       WebkitFilter: `${metamask ? "grayscale(0)" : "grayscale(1)"}`
            //     }}
            //     src="/static/metamask.png"
            //     alt="my image"
            //   />
            // </div>
          }
          content={
            <div>
              {metamask ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "4px"
                  }}
                >
                  <Icon name="checkmark" color="green" size="large" />Metamask
                  detected
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "4px"
                  }}
                >
                  <Icon name="remove" color="red" size="large" />Metamask not
                  detected
                </div>
              )}
              {account !== undefined ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "4px"
                  }}
                >
                  <Icon name="checkmark" color="green" size="large" />Current
                  Account: {`0x...${account.substr(account.length - 5)}`}
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "4px"
                  }}
                >
                  <Icon name="remove" color="red" size="large" />Please login to
                  Metamask
                </div>
              )}
            </div>
          }
        />

        {/* {account === undefined ? (
          <div style={accountStyle} className="item">
            Please login <br /> to Metamask
          </div>
        ) : (
          <div style={accountStyle} className="item">
            <div>{`Current Account:`}</div>
            <div style={{ textAlign: "center" }}>{`0x...${account.substr(
              account.length - 5
            )}`}</div>
          </div>
        )} */}
      </nav>
    );
  }
}

export default Navbar;
