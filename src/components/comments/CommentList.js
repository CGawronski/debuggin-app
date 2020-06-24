import React from "react";
import { connect } from "react-redux";

import { fetchComments } from "../../actions";
import ListGroup from "react-bootstrap/ListGroup";
import ButtonToolBar from "react-bootstrap/ButtonToolBar";
import { CommentContainer } from "../../StyledComponents/CommentContainer";

class CommentList extends React.Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  renderList() {
    return this.props.comments.map((comment) => {
      if (comment.ticketId === this.props.ticketId) {
        return (
          <>
            <ListGroup.Item className="pb-0 pl-0 m-0">
              <ButtonToolBar className="justify-content-between ml-0">
                <ListGroup>
                  <CommentContainer className="m-0 p-0">
                    <ListGroup.Item className="p-0" key={comment.id}>
                      <h5>
                        User <i>{comment.name}</i> replied:
                      </h5>
                      <p>{comment.comment}</p>
                    </ListGroup.Item>
                  </CommentContainer>
                </ListGroup>
              </ButtonToolBar>
            </ListGroup.Item>
          </>
        );
      }
    });
  }

  render() {
    return (
      <CommentContainer className="pt-0 pb-0">
        <ListGroup variant="flush">{this.renderList()}</ListGroup>
      </CommentContainer>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    comments: Object.values(state.comments),
    currentUserId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { fetchComments })(CommentList);
