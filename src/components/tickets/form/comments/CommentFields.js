import React from "react";
import { Field } from "redux-form";

import { TextArea } from "../Inputs";

export const CommentFields = () => {
  return (
    <Field
      name="comment"
      placeholder="Leave a comment if you can help resolve the issue"
      component={TextArea}
    />
  );
};
