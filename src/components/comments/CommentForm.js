import React, { Component } from "react";
import { reduxForm, reset } from "redux-form";

import Form from "react-bootstrap/Form";

import { CommentContainer } from "../../StyledComponents/CommentContainer";
import { CommentButtons } from "./CommentButtons";
import { validate } from "../tickets/form/validate";

class CommentForm extends Component {
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <CommentContainer>
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <h4>{this.props.header}</h4>
          {this.props.formFields()}
          <CommentButtons />
        </Form>
      </CommentContainer>
    );
  }
}

const afterSubmit = (dispatch) => dispatch(reset("commentForm"));

export default reduxForm({
  form: "commentForm",
  onSubmitSuccess: afterSubmit,
  validate,
})(CommentForm);
