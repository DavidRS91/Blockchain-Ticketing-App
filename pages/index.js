import React, { Component } from "react";
import generator from "../ethereum/generator";

class EventIndex extends Component {
  async componentDidMount() {
    const eventList = await generator.methods.getDeployedEvents().call();

    console.log(eventList);
  }

  render() {
    return <h1>Welcome to Baldy!</h1>;
  }
}

export default EventIndex;
