import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchTicket, editTicket } from "../../../actions";

import Form from "react-bootstrap/Form";
import { BodyContainer } from "../../../StyledComponents/BodyContainer";
import { BugFields } from "../form/FormFields";
import { SubmitTicketButtons } from "../form/FormButtons";
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
      <BodyContainer className="mt-4">
        <Form
          initialValues={{ title: "some fucking title" }}
          onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="mb-3">
            <h3>Edit Bug Ticket</h3>
          </div>
          <BugFields />
          <SubmitTicketButtons />
        </Form>
      </BodyContainer>
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
