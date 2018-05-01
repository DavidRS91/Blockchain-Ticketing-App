import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "../../routes.js";
import generator from "../../ethereum/generator";
import Layout from "../../components/Layout";
import Event from "../../ethereum/event";
import { web3, web3Found, web3Account } from "../../ethereum/web3";
import displayUserEvents from "../../lib/displayUserEvents";

const divContentStyle = { color: "#0c8346" };

const cardIconStyle = { marginLeft: "15px", color: "#0c8346" };

class UserIndex extends Component {
  constructor() {
    super();
  }

  static async getInitialProps({ query }) {
    const eventList = await generator.methods.getDeployedEvents().call();
    let eventSummaries = [];

    for (let e of eventList) {
      let summary = await Event(e)
        .methods.getSummary()
        .call();
      const ticketsOwned = await Event(e)
        .methods.verifyOwnership(query.address)
        .call();
      summary["ticketsOwned"] = ticketsOwned;
      summary.address = e;

      eventSummaries.push(summary);
    }
    const purchasedEvents = eventSummaries.filter(
      event => event.ticketsOwned > 0
    );

    return { eventList, purchasedEvents, eventSummaries };
  }

  render() {
    return (
      <Layout>
        <h1 style={{ textAlign: "center", fontSize: "60px" }}>Your Events</h1>
        <br />
        <br />
        <br />
        {displayUserEvents(this.props.eventSummaries)}
      </Layout>
    );
  }
}

export default UserIndex;
