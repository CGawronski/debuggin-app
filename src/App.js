import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import TicketClose from "./components/tickets/TicketClose";
import TicketCreate from "./components/tickets/TicketCreate";
import TicketEdit from "./components/tickets/TicketEdit";
import TicketList from "./components/tickets/TicketList";
import TicketShow from "./components/tickets/TicketShow";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={TicketList} />
          <Route path="/tickets/new" exact component={TicketCreate} />
          <Route path="/tickets/edit" exact component={TicketEdit} />
          <Route path="/tickets/close" exact component={TicketClose} />
          <Route path="/tickets/show" exact component={TicketShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
