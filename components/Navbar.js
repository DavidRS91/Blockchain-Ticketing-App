import React, { Component } from "react";
import { Menu, Card } from "semantic-ui-react";
import { Link } from "../routes";

const itemStyle = {
  color: "white",
  fontSize: "1.3em",
  fontWeight: "bold"
};

class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#329f5b",
          marginBottom: "20px",
          borderBottom: "#329f5b"
        }}
      >
        <Menu className="Navbar" size="tiny" secondary pointing>
          <Link route="/">
            <Menu.Item>
              <a style={itemStyle} className="item">
                Home
              </a>
            </Menu.Item>
          </Link>
          <Menu.Item>
            <Link route="/events">
              <a style={itemStyle} className="item">
                View Events
              </a>
            </Link>
          </Menu.Item>
          <Card centered>
            <Card.Header textAlign="center">LOGO</Card.Header>
          </Card>
          <Menu.Menu position="right">
            <Menu.Item>
              <Link route="/sign_in">
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
