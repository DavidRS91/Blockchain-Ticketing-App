import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "../../routes.js";
import generator from "../../ethereum/generator";
import Event from "../../ethereum/event";
import Layout from "../../components/Layout";

const divContentStyle = { color: "#0c8346" };

const cardIconStyle = { marginLeft: "15px", color: "#0c8346" };

class Index extends Component {
  constructor(props) {
    super(props);
    this.sortAndStyleEvents = this.sortAndStyleEvents.bind(this);
  }
  static async getInitialProps() {
    const eventList = await generator.methods.getDeployedEvents().call();
    let eventSummaries = [];

    for (let e of eventList) {
      let summary = await Event(e)
        .methods.getSummary()
        .call();
      summary.address = e;
      eventSummaries.push(summary);
    }
    const purchasedEvents = eventSummaries.filter(
      event => event.ticketsOwned > 0
    );

    return { eventList, eventSummaries };
  }

  sortAndStyleEvents(arr) {
    return arr
      .sort(function(a, b) {
        return Date.parse(a[3]) > Date.parse(b[3])
          ? 1
          : Date.parse(b[3]) > Date.parse(a[3]) ? -1 : 0;
      })
      .map((event, i) => (
        <Link route={`/events/${event.address}`}>
          <Card key={i} fluid style={{ marginBottom: "50px" }}>
            <Card.Content
              header={`${event[6]} ${
                event[1] === event[8] ? "• SOLD OUT" : ""
              }`}
            />
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
              <div style={divContentStyle}>
                <Icon style={cardIconStyle} name="ticket" />
                {`${event[1] - event[8]} remaining tickets`}
              </div>
            </Card.Content>
          </Card>
        </Link>
      ));
  }

  render() {
    return (
      <Layout>
        <h1 style={{ textAlign: "center", fontSize: "60px" }}>
          Upcoming Events
        </h1>
        <br />
        <br />
        <br />

        {this.sortAndStyleEvents(this.props.eventSummaries)}
      </Layout>
    );
  }
}

export default Index;
