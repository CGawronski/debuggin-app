import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { ProposalFields } from "../form/FormFields";
import { fetchTicket, editTicket } from "../../../actions";
import TicketForm from "../form/TicketForm";

class EditProposalTicket extends Component {
  componentDidMount() {
    this.props.fetchTicket(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editTicket(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.ticket) {
      return <div>Loading...</div>;
    }

    return (
      <TicketForm
        header="Edit Proposal Ticket"
        formFields={ProposalFields}
        initialValues={_.pick(
          this.props.ticket,
          "title",
          "description",
          "solution",
          "alternatives"
        )}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { ticket: state.tickets[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchTicket, editTicket })(
  EditProposalTicket
);
