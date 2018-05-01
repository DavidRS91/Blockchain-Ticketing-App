import react, { Component } from "react";
import { Segment } from "semantic-ui-react";
import RequirementsPanel from "./RequirementsPanel";
import InfoPanel from "./InfoPanel";
import {
  signInDescription,
  lockedDescription,
  getEtherDescription,
  rinkebyDescription,
  installDescription,
  metamaskDescription
} from "./panelContents/panelDescriptions";

class HelpPanels extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Segment.Group style={{ width: "100%" }}>
          <RequirementsPanel
            network={this.props.network}
            title="What do I need to get started?"
          />
          <InfoPanel
            title="What is Metamask?"
            description={metamaskDescription}
          />
          <InfoPanel
            title="Installing Metamask"
            description={installDescription}
          />
          <InfoPanel
            title="Signing in to Metamask"
            description={signInDescription}
          />
          <InfoPanel
            title="Why is Metamask locked?"
            description={lockedDescription}
          />
          <InfoPanel
            title="Selecting the Rinkeby Test Network"
            description={rinkebyDescription}
          />
          <InfoPanel
            title="How do I get Ether?"
            description={getEtherDescription}
          />
        </Segment.Group>
      </div>
    );
  }
}

export default HelpPanels;
