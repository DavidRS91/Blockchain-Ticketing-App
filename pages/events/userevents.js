import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "../../routes.js";
import generator from "../../ethereum/generator";
import Layout from "../../components/Layout";
import Event from "../../ethereum/event";
import { web3, web3Found, web3Account } from "../../ethereum/web3";

const divContentStyle = { color: "#0c8346" };

const cardIconStyle = { marginLeft: "15px", color: "#0c8346" };

class UserIndex extends Component {
  constructor() {
    super();
    this.displayUserEvents = this.displayUserEvents.bind(this);
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

  displayUserEvents(arr) {
    if (arr.filter(e => e.ticketsOwned !== "0").length > 0) {
      return arr
        .sort(function(a, b) {
          return Date.parse(a[3]) > Date.parse(b[3])
            ? 1
            : Date.parse(b[3]) > Date.parse(a[3]) ? -1 : 0;
        })
        .filter(event => event.ticketsOwned !== "0")
        .map((event, i) => (
          <Link route={`/events/${event.address}`}>
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
                You have {event.ticketsOwned}{" "}
                {event.ticketsOwned > 1 ? "tickets" : "ticket"}
              </Card.Description>
              <Card.Content extra style={{ display: "flex" }}>
                <div style={divContentStyle}>
                  <Icon style={cardIconStyle} name="calendar" />
                  {event[3]}
                </div>
                <div style={divContentStyle}>
                  <Icon style={cardIconStyle} name="map pin" />
                  {event[5]}
                </div>
                <div style={divContentStyle}>
                  <Icon style={cardIconStyle} name="users" />
                  {`${event[8]} people are attending`}
                </div>
              </Card.Content>
            </Card>
          </Link>
        ));
    } else {
      return (
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
          <Link route="/events">
            <a
              style={{
                fontWeight: "700",
                fontSize: "17px",
                color: "#0c8346",
                fontStyle: "italic"
              }}
            >
              Click here to view upcoming events
            </a>
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <Layout>
        <h1 style={{ textAlign: "center", fontSize: "60px" }}>Your Events</h1>
        <br />
        <br />
        <br />
        {this.displayUserEvents(this.props.eventSummaries)}
      </Layout>
    );
  }
}

export default UserIndex;
