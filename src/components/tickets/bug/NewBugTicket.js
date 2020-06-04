import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createBug } from "../../../actions";

import Form from "react-bootstrap/Form";
import { BodyContainer } from "../../../StyledComponents/BodyContainer";
import { BugFields } from "../form/FormFields";
import { SubmitTicketButtons } from "../form/FormButtons";
import { validate } from "../form/validate";

class NewBugTicket extends Component {
  onSubmit = (formValues) => {
    this.props.createBug(formValues);
  };

  render() {
    return (
      <BodyContainer className="mt-4">
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="mb-3">
            <h3>New Bug Ticket</h3>
          </div>
          <BugFields />
          <SubmitTicketButtons />
        </Form>
      </BodyContainer>
    );
  }
}

const formWrapped = reduxForm({
  form: "newBugTicket",
  validate,
})(NewBugTicket);

export default connect(null, { createBug })(formWrapped);
