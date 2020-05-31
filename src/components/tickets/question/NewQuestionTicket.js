import React, { Component } from "react";
import { reduxForm } from "redux-form";

import Form from "react-bootstrap/Form";
import { BodyContainer } from "../../../StyledComponents/BodyContainer";
import { QuestionFields } from "../forms/FormFields";
import { FormButtons } from "../forms/FormButtons";

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
          <FormButtons />
        </Form>
      </BodyContainer>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "* You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "* You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "newQuestionTicket",
  validate,
})(NewQuestionTicket);
