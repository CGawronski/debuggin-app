import React, { Component } from "react";
import { connect } from "react-redux";

import CommentForm from "./CommentForm";
import { CommentField } from "./FormFields";

class Comment extends Component {
  onSubmit = (formValues) => {
    console.log("Submitted comment");
  };

  render() {
    return (
      <CommentForm
        header="Add a comment"
        formFields={CommentField}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default connect(null, {})(Comment);
