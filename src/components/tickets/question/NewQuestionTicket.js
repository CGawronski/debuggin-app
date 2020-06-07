import React, { Component } from "react";
import { connect } from "react-redux";

import TicketForm from "../form/TicketForm";
import { createQuestion } from "../../../actions";
import { QuestionFields } from "../form/FormFields";

class NewQuestionTicket extends Component {
  onSubmit = (formValues) => {
    this.props.createQuestion(formValues);
  };

  render() {
    return (
      <TicketForm
        header="New Question Ticket"
        formFields={QuestionFields}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default connect(null, { createQuestion })(NewQuestionTicket);
