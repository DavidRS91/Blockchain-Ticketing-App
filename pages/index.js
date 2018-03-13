import React, { Component } from "react";
import generator from "../ethereum/generator";
import Layout from "../components/Layout";

class Index extends Component {
  static async getInitialProps() {
    const eventList = await generator.methods.getDeployedEvents().call();
    return { eventList }; //provided to our component as props
  }

  render() {
    return (
      <Layout>
        <h1>Welcome to Baldy!</h1>
      </Layout>
    );
  }
}

export default Index;
