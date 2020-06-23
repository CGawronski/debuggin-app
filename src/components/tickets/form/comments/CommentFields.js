import React from "react";
import { Field } from "redux-form";

import { TextArea } from "../Inputs";
import { InputName } from "../Inputs";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

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
