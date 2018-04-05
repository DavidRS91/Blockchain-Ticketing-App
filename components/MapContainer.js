import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
const { GOOGLE_API_KEY } = require("../config");

const style = {
  width: "100%",
  height: "100%"
};
export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={style}
        initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
      >
        <Marker position={{ lat: this.props.lat, lng: this.props.lng }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(MapContainer);
