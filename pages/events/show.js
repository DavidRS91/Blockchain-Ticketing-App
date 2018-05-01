import React, { Component } from "react";
import { Segment, Image, Button, Icon, Container } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../components/Layout";
import Event from "../../ethereum/event";
import MapContainer from "../../components/MapContainer";
const { GOOGLE_API_KEY } = require("../../config");
import { Geocoder } from "../../lib/geocodingRequests";

class EventShow extends Component {
  static async getInitialProps(props) {
    const event = Event(props.query.address);
    const summary = await event.methods.getSummary().call();
    const coordinates = await Geocoder.toLatLong(
      summary[4],
      summary[5].split(", ").length > 1
        ? summary[5].split(", ")[0]
        : summary[5],
      summary[5].split(", ").length > 1 ? summary[5].split(", ")[1] : ""
    );
    return {
      address: event.options.address,
      price: summary[0],
      capacity: summary[1],
      desc: summary[2],
      date: summary[3],
      location: summary[4],
      city: summary[5],
      title: summary[6],
      manager: summary[7],
      ticketsSold: summary[8],
      coordinates: coordinates.results[0].geometry.location
    };
  }

  render() {
    const { props } = this;
    return (
      <Layout>
        <Segment.Group>
          <Segment style={{ height: "500px", padding: "0px" }}>
            {" "}
            {process.browser ? (
              <MapContainer
                lat={props.coordinates.lat}
                lng={props.coordinates.lng}
              />
            ) : (
              <div
                style={{ width: "100%", height: "500px", textAlign: "center" }}
              >
                Map Loading...
              </div>
            )}
          </Segment>
          <Segment
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <h2 style={{ alignSelf: "center", margin: 0 }}>{props.title}</h2>
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
            <span style={{ padding: "0px 30px" }}>
              <h3>
                <Icon name="calendar outline" />
                {props.date}
              </h3>
            </span>
            <span style={{ padding: "0px 30px" }}>
              <h3>
                <Icon name="marker" />
                {`${props.location}, ${props.city}`}
              </h3>
            </span>
            <span style={{ padding: "0px 30px" }}>
              <h3>
                <Icon name="users" />
                {props.ticketsSold} Attendees
              </h3>
            </span>
          </Segment>
          <Segment padded>
            {props.desc.split("\n").map(function(item) {
              return (
                <span>
                  {item}
                  <br />
                </span>
              );
            })}
          </Segment>
          <Segment>
            <small>Manager: {props.manager}</small>
          </Segment>
        </Segment.Group>
      </Layout>
    );
  }
}

export default EventShow;
