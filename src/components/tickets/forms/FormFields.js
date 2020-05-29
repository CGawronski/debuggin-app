import React from "react";
import { Field } from "redux-form";

import Button from "react-bootstrap/Button";
import { TextInput, textArea } from "./Inputs";

// NEED TO CREATE "edit-question" AND "edit-proposal" COMPONENTS AND ADD ROUTES FOR THEM

export const BugFields = () => {
  return (
    <>
      <Field
        name="title"
        component={TextInput}
        placeholder="Enter a title"
        type="text"
        htmlFor="title"
        label="Ticket Title"
      />
      <Field
        name="description"
        component={textArea}
        placeholder="Please provide as much detail as possible"
        htmlFor="description"
        label="Describe the bug"
        type="textarea"
      />
      <Field
        name="environment"
        type="textarea"
        component={textArea}
        placeholder="Tell us about your production environment"
        htmlFor="environment"
        label="Environment"
      />
      <Field
        name="reproduce"
        type="textarea"
        component={textArea}
        placeholder="List the steps you take to produce the error"
        htmlFor="reproduce"
        label="Steps to reproduce"
      />
    </>
  );
};

// export const QuestionFields = () => {
//   return (
//     <>
//       <Field
//         type="text"
//         name="title"
//         placeholder="Title"
//         htmlFor="title"
//         label="Enter Title"
//         component={renderStyledInput}
//       />
//       <Field
//         htmlFor="Ask your question here"
//         name="description"
//         placeholder="We encourage you to check the forums before submitting a question to see
//                       if anyone else has had the same question as you"
//         lbael="Ask your question here"
//         component={renderStyledTextArea}
//       />
//     </>
//   );
// };

// export const ProposalFields = () => {
//   return (
//     <>
//       <Field
//         htmlFor="title"
//         type="text"
//         name="title"
//         placeholder="Title"
//         label="Title"
//         component={renderStyledInput}
//       />

//       <Field
//         htmlFor="problem"
//         name="description"
//         placeholder="Tell us how this came about"
//         label="Is your proposal related to a problem?"
//         component={renderStyledTextArea}
//       />

//       <Field
//         htmlFor="solution"
//         name="solution"
//         placeholder="Describe your solution here"
//         label="Describe the solution you'd like"
//         component={renderStyledTextArea}
//       />

//       <Field
//         htmlFor="alternatives"
//         name="alternatives"
//         placeholder="Have you considered any alternative solutions?"
//         label="Describe alternatives you've considered"
//         component={renderStyledTextArea}
//       />
//     </>
//   );
// };
