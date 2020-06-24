export const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "* You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "* You must enter a description";
  }

  if (!formValues.environment) {
    errors.environment = "* Please tell us about your environment";
  }

  if (!formValues.reproduce) {
    errors.reproduce = "* Please list the steps necessary to reproduce the bug";
  }

  if (!formValues.solution) {
    errors.solution = "* Please tell us your potential solution";
  }

  if (!formValues.alternatives) {
    errors.alternatives = "* Please list any alternative solutions";
  }

  if (!formValues.comment) {
    errors.alternatives = "* This field cannot be empty";
  }

  if (!formValues.name) {
    errors.alternatives = "* Please enter your name";
  }

  return errors;
};
