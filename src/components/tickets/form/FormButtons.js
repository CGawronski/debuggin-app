import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

export const SubmitTicketButtons = () => {
  return (
    <>
      <Button className="mr-2 primaryButton" type="submit">
        Submit
      </Button>{" "}
      <Button as={Link} to={"/"} className="secondaryButton">
        Cancel
      </Button>
    </>
  );
};
