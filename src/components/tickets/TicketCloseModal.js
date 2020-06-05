import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function TicketModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Close Ticket
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure you want to close this ticket?</h4>
        <p>This cannot be undone.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="primaryButton" onClick={props.onHide}>
          Close Ticket
        </Button>
        <Button className="secondaryButton" onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const ModalButton = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="primaryButton" onClick={() => setModalShow(true)}>
        Close Ticket
      </Button>

      <TicketModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ModalButton;
