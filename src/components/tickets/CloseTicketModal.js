import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchTicket, closeTicket } from "../../actions";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function CloseTicketModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onCloseTicket = (ticket) => {
    ticket.isClosed = true;
    props.closeTicket(props.ticket.id, ticket);
    handleClose();
  };

  return (
    <>
      <Button className="primaryButton" variant="primary" onClick={handleShow}>
        Close Ticket
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Close Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>
            Are you sure you want to close the ticket "{props.ticket.title}"?
          </h5>
          <p className="text-danger">* Note: This cannot be undone.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="primaryButton" onClick={onCloseTicket}>
            Close Ticket
          </Button>
          <Button className="secondaryButton" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { ticket: state.tickets[ownProps.id] };
};

export default connect(mapStateToProps, { fetchTicket, closeTicket })(
  CloseTicketModal
);
