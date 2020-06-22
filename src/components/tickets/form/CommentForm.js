import React, { Component } from "react";
import { reduxForm } from "redux-form";

import Form from "react-bootstrap/Form";
import { CommentContainer } from "../../../StyledComponents/CommentContainer";
import { SubmitTicketButtons } from "../form/FormButtons";
import { validate } from "../form/validate";

class TicketForm extends Component {
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <CommentContainer className="mt-4">
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <h4>{this.props.header}</h4>
          {this.props.formFields()}
          <SubmitTicketButtons />
        </Form>
      </CommentContainer>
    );
  }
}

export default reduxForm({
  form: "ticketForm",
  validate,
})(TicketForm);
