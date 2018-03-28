import React, { Component } from "react";
import { Menu, Card } from "semantic-ui-react";
import { Link } from "../routes";
import { web3, web3Found, web3Account } from "../ethereum/web3";

const itemStyle = {
  color: "white",
  fontSize: "1.3em",
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
                {`Home, ${account}`}
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
          {!!this.props.accounts ? (
            <Menu.Item>{this.props.accounts[0]}</Menu.Item>
          ) : (
            ""
          )}
          <Menu.Menu position="right">
            <Menu.Item>
              <Link prefetch route="/events/new">
                <a style={itemStyle} className="item">
                  Create An Event
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link prefetch route="/sign_in">
                <a style={itemStyle} className="item">
                  Sign In / Register
                </a>
              </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
