import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { BugFields } from "../form/FormFields";
import { fetchTicket, editTicket } from "../../../actions";
import TicketForm from "../form/TicketForm";

class EditBugTicket extends Component {
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
        header="Edit Bug Ticket"
        formFields={BugFields}
        initialValues={_.pick(
          this.props.ticket,
          "title",
          "description",
          "environment",
          "reproduce"
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
  EditBugTicket
);
