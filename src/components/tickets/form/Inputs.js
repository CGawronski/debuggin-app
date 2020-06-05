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

// NOTE: Having the wrong casing on textarea (eg. TextArea) in '<Form.Control as="textarea"...'
// will break redux form.

export const TextArea = ({ input, placeholder, label, meta }) => {
  return (
    <Form.Group controlId="formTextArea">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="textarea"
        rows="3"
        placeholder={placeholder}
        {...input}
      />
      {renderError(meta)}
    </Form.Group>
  );
};
