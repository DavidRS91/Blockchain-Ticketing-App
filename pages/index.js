import React, { Component } from "react";
import generator from "../ethereum/generator";

class EventIndex extends Component {
  static async getInitialProps() {
    const eventList = await generator.methods.getDeployedEvents().call();
    return { eventList }; //provided to our component as props
  }

  render() {
    return <h1>{this.props.eventList[0]}</h1>;
  }
}

export default EventIndex;
