import React from "react";
import Form from "react-bootstrap/Form";

export const TextInput = ({ input, htmlFor, placeholder, label, meta }) => {
  return (
    <Form.Group controlId="formTitle">
      <Form.Label htmlFor={htmlFor}>{label}</Form.Label>
      <Form.Control type="email" placeholder={placeholder} {...input} />
    </Form.Group>
  );
};

export const textArea = ({ input, htmlFor, placeholder, label, meta }) => {
  return (
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label htmlFor={htmlFor}>{label}</Form.Label>
      <Form.Control
        as="textarea"
        rows="3"
        placeholder={placeholder}
        {...input}
      />
    </Form.Group>
  );
};
