import React, { Component } from "react";
import { Modal, Button } from "semantic-ui-react";
import { Link } from "../routes";

class PurchaseModal extends Component {
  render() {
    const { confirmationModal, quantity, title } = this.props;
    return (
      <Modal open={confirmationModal}>
        <Modal.Header>Purchase Complete!</Modal.Header>
        <Modal.Description style={{ padding: "15px" }}>
          <p style={{ fontSize: "16px" }}>
            You have successfully purchased {quantity} ticket{quantity === "1"
              ? ""
              : "s"}{" "}
            to {title}{" "}
          </p>
          <Link route={`/events`}>
            <Button>Back to Events</Button>
          </Link>
        </Modal.Description>
      </Modal>
    );
  }
}

export default PurchaseModal;
