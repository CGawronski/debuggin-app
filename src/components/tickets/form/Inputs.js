import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return <Form.Text className="text-danger">{error}</Form.Text>;
  }
};

export const TextInput = ({ input, placeholder, label, meta }) => {
  return (
    <Form.Group controlid="formTitle">
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
    <Form.Group controlid="formTextArea">
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

export const InputName = ({ input, placeholder, label, meta }) => {
  return (
    <InputGroup controlid="formTextArea" className="mt-3">
      <InputGroup.Prepend>
        <InputGroup.Text>{label}</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl placeholder={placeholder} {...input} />
      {renderError(meta)}
    </InputGroup>
  );
};
