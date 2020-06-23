import React, { Component } from "react";
import { connect } from "react-redux";

import CommentForm from "./CommentForm";
import { CommentFields } from "./CommentFields";

class Comment extends Component {
  onSubmit = (formValues) => {
    console.log("Submitted comment");
  };

  render() {
    return (
      <CommentForm
        header="Comment"
        formFields={CommentFields}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default connect(null, {})(Comment);
