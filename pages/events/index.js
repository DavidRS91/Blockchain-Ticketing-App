import React, { Component } from "react";
import generator from "../../ethereum/generator";
import Layout from "../../components/Layout";

class EventsIndex extends Component {
  static async getInitialProps() {
    const eventList = await generator.methods.getDeployedEvents().call();
    return { eventList }; //provided to our component as props
  }

  render() {
    return (
      <Layout>
        <h1>{this.props.eventList[0]}</h1>
      </Layout>
    );
  }
}

export default EventsIndex;
