import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createBug } from "../../../actions";

import Form from "react-bootstrap/Form";
import { BodyContainer } from "../../../StyledComponents/BodyContainer";
import { BugFields } from "../forms/FormFields";
import { FormButtons } from "../forms/FormButtons";

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

  if (!formValues.environment) {
    errors.environment = "* Please tell us about your environment";
  }

  if (!formValues.reproduce) {
    errors.reproduce = "* Please list the steps necessary to reproduce the bug";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "newBugTicket",
  validate,
})(NewBugTicket);

export default connect(null, { createBug })(formWrapped);
