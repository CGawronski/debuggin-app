import React, { Component } from "react";
import { reduxForm } from "redux-form";

import Form from "react-bootstrap/Form";
import { BodyContainer } from "../../../StyledComponents/BodyContainer";
import { ProposalFields } from "../form/FormFields";
import { SubmitTicketButtons } from "../form/FormButtons";
import { validate } from "../form/validate";

class NewProposalTicket extends Component {
  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    return (
      <BodyContainer className="mt-4">
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="mb-3">
            <h3>New Proposal Ticket</h3>
          </div>
          <ProposalFields />
          <SubmitTicketButtons />
        </Form>
      </BodyContainer>
    );
  }
}

export default reduxForm({
  form: "newProposalTicket",
  validate,
})(NewProposalTicket);
