import React from "react";

import TicketModal from "./CloseTicketModal";
import Button from "react-bootstrap/Button";

const TicketClose = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button onClick={() => setModalShow(true)} className="primaryButton">
        Close Ticket
      </Button>

      <TicketModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default TicketClose;
