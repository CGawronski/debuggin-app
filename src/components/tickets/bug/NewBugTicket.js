import React, { Component } from "react";
import { reduxForm } from "redux-form";
import Form from "react-bootstrap/Form";
import { BodyContainer } from "../../../StyledComponents/BodyContainer";

import { BugFields } from "../forms/FormFields";
import { Buttons } from "../forms/Buttons";

class NewBugTicket extends Component {
  render() {
    return (
      <BodyContainer className="mt-4">
        <div className="mb-3">
          <h3>New Bug Ticket</h3>
        </div>
        <Form>
          <BugFields />
        </Form>
        <Buttons />
      </BodyContainer>
    );
  }
}

export default reduxForm({
  form: "newBugTicket",
})(NewBugTicket);
