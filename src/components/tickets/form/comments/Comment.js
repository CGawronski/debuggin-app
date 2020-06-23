import React, { Component } from "react";
import { connect } from "react-redux";

import CommentForm from "./CommentForm";
import { CommentFields } from "./CommentFields";
import { createComment } from "../../../../actions";

function Comment(props) {
  // this.props.ticketId for the ticket the comment belongs to
  const ticketId = props.ticketId;

  const onSubmit = (formValues) => {
    props.createComment(formValues, ticketId);
  };

  return (
    <CommentForm
      header="Comment"
      formFields={CommentFields}
      onSubmit={onSubmit}
    />
  );
}

export default connect(null, { createComment })(Comment);
