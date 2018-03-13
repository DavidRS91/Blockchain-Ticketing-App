import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

class Navbar extends Component {
  render() {
    return (
      <Menu pointing secondary>
        <Link route="/">
          <a className="item">Home</a>
        </Link>
        <Link route="/events">
          <a className="item">View Events</a>
        </Link>

        {/* <Menu.Item name="home" />
        <Menu.Item name="View Events" /> */}
        <Menu.Menu position="right">
          <Link route="/sign_in">
            <a className="item">Sign In</a>
          </Link>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;
