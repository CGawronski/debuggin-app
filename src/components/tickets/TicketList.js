import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchTickets } from "../../actions";
import { BodyContainer } from "../../StyledComponents/BodyContainer";
import ModalButton from "../ModalButton";

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
            <Button
              as={Link}
              to={`/tickets/edit/${ticket.id}`}
              className="secondaryButton">
              Edit Ticket
            </Button>
            <ModalButton className="primaryButton">Close Ticket</ModalButton>
          </ButtonGroup>
        </>
      );
    }
  }

  renderTitle(ticket) {
    if (ticket.title.length > 30) {
      return <h5>{ticket.title.slice(0, 30)} . . .</h5>;
    } else {
      return <h5>{ticket.title}</h5>;
    }
  }

  renderDescription(ticket) {
    if (ticket.description.length > 50) {
      return <p>{ticket.description.slice(0, 50)} . . .</p>;
    } else {
      return <p>{ticket.description}</p>;
    }
  }

  renderList() {
    return this.props.tickets.reverse().map((ticket) => {
      return (
        <>
          <ListGroup.Item className="pb-0 pl-0" key={ticket.id}>
            <ButtonToolBar className="justify-content-between ml-0">
              <ListGroup>
                <ListGroup.Item className="pt-1">
                  {this.renderTitle(ticket)}
                  {this.renderDescription(ticket)}
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
      <BodyContainer className="listContainer">
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
