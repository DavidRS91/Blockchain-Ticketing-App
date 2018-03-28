import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { Link } from "../../routes.js";
import generator from "../../ethereum/generator";
import Layout from "../../components/Layout";
import Event from "../../ethereum/event";
import { web3, web3Found } from "../../ethereum/web3";

class UserIndex extends Component {
  static async getInitialProps() {
    const accounts = await web3.eth.getAccounts();
    const eventList = await generator.methods.getDeployedEvents().call();
    let userEvents;
    for (let i = 0; i < eventList.length; i += 1) {
      console.log(eventList[i]);
      console.log(accounts[0]);
      console.log(i);
    }

    return { eventList };
    // const userEvents = eventList.map(event => {
    //   await Event(event).methods.getSummary().call();
    // });
  }

  renderEvents() {
    const items = this.props.eventList.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/events/${address}`}>
            <a style={{ color: "#329f5b" }}> View Event</a>
          </Link>
        ),
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h1>Open Events</h1>
        <h2>{process.browser ? "true" : "false"}</h2>
        {this.renderEvents()}
      </Layout>
    );
  }
}

export default UserIndex;
