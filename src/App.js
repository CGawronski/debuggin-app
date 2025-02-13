import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import EditBugTicket from "./components/tickets/bug/EditBugTicket";
import EditProposalTicket from "./components/tickets/proposal/EditProposalTicket";
import EditQuestionTicket from "./components/tickets/question/EditQuestionTicket";
import TicketList from "./components/tickets/TicketList";
import TicketClose from "./components/tickets/TicketClose";
import TicketShow from "./components/tickets/TicketShow";
import NewBugTicket from "./components/tickets/bug/NewBugTicket";
import NewProposalTicket from "./components/tickets/proposal/NewProposalTicket";
import NewQuestionTicket from "./components/tickets/question/NewQuestionTicket";
import Header from "./components/Header";
import Footer from "./components/Footer";
import history from "./history";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <ScrollToTop />
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={TicketList} />
            <Route path="/tickets/new-bug" exact component={NewBugTicket} />
            <Route
              path="/tickets/new-proposal"
              exact
              component={NewProposalTicket}
            />
            <Route
              path="/tickets/new-question"
              exact
              component={NewQuestionTicket}
            />
            <Route
              path="/tickets/edit-bug/:id"
              exact
              component={EditBugTicket}
            />
            <Route
              path="/tickets/edit-proposal/:id"
              exact
              component={EditProposalTicket}
            />
            <Route
              path="/tickets/edit-question/:id"
              exact
              component={EditQuestionTicket}
            />
            <Route path="/tickets/close/:id" exact component={TicketClose} />
            <Route path="/tickets/:id" exact component={TicketShow} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
