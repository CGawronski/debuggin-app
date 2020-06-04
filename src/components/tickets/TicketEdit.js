import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTicket } from "../../actions";

class TicketEdit extends Component {
  componentDidMount() {
    this.props.fetchTicket(this.props.match.params.id);
  }

  render() {
    if (!this.props.ticket) {
      return <div>Loading...</div>;
    }
    return <div>{this.props.ticket.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { ticket: state.tickets[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchTicket })(TicketEdit);
