import React, { Component } from "react";
import { Menu, Card } from "semantic-ui-react";
import { Link } from "../routes";
import { web3, web3Found, web3Account } from "../ethereum/web3";
const { ADMIN_WALLET_ACCOUNT } = require("../config");

const itemStyle = {
  color: "white",
  fontSize: "1.3em",
  fontWeight: "bold"
};
const accountStyle = {
  color: "white",
  fontSize: "1.0em",
  fontWeight: "bold"
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
      <div
        style={{
          backgroundColor: "#329f5b",
          marginBottom: "20px",
          opacity: "1.0"
        }}
      >
        <Menu className="Navbar" size="tiny" secondary pointing>
          <Menu.Item>
            <Link prefetch route="/">
              <a style={itemStyle} className="item">
                Home
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link prefetch route="/events">
              <a style={itemStyle} className="item">
                View Events
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link prefetch route="/events/user">
              <a style={itemStyle} className="item">
                My Events
              </a>
            </Link>
          </Menu.Item>
          <Menu.Menu position="right">
            {account === ADMIN_WALLET_ACCOUNT ? (
              <Menu.Item>
                <Link prefetch route="/events/new">
                  <a style={itemStyle} className="item">
                    Create An Event
                  </a>
                </Link>
              </Menu.Item>
            ) : (
              ""
            )}

            {web3Found ? (
              <div
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "white",
                  borderRadius: "100%",
                  display: "flex"
                }}
              >
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "white",
                    borderRadius: "100%"
                  }}
                  src="/static/metamask.png"
                  alt="my image"
                />
              </div>
            ) : (
              "Metamask Not Detected"
            )}

            <Menu.Item>
              <div style={accountStyle} className="item">
                {account === undefined
                  ? "need to log in"
                  : `Account: ...${account.substr(account.length - 5)}`}
              </div>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
