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
    const { CAD, USD } = this.props.exchangeRates;
    const { price, capacity, description, location, date } = this.state;
    return (
      <Layout>
        <h2 style={{ textAlign: "center" }}>Create a New Event</h2>

        <Form onSubmit={this.onSubmit}>
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
            {/* <div>
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
            </div> */}

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
                backgroundColor: "rgba(190,190,190,0.2)",
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
                ) / 100}
              </p>{" "}
              <p
                style={{
                  marginLeft: "20px",
                  fontStyle: "italic",
                  fontSize: "12px"
                }}
              >
                • Current value in USD: $
                {Math.round(parseFloat(price, 10) * USD * 100) / 100}
              </p>
            </div>
          ) : (
            ""
          )}
          <Form.Group widths="equal">
            <Form.Field
              value={date}
              onChange={event => this.setState({ date: event.target.value })}
              id="date"
              control={Input}
              label="Event Date"
              placeholder="April 6, 2018"
            />
            <Form.Field
              id="location"
              value={location}
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
