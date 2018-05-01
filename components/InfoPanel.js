import React, { Component } from "react";
import { Segment, Accordion, Icon } from "semantic-ui-react";

class InfoPanel extends Component {
  state = { activeIndex: -1 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
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
            <div>{this.props.description}</div>
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  }
}

export default InfoPanel;
