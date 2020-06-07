import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTicket } from "../../actions";
import { Link } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import { BodyContainer } from "../../StyledComponents/BodyContainer";

class TicketShow extends Component {
  componentDidMount() {
    this.props.fetchTicket(this.props.match.params.id);
  }

  renderFields() {
    const {
      environment,
      reproduce,
      solution,
      alternatives,
    } = this.props.ticket;

    const itemStyle = "pb-0 pl-0";

    if (environment) {
      return (
        <>
          <ListGroup.Item className={itemStyle}>
            <h5>Environment</h5>
            <p>{environment}</p>
          </ListGroup.Item>
          <ListGroup.Item className={itemStyle}>
            <h5>Steps to reproduce</h5>
            <p>{reproduce}</p>
          </ListGroup.Item>
        </>
      );
    }
    if (solution) {
      return (
        <>
          <ListGroup.Item className={itemStyle}>
            <h5>Proposed solution</h5>
            <p>{solution}</p>
          </ListGroup.Item>
          <ListGroup.Item className={itemStyle}>
            <h5>Alternative proposals</h5>
            <p>{alternatives}</p>
          </ListGroup.Item>
        </>
      );
    }
  }

  renderTitle() {
    if (this.props.ticket.ticketType === "bug") {
      return <h3>Bug Ticket</h3>;
    }
    if (this.props.ticket.ticketType === "proposal") {
      return <h3>Proposal Ticket</h3>;
    }
    return <h3>Question Ticket</h3>;
  }

  render() {
    if (!this.props.ticket) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.ticket;

    return (
      <BodyContainer>
        <div>
          <ListGroup variant="flush">
            {this.renderTitle()}
            <ListGroup.Item className="pb-0 pl-0">
              <h4>{title}</h4>
            </ListGroup.Item>
            <ListGroup.Item className="pb-0 pl-0">
              <h5>Description</h5>
              <p>{description}</p>
            </ListGroup.Item>
            {this.renderFields()}
          </ListGroup>
          <Button as={Link} to="/" className="primaryButton mt-2">
            Back
          </Button>
        </div>
      </BodyContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { ticket: state.tickets[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchTicket })(TicketShow);
