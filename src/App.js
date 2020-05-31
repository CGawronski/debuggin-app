import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import TicketClose from "./components/tickets/TicketClose";
import TicketEdit from "./components/tickets/TicketEdit";
import TicketList from "./components/tickets/TicketList";
import TicketShow from "./components/tickets/TicketShow";
import NewBugTicket from "./components/tickets/bug/NewBugTicket";
import NewProposalTicket from "./components/tickets/proposal/NewProposalTicket";
import NewQuestionTicket from "./components/tickets/question/NewQuestionTicket";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
          <Route path="/tickets/edit" exact component={TicketEdit} />
          <Route path="/tickets/close" exact component={TicketClose} />
          <Route path="/tickets/show" exact component={TicketShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
