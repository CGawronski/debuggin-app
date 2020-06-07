import React, { Component } from "react";
import { connect } from "react-redux";

import TicketForm from "../form/TicketForm";
import { createProposal } from "../../../actions";
import { ProposalFields } from "../form/FormFields";

class NewProposalTicket extends Component {
  onSubmit = (formValues) => {
    this.props.createProposal(formValues);
  };

  renderFormFields() {
    return <ProposalFields />;
  }

  render() {
    return (
      <TicketForm
        header="New Question Ticket"
        formFields={this.renderFormFields}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default connect(null, { createProposal })(NewProposalTicket);
