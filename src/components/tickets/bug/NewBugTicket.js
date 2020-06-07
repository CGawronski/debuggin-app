import React, { Component } from "react";
import { connect } from "react-redux";
import { createBug } from "../../../actions";
import TicketForm from "../form/TicketForm";
import { BugFields } from "../form/FormFields";

class NewBugTicket extends Component {
  onSubmit = (formValues) => {
    this.props.createBug(formValues);
  };

  render() {
    return (
      <TicketForm
        header="New Bug Ticket"
        formFields={BugFields}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default connect(null, { createBug })(NewBugTicket);
