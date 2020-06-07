import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchTickets } from "../../actions";
import { BodyContainer } from "../../StyledComponents/BodyContainer";
import CloseTicketModal from "./CloseTicketModal";

import ListGroup from "react-bootstrap/ListGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolBar from "react-bootstrap/ButtonToolBar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

class TicketList extends React.Component {
  componentDidMount() {
    this.props.fetchTickets();
  }

  renderLinkPath(ticket) {
    if (ticket.ticketType === "bug") {
      return `/tickets/edit-bug/${ticket.id}`;
    }

    if (ticket.ticketType === "question") {
      return `/tickets/edit-question/${ticket.id}`;
    }

    if (ticket.ticketType === "proposal") {
      return `/tickets/edit-proposal/${ticket.id}`;
    }
  }

  renderAdminButtons(ticket) {
    if (ticket.isClosed) {
      return (
        <h4>
          <Badge pill className="ticketClosed">
            TICKET CLOSED
          </Badge>
        </h4>
      );
    }

    if (ticket.userId === this.props.currentUserId) {
      return (
        <>
          <ButtonGroup className="mt-2 mb-3 listButtons">
            <Button
              as={Link}
              to={this.renderLinkPath(ticket)}
              className="secondaryButton">
              Edit Ticket
            </Button>
            <CloseTicketModal id={`${ticket.id}`} />
          </ButtonGroup>
        </>
      );
    }
  }

  renderTitle(ticket) {
    if (ticket.title.length > 40) {
      return (
        <Link className="ticketTitle" to={`/tickets/${ticket.id}`}>
          <h5>{ticket.title.slice(0, 40)} . . .</h5>
        </Link>
      );
    } else {
      return (
        <Link className="ticketTitle" to={`/tickets/${ticket.id}`}>
          <h5>{ticket.title}</h5>
        </Link>
      );
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
