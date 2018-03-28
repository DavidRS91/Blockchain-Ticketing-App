import React, { Component } from "react";
import { Menu, Card } from "semantic-ui-react";
import { Link } from "../routes";
import { web3, web3Found, web3Account } from "../ethereum/web3";
const { ADMIN_WALLET_ACCOUNT } = require("../config");

const itemStyle = {
  color: "white",
  fontSize: "1.3em",
  padding: "5px",
  alignSelf: "center"
};
const accountStyle = {
  color: "white",
  fontSize: "1.0em",
  padding: "5px",
  display: "flex",
  alignSelf: "center"
};

const navbarStyle = {
  display: "flex",
  backgroundColor: "tomato",
  color: "white"
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: ""
    };
  }

  static async getInitialProps() {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    return { accounts };
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
      <nav style={navbarStyle}>
        <Link prefetch route="/">
          <a style={itemStyle} className="item">
            Home
          </a>
        </Link>
        <Link prefetch route="/events">
          <a style={itemStyle} className="item">
            View Events
          </a>
        </Link>
        <Link prefetch route="/events/user">
          <a style={itemStyle} className="item">
            My Events
          </a>
        </Link>
        <Link prefetch route="/events/new">
          <a style={itemStyle} className="item">
            Create An Event
          </a>
        </Link>
        <span style={{ marginLeft: "auto" }} />
        {web3Found ? (
          <div
            style={{
              height: "42px",
              width: "42px",
              backgroundColor: "white",
              borderRadius: "100%",
              display: "flex",
              justifyContent: "center",
              margin: "10px",
              alignSelf: "center"
            }}
          >
            <img
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "white",
                borderRadius: "100%",
                alignSelf: "center"
              }}
              src="/static/metamask.png"
              alt="my image"
            />
          </div>
        ) : (
          <div
            style={{
              height: "42px",
              width: "42px",
              borderRadius: "100%",
              display: "flex",
              justifyContent: "center",
              margin: "10px",
              alignSelf: "center",
              border: "thick solid white"
            }}
          >
            <img
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: `${true ? "red" : "green"}`,
                borderRadius: "100%",
                alignSelf: "center"
              }}
              src="/static/metamask.png"
              alt="my image"
            />
          </div>
        )}
        <div style={accountStyle} className="item">
          {account === undefined ? (
            "need to log in"
          ) : (
            <div style={{ justifyContent: "center", display: "flex" }}>
              {`Current Account:`}
              <br /> {`...${account.substr(account.length - 5)}`}
            </div>
          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
