import React from "react";
import { connect } from "react-redux";
import { fetchTickets } from "../../actions";

class TicketList extends React.Component {
  componentDidMount() {
    this.props.fetchTickets();
  }

  render() {
    return <div>TicketList</div>;
  }
}

export default connect(null, { fetchTickets })(TicketList);
