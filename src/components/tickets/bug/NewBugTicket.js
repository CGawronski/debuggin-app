import React, { Component } from "react";
import { connect } from "react-redux";
import { createBug } from "../../../actions";
import TicketForm from "../form/TicketForm";

class NewBugTicket extends Component {
  onSubmit = (formValues) => {
    this.props.createBug(formValues);
  };

  render() {
    return <TicketForm onSubmit={this.onSubmit} />;
  }
}

export default connect(null, { createBug })(NewBugTicket);
