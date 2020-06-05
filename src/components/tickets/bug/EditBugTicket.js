import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchTicket, editTicket } from "../../../actions";
import TicketForm from "../form/TicketForm";
import { validate } from "../form/validate";

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
        initialValues={_.pick(
          this.props.ticket,
          "title",
          "description",
          "environment",
          "reproduce"
        )}
        onSubmit={this.onSubmit}
        header={"Edit Bug Ticket"}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { ticket: state.tickets[ownProps.match.params.id] };
};

const formWrapped = reduxForm({
  form: "newBugTicket",
  validate,
})(EditBugTicket);

export default connect(mapStateToProps, { fetchTicket, editTicket })(
  formWrapped
);
