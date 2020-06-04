import React from "react";
import Form from "react-bootstrap/Form";

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return <Form.Text className="text-danger">{error}</Form.Text>;
  }
};

export const TextInput = ({ input, placeholder, label, meta }) => {
  return (
    <Form.Group controlId="formTitle">
      <Form.Label>{label}</Form.Label>
      <Form.Control type="text" placeholder={placeholder} {...input} />
      {renderError(meta)}
    </Form.Group>
  );
};

export const TextArea = ({ input, placeholder, label, meta }) => {
  return (
    <Form.Group controlId="exampleForm.ControlTextArea1">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="TextArea"
        rows="3"
        placeholder={placeholder}
        {...input}
      />
      {renderError(meta)}
    </Form.Group>
  );
};
