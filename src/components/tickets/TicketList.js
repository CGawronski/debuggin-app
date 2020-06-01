import React from "react";
import { connect } from "react-redux";
import { fetchTickets } from "../../actions";

import { BodyContainer } from "../../StyledComponents/BodyContainer";
import ListGroup from "react-bootstrap/ListGroup";

class TicketList extends React.Component {
  componentDidMount() {
    this.props.fetchTickets();
  }

  renderList() {
    return this.props.tickets.map((ticket) => {
      return (
        <ListGroup.Item action key={ticket.id}>
          <h5>{ticket.title} </h5>

          <p>{ticket.description}</p>
        </ListGroup.Item>
      );
    });
  }

  render() {
    return (
      <BodyContainer className="listContainer" className>
        <h3 className="listHeader">All Tickets</h3>
        <ListGroup variant="flush">{this.renderList()}</ListGroup>
      </BodyContainer>
    );
  }
}

export const mapStateToProps = (state) => {
  return { tickets: Object.values(state.tickets) };
};

export default connect(mapStateToProps, { fetchTickets })(TicketList);
