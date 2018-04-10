import React, { Component } from "react";
import Layout from "../../components/Layout";
import {
  Form,
  Input,
  TextArea,
  Button,
  Select,
  Dimmer,
  Loader
} from "semantic-ui-react";
import { Link, Router } from "../../routes";
import generator from "../../ethereum/generator";
import web3 from "../../ethereum/web3";
import { Converter } from "../../lib/requests";
import { Geocoder } from "../../lib/geocodingRequests";

const provinces = [
  { key: "AB", text: "AB", value: "AB" },
  { key: "BC", text: "BC", value: "BC" },
  { key: "MB", text: "MB", value: "MB" },
  { key: "NB", text: "NB", value: "NB" },
  { key: "NL", text: "NL", value: "NL" },
  { key: "NT", text: "NT", value: "NT" },
  { key: "NS", text: "NS", value: "NS" },
  { key: "NU", text: "NU", value: "NU" },
  { key: "ON", text: "ON", value: "ON" },
  { key: "PE", text: "PE", value: "PE" },
  { key: "QC", text: "QC", value: "QC" },
  { key: "SK", text: "SK", value: "SK" },
  { key: "YT", text: "YT", value: "YT" }
];

class EventNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capacity: "",
      date: "",
      description: "",
      imageUrl: "",
      location: "",
      price: "",
      street: "",
      loading: false,
      city: "",
      province: "",
      title: "",
      type: ""
    };
  }

  static async getInitialProps() {
    const exchangeRates = await Converter.etherToCAD();
    return {
      exchangeRates
    };
  }

  onSubmit = async event => {
    const {
      price,
      capacity,
      description,
      date,
      street,
      city,
      province,
      title
    } = this.state;

    try {
      this.setState({
        loading: true
      });
      console.log("tried");
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      await generator.methods
        .createEvent(
          web3.utils.toWei(price, "ether"),
          capacity,
          description,
          date,
          street,
          `${city}, ${province}`,
          title
        )
        .send({
          from: accounts[0]
        });
      Router.pushRoute("/");
    } catch (err) {
      console.log(err.message);
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    const { CAD, USD } = this.props.exchangeRates;
    const {
      price,
      capacity,
      description,
      location,
      date,
      street,
      city,
      province,
      title,
      type
    } = this.state;
    return (
      <Layout>
        <Dimmer active={this.state.loading}>
          <Loader size="massive">Creating Event</Loader>
        </Dimmer>
        <h1 style={{ textAlign: "center" }}>Create an Event</h1>

        <Form onSubmit={this.onSubmit}>
          <Form.Field
            id="title"
            value={title}
            onChange={event => this.setState({ title: event.target.value })}
            control={Input}
            label="Title"
            placeholder="eg CodeCore Demo Day"
          />
          <Form.Group widths="equal">
            <Form.Field>
              <label>Price</label>
              <Input
                label="Ether"
                value={price}
                onChange={event => this.setState({ price: event.target.value })}
                labelPosition="right"
                id="price"
                placeholder="eg 150"
              />
            </Form.Field>

            <Form.Field>
              <label>Capacity</label>
              <Input
                label="tickets"
                value={capacity}
                onChange={event =>
                  this.setState({ capacity: event.target.value })
                }
                id="capacity"
                labelPosition="right"
                placeholder="eg 150"
              />
            </Form.Field>
          </Form.Group>

          {!!parseFloat(price, 10) ? (
            <div
              style={{
                width: "50%",
                padding: "3px",
                borderRadius: "5px"
              }}
            >
              <p
                style={{
                  marginLeft: "20px",
                  marginBottom: "3px",
                  fontStyle: "italic",
                  fontSize: "12px"
                }}
              >
                • Current value in CAD: ${Math.round(
                  parseFloat(price, 10) * CAD * 100
                ) / 100}{" "}
                (ETH:CAD = {CAD})
              </p>{" "}
              <p
                style={{
                  marginLeft: "20px",
                  fontStyle: "italic",
                  fontSize: "12px"
                }}
              >
                • Current value in USD: $
                {Math.round(parseFloat(price, 10) * USD * 100) / 100} (ETH:USD ={" "}
                {USD})
              </p>
            </div>
          ) : (
            ""
          )}

          <Form.Field
            id="street"
            value={street}
            onChange={event => this.setState({ street: event.target.value })}
            control={Input}
            label="Street Address"
            placeholder="eg 142 West Hastings Street"
          />
          <Form.Group widths="equal">
            <Form.Field
              id="city"
              value={city}
              onChange={event => this.setState({ city: event.target.value })}
              control={Input}
              label="City"
              placeholder="eg Vancouver"
            />

            <Form.Field
              control={Select}
              label="Province"
              options={provinces}
              placeholder="Select from dropdown"
              onChange={(event, data) => {
                this.setState({ province: data.value });
              }}
            />

            <Form.Field
              value={date}
              onChange={event => this.setState({ date: event.target.value })}
              id="date"
              control={Input}
              label="Event Date"
              placeholder="April 5, 2018"
            />
          </Form.Group>

          <Form.Field
            id="description"
            value={description}
            onChange={event =>
              this.setState({ description: event.target.value })
            }
            control={TextArea}
            label="Event description"
            placeholder="Tell prospective attendees a little bit about your event"
          />

          <Form.Field id="submit" control={Button} content="Create Event" />
        </Form>
      </Layout>
    );
  }
}

export default EventNew;
