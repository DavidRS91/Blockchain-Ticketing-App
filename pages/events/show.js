import React, { Component } from "react";
import Event from "../../ethereum/event";

class EventShow extends Component {
  // static async getInitialProps(props) {
  //   const event = Event(props.query.address);
  //   const summary = await campaign.methods.getSummary().call();
  // }

  render() {
    console.log(this.props.url.query.address);
    return <h2>Event: {this.props.url.query.address}</h2>;
  }
}

export default EventShow;
