import React from "react";
import { connect } from "react-redux";
import { fetchTickets } from "../../actions";

import { BodyContainer } from "../../StyledComponents/BodyContainer";
import { StyledButton, SecondaryButton } from "../../StyledComponents/Buttons";

import ListGroup from "react-bootstrap/ListGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolBar from "react-bootstrap/ButtonToolBar";
import Button from "react-bootstrap/Button";

class TicketList extends React.Component {
  componentDidMount() {
    this.props.fetchTickets();
  }

  renderAdminButtons(ticket) {
    if (ticket.userId === this.props.currentUserId) {
      return (
        <>
          <ButtonGroup className="mt-2 mb-3">
            <Button className="secondaryButton">Edit Ticket</Button>
            <Button className="primaryButton">Close Ticket</Button>
          </ButtonGroup>
        </>
      );
    }
  }

  renderList() {
    return this.props.tickets.map((ticket) => {
      return (
        <>
          <ListGroup.Item className="pb-0 pl-0">
            <ButtonToolBar
              className="justify-content-between ml-0"
              key={ticket.id}>
              <ListGroup>
                <ListGroup.Item className="pt-1">
                  <h5>{ticket.title}</h5>
                  {ticket.description}
                </ListGroup.Item>
              </ListGroup>
              <ListGroup>{this.renderAdminButtons(ticket)}</ListGroup>
            </ButtonToolBar>
          </ListGroup.Item>
        </>
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
  return {
    tickets: Object.values(state.tickets),
    currentUserId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { fetchTickets })(TicketList);
