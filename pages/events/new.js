import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import { Link, Router } from "../../routes";
import generator from "../../ethereum/generator";
import { web3, web3Found } from "../../ethereum/web3";
import { Converter } from "../../lib/requests";

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
      loading: false
    };
  }

  static async getInitialProps() {
    const exchangeRates = await Converter.etherToCAD();
    return {
      exchangeRates
    };
  }

  onSubmit = async event => {
    try {
      console.log("tried");
      const accounts = await web3.eth.getAccounts();
      await generator.methods
        .createEvent(this.state.price, this.state.capacity)
        .send({
          from: accounts[0]
        });

      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h2 style={{ textAlign: "center" }}>Create a New Event</h2>

        <Form onSubmit={this.onSubmit}>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Price</label>
              <Input
                label="wei"
                value={this.state.price}
                onChange={event => this.setState({ price: event.target.value })}
                labelPosition="right"
                id="price"
                placeholder="eg 150"
              />
            </Form.Field>
            <div>
              <div style={{ height: "23px" }} />
              <a
                id="anchorID"
                href="https://currencio.co/cad/eth/"
                target="_blank"
                style={{
                  height: "38px",
                  display: "flex",
                  alignItems: "flex-stretch"
                }}
              >
                <Button
                  basic
                  type="button"
                  style={{
                    padding: "7px 10px",
                    fontSize: "12px"
                  }}
                >
                  ETH:CAD Converter
                </Button>
              </a>
            </div>

            <Form.Field>
              <label>Capacity</label>
              <Input
                label="tickets"
                value={this.state.capacity}
                onChange={event =>
                  this.setState({ capacity: event.target.value })
                }
                id="capacity"
                labelPosition="right"
                placeholder="eg 150"
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              value={this.state.date}
              onChange={event => this.setState({ date: event.target.value })}
              id="date"
              control={Input}
              label="Event Date"
              placeholder="April 6, 2018"
            />
            <Form.Field
              id="location"
              value={this.state.location}
              onChange={event =>
                this.setState({ location: event.target.value })
              }
              control={Input}
              label="Location"
              placeholder="eg 142 West Hastings Street"
            />
          </Form.Group>
          <Form.Field
            id="description"
            value={this.state.description}
            onChange={event =>
              this.setState({ description: event.target.value })
            }
            control={TextArea}
            label="Event description"
            placeholder="Tell prospective attendees a little bit about your event"
          />
          <Form.Field
            id="imageUrl"
            value={this.state.imageUrl}
            onChange={event => this.setState({ imageUrl: event.target.value })}
            control={Input}
            label="Image URL (Optional)"
            placeholder="Enter the link of an image you would like to use"
          />
          <Form.Field id="submit" control={Button} content="Create Event" />
        </Form>
      </Layout>
    );
  }
}

export default EventNew;
