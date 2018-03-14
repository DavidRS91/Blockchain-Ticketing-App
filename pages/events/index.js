import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { Link } from "../../routes.js";
import generator from "../../ethereum/generator";
import Layout from "../../components/Layout";

class Index extends Component {
  static async getInitialProps() {
    const eventList = await generator.methods.getDeployedEvents().call();
    return { eventList }; //provided to our component as props
  }

  renderEvents() {
    const items = this.props.eventList.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/events/${address}`}>
            <a style={{ color: "#329f5b" }}> View Event</a>
          </Link>
        ),
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h1>Open Events</h1>
        {this.renderEvents()}
      </Layout>
    );
  }
}

export default Index;

// class CampaignIndex extends Component {
//   static async getInitialProps() {
//     const campaigns = await factory.methods.getDeployedCampaigns().call();
//
//     return { campaigns }; // samse as{campaigns: campaigns}
//   }
//
//   renderCampaigns() {
//     const items = this.props.campaigns.map(address => {
//       return {
//         header: address,
//         description: (
//           <Link route={`/campaigns/${address}`}>
//             <a>View Campaign</a>
//           </Link>
//         ),
//         fluid: true
//       };
//     });
//
//     return <Card.Group items={items} />;
//   }
//
//   render() {
//     return (
//       <Layout>
//         <div>
//           <h3>Open Campaigns</h3>
//
//           <Link route="/campaigns/new">
//             <a>
//               <Button
//                 floated="right"
//                 content="Create Campaign"
//                 icon="add circle"
//                 primary //same as primary={true}
//               />
//             </a>
//           </Link>
//           {this.renderCampaigns()}
//         </div>
//       </Layout>
//     );
//   }
// }
