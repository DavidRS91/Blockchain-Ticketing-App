import React, { Component } from "react";
import { Card, Icon, Message } from "semantic-ui-react";
import { Link } from "../../routes.js";
import generator from "../../ethereum/generator";
import Event from "../../ethereum/event";
import Layout from "../../components/Layout";
import sortAndStyleEvents from "../../lib/sortAndStyleEvents";

const divContentStyle = { color: "#0c8346" };

const cardIconStyle = { marginLeft: "15px", color: "#0c8346" };

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "block"
    };
    this.handleDismiss = this.handleDismiss.bind(this);
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

  handleDismiss = () => {
    this.setState({ display: "none" });
  };

  render() {
    return (
      <Layout>
        <h1
          style={{
            textAlign: "center",
            fontSize: "60px"
          }}
        >
          Upcoming Events
        </h1>
        <br />
        <Message
          style={{
            display: this.state.display
          }}
          onDismiss={this.handleDismiss}
          warning
          icon="warning"
          header="Disclaimer"
          content={messageContent}
        />
        <br />
        <br />

        {sortAndStyleEvents(this.props.eventSummaries)}
      </Layout>
    );
  }
}

export default Index;

const messageContent =
  "Please note that events hosted on baldy are not associated with any real events. Further, tickets purchased from Baldy do not have any monetary value and can not be used to gain access to any events.";
