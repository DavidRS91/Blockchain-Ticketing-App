import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { Link } from "../routes.js";
import generator from "../ethereum/generator";
import Layout from "../components/Layout";

class EventsIndex extends Component {
  render() {
    return (
      <Layout>
        <h1>Welcome to Baldy!</h1>
      </Layout>
    );
  }
}

export default EventsIndex;
