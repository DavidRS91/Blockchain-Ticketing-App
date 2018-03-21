import React, { Component } from "react";
import { Segment, Image, Button, Icon } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../components/Layout";
import Event from "../../ethereum/event";

class EventShow extends Component {
  static async getInitialProps(props) {
    const event = Event(props.query.address);
    const summary = await event.methods.getSummary().call();
    return {
      address: event.options.address,
      price: summary[0],
      capacity: summary[1],
      manager: summary[2],
      isOpen: summary[3],
      ticketsSold: summary[4]
    };
  }

  render() {
    const { props } = this;
    return (
      <Layout>
        <Image
          fluid
          src="https://www.newstatesman.com/sites/default/files/styles/nodeimage/public/blogs_2016/10/untitled_design_21_.png"
          size="Massive"
          rounded
          bordered
          centered
          wrapped
          padded="false"
        />
        <Segment.Group>
          <Segment
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <h2 style={{ alignSelf: "center", margin: 0 }}>Event Title</h2>
            <Link route={`/events/${props.address}/purchase`}>
              <Button
                icon
                labelPosition="left"
                style={{
                  alignSelf: "center",
                  backgroundColor: "#329f5b",
                  color: "white"
                }}
              >
                <Icon name="ticket" />
                Purchase Tickets!
              </Button>
            </Link>
          </Segment>
          <Segment
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <span style={{ padding: "0px 30px 0px 0px" }}>
              <h3>
                <Icon name="user" /> CodeCore
              </h3>
            </span>
            <span style={{ padding: "0px 30px" }}>
              <h3>
                <Icon name="calendar outline " />April 6, 2018
              </h3>
            </span>
            <span style={{ padding: "0px 30px" }}>
              <h3>
                <Icon name="marker" />142 W Hastings
              </h3>
            </span>
            <span style={{ padding: "0px 0px 0px 30px" }}>
              <h3>
                <Icon name="ticket" />
                {props.capacity - props.ticketsSold}
              </h3>
            </span>
          </Segment>
          <Segment padded>This is a sample event description</Segment>
          <Segment>
            <small>Manager: {props.manager}</small>
          </Segment>
        </Segment.Group>
      </Layout>
    );
  }
}

export default EventShow;
