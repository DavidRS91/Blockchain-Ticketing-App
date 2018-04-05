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
        <h1 style={{ textAlign: "center", fontSize: "60px" }}>Your Events</h1>
        <br />
        <br />
        <br />
        {this.props.eventSummaries
          .filter(event => event.ticketsOwned !== "0")
          .map((event, i) => (
            <Link route={`/events/${this.props.eventList[i]}`}>
              <Card key={i} fluid style={{ marginBottom: "50px" }}>
                <Card.Content header={event[6]} />
                <Card.Description
                  style={{
                    marginLeft: "20px",
                    marginBottom: "15px",
                    color: "#0c8346",
                    fontWeight: "600"
                  }}
                >
                  You have {event.ticketsOwned} tickets
                </Card.Description>
                <Card.Content extra style={{ display: "flex" }}>
                  <div style={{ color: "#0c8346" }}>
                    <Icon
                      style={{ marginLeft: "15px", color: "#0c8346" }}
                      name="calendar"
                    />
                    {event[3]}
                  </div>
                  <div style={{ color: "#0c8346" }}>
                    <Icon
                      style={{ marginLeft: "15px", color: "#0c8346" }}
                      name="map pin"
                    />
                    {event[5]}
                  </div>
                  <div style={{ color: "#0c8346" }}>
                    <Icon
                      style={{ marginLeft: "15px", color: "#0c8346" }}
                      name="users"
                    />
                    {`${event[8]} people are attending`}
                  </div>
                </Card.Content>
              </Card>
            </Link>
          ))}
        {this.props.eventSummaries.filter(e => e.ticketsOwned !== "0").length >
        0 ? (
          ""
        ) : (
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#E5E3E3",
              padding: "10px",
              marginLeft: "150px",
              marginRight: "150px",
              borderRadius: "15px",
              color: "#7F7777"
            }}
          >
            <Icon
              name="warning circle"
              style={{ color: "#0c8346", fontSize: "40px" }}
              size="huge"
            />
            <h3 style={{ color: "#0c8346", fontSize: "30px" }}>Uh oh!</h3>
            <p style={{ fontSize: "17px", fontWeight: "700" }}>
              Looks like you haven't purchased any tickets yet!
            </p>
            <a
              href="http://localhost:3029/events"
              style={{
                fontWeight: "700",
                fontSize: "17px",
                color: "#0c8346",
                fontStyle: "italic"
              }}
            >
              Click here to view upcoming events
            </a>
          </div>
        )}
      </Layout>
    );
  }
}

export default UserIndex;
