import React from "react";
import { Field } from "redux-form";

import { TextInput, TextArea } from "./Inputs";

export const BugFields = () => {
  return (
    <>
      <Field
        name="title"
        component={TextInput}
        placeholder="Enter a title"
        type="text"
        label="Ticket Title"
      />
      <Field
        name="description"
        component={TextArea}
        placeholder="Please provide as much detail as possible"
        label="Describe the bug"
        type="text"
      />
      <Field
        name="environment"
        type="TextArea"
        component={TextArea}
        placeholder="Tell us about your production environment"
        label="Environment"
      />
      <Field
        name="reproduce"
        type="TextArea"
        component={TextArea}
        placeholder="List the steps you take to produce the error"
        label="Steps to reproduce"
      />
    </>
  );
};

export const QuestionFields = () => {
  return (
    <>
      <Field
        type="text"
        name="title"
        placeholder="Title"
        label="Enter Title"
        component={TextInput}
      />
      <Field
        name="description"
        placeholder="We encourage you to check the forums before submitting a question to see
                      if anyone else has had the same question as you"
        label="Ask your question here"
        component={TextArea}
      />
    </>
  );
};

export const ProposalFields = () => {
  return (
    <>
      <Field
        type="text"
        name="title"
        placeholder="Title"
        label="Title"
        component={TextInput}
      />

      <Field
        name="description"
        placeholder="Tell us how this came about"
        label="Is your proposal related to a problem?"
        component={TextArea}
      />

      <Field
        name="solution"
        placeholder="Describe your solution here"
        label="Describe the solution you'd like"
        component={TextArea}
      />

      <Field
        name="alternatives"
        placeholder="Have you considered any alternative solutions?"
        label="Describe alternatives you've considered"
        component={TextArea}
      />
    </>
  );
};
