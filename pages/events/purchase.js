import React, { Component } from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import Layout from "../../components/Layout";
import PurchaseForm from "../../components/PurchaseForm";
import PurchaseModal from "../../components/PurchaseModal";
import Event from "../../ethereum/event";
import { Converter } from "../../lib/requests";

class EventPurchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      errorMessage: "",
      loading: false,
      confirmationModal: false
    };
    this.handleLoading = this.handleLoading.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  handleLoading(isLoading, err = "") {
    this.setState({
      loading: isLoading,
      errorMessage: err
    });
  }

  handleModal(showModal) {
    this.setState({
      confirmationModal: showModal
    });
  }

  handleQuantity(quantity) {
    this.setState({
      quantity: quantity
    });
  }

  static async getInitialProps(props) {
    const eventInstance = Event(props.query.address);
    const summary = await eventInstance.methods.getSummary().call();
    const exchangeRate = await Converter.etherToCAD();
    return {
      address: props.query.address,
      price: summary[0],
      title: summary[6],
      exchangeRates: exchangeRate
    };
  }

  render() {
    const { price, title, address } = this.props;
    const { confirmationModal, quantity, loading, errorMessage } = this.state;
    return (
      <Layout>
        <h1 style={{ textAlign: "center", fontSize: "50px" }}>
          Purchase Tickets to {title}
        </h1>
        <PurchaseForm
          price={price}
          title={title}
          address={address}
          handleModal={this.handleModal}
          handleLoading={this.handleLoading}
          handleQuantity={this.handleQuantity}
        />
        <PurchaseModal
          confirmationModal={confirmationModal}
          quantity={quantity}
          title={title}
        />
        <Dimmer active={loading}>
          <Loader size="massive">Processing Transaction</Loader>
        </Dimmer>
      </Layout>
    );
  }
}

export default EventPurchase;
