import React, { Component } from "react";
import { reduxForm } from "redux-form";

import Form from "react-bootstrap/Form";
import { BodyContainer } from "../../../StyledComponents/BodyContainer";
import { BugFields } from "../form/FormFields";
import { SubmitTicketButtons } from "../form/FormButtons";
import { validate } from "../form/validate";

class TicketForm extends Component {
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <BodyContainer className="mt-4">
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="mb-3">
            <h3>{this.props.header}</h3>
          </div>
          {this.props.formFields()}
          <SubmitTicketButtons />
        </Form>
      </BodyContainer>
    );
  }
}

export default reduxForm({
  form: "ticketForm",
  validate,
})(TicketForm);
