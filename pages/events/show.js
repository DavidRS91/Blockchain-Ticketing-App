import React, { Component } from "react";
import { Segment, Image, Button, Icon, Container } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../components/Layout";
import Event from "../../ethereum/event";
import MapContainer from "../../components/MapContainer";
const { GOOGLE_API_KEY } = require("../../config");

import {
  GoogleMap,
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper
} from "google-maps-react";

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

  initMap() {
    var uluru = { lat: -25.363, lng: 131.044 };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru
    });
    console.log("run");
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  render() {
    const { props } = this;
    return (
      <Layout>
        {/* <div style={{ width: "100%", height: "400px" }}>
          <h3>My Google Maps Demo</h3>
          <div id="map" />
          {this.initMap()}
          <script
            async
            defer
            src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initMap`}
          />
        </div> */}
        {process.browser ? (
          <MapContainer style={{ padding: "15px" }} />
        ) : (
          <div style={{ width: "100%", height: "500px" }}>Map Loading...</div>
        )}
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
                <Icon name="calendar outline" />April 6, 2018
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Layout>
    );
  }
}

export default EventShow;
