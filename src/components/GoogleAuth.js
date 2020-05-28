import React, { Component } from "react";
import { Nav } from "react-bootstrap";

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "48579684883-80vcbtkog16ab3cggbtqhu2e5nrhlh06.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <Nav.Link>Sign In</Nav.Link>;
    } else if (this.state.isSignedIn) {
      return <Nav.Link onClick={this.onSignOutClick}>Sign Out</Nav.Link>;
    } else {
      return <Nav.Link onClick={this.onSignInClick}>Sign In</Nav.Link>;
    }
  }

  render() {
    return <>{this.renderAuthButton()} </>;
  }
}

export default GoogleAuth;
