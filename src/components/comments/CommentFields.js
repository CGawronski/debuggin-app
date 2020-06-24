import React from "react";
import { Field } from "redux-form";

import { TextArea, InputName } from "../tickets/form/Inputs";

export const CommentFields = () => {
  return (
    <>
      <Field
        name="name"
        placeholder="Please enter your name"
        component={InputName}
        label="Name"
      />
      <Field
        name="comment"
        placeholder="Leave a comment if you can help resolve the issue"
        component={TextArea}
      />
    </>
  );
};
