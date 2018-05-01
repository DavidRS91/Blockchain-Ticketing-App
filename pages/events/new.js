import React, { Component } from "react";
import Layout from "../../components/Layout";
import NewEventForm from "../../components/NewEventForm";
import { Dimmer, Loader } from "semantic-ui-react";
import { Converter } from "../../lib/requests";

class EventNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  static async getInitialProps() {
    const exchangeRates = await Converter.etherToCAD();
    return {
      exchangeRates
    };
  }
  render() {
    return (
      <Layout>
        <Dimmer active={this.state.loading}>
          <Loader size="massive">Creating Event</Loader>
        </Dimmer>
        <h1 style={{ textAlign: "center" }}>Create an Event</h1>
        <NewEventForm exchangeRates={this.props.exchangeRates} />
      </Layout>
    );
  }
}

export default EventNew;
