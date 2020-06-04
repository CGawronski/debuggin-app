import React from "react";
import { Router, Route } from "react-router-dom";

import TicketClose from "./components/tickets/TicketClose";
import EditBugTicket from "./components/tickets/bug/EditBugTicket";
import TicketList from "./components/tickets/TicketList";
import TicketShow from "./components/tickets/TicketShow";
import NewBugTicket from "./components/tickets/bug/NewBugTicket";
import NewProposalTicket from "./components/tickets/proposal/NewProposalTicket";
import NewQuestionTicket from "./components/tickets/question/NewQuestionTicket";
import Header from "./components/Header";
import history from "./history";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <ScrollToTop />
        <div>
          <Header />
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
          <Route path="/tickets/edit/:id" exact component={EditBugTicket} />
          <Route path="/tickets/close" exact component={TicketClose} />
          <Route path="/tickets/show/:id" exact component={TicketShow} />
        </div>
      </Router>
    </div>
  );
}

export default App;
