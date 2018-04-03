const async = require("async");
import React, { Component } from "react";
import each from "async/each";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "../../routes.js";
import generator from "../../ethereum/generator";
import Layout from "../../components/Layout";
import Event from "../../ethereum/event";
import { web3, web3Found, web3Account } from "../../ethereum/web3";

class UserIndex extends Component {
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

      eventSummaries.push(summary);
    }
    const purchasedEvents = eventSummaries.filter(
      event => event.ticketsOwned > 0
    );

    return { eventList, purchasedEvents, eventSummaries };
  }

  renderEvents() {
    const items = this.props.purchasedEvents.map(event => {
      return {
        header: (
          <div>
            {event[2]} •
            <Icon name="user" />You have {event.ticketsOwned} tickets
          </div>
        ),
        description: (
          <div>
            <Icon name="user" /> {event.ticketsOwned}
            <Link route={`/events/${event[2]}`}>
              <a style={{ color: "#329f5b" }}> View Event</a>
            </Link>
          </div>
        ),
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h1 style={{ textAlign: "center" }}>Open Events</h1>
        <br />
        <br />
        <br />
        {this.renderEvents()}
      </Layout>
    );
  }
}

export default UserIndex;
