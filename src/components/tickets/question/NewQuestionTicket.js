import React, { Component } from "react";
import { reduxForm } from "redux-form";

import Form from "react-bootstrap/Form";
import { BodyContainer } from "../../../StyledComponents/BodyContainer";
import { QuestionFields } from "../form/FormFields";
import { SubmitTicketButtons } from "../form/FormButtons";
import { validate } from "../form/validate";

class NewQuestionTicket extends Component {
  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    return (
      <BodyContainer className="mt-4">
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="mb-3">
            <h3>New Question Ticket</h3>
          </div>
          <QuestionFields />
          <SubmitTicketButtons />
        </Form>
      </BodyContainer>
    );
  }
}

export default reduxForm({
  form: "newQuestionTicket",
  validate,
})(NewQuestionTicket);
