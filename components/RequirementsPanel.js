import React, { Component } from "react";
import { Segment, Accordion, Icon, Grid, Button } from "semantic-ui-react";
import web3, { web3Found, web3Account } from "../ethereum/web3";
import Descriptions from "./panelContents/panelDescriptions";

class RequirementsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      mestamask: "",
      activeIndex: -1
    };
  }

  componentDidMount() {
    web3Account.then(acct => {
      this.setState({
        account: acct,
        metamask: web3Found
      });
    });
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex, account, metamask } = this.state;
    return (
      <Segment>
        <Accordion>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
            style={{ color: "#329f5b" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <Icon name="dropdown" size="large" />
              <h4 style={{ margin: "0px" }}>{this.props.title}</h4>
            </div>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
              Below is a list of requirements to use Baldy. If you see an X next
              to a requirement, consult the panels below for instructions to
              meet the requirement.
            </p>

            <Grid celled>
              <Grid.Row>
                <Grid.Column width={14}>1. Install Metamask</Grid.Column>
                <Grid.Column width={2} textAlign="center">
                  {metamask ? (
                    <Icon name="checkmark" color="green" size="large" />
                  ) : (
                    <Icon name="remove" color="red" size="large" />
                  )}
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={14}>2. Login to Metamask</Grid.Column>
                <Grid.Column width={2} textAlign="center">
                  {account !== undefined ? (
                    <Icon name="checkmark" color="green" size="large" />
                  ) : (
                    <Icon name="remove" color="red" size="large" />
                  )}
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={14}>
                  3. Select Rinkeby Test Network
                </Grid.Column>
                <Grid.Column width={2} textAlign="center">
                  {this.props.network === 4 ? (
                    <Icon name="checkmark" color="green" size="large" />
                  ) : (
                    <Icon name="remove" color="red" size="large" />
                  )}
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <p>
              <strong>Note: </strong>You need to refresh the page after signing
              into Metamask or changing networks.
            </p>
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  }
}

export default RequirementsPanel;
