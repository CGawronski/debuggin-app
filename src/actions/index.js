import tickets from "../tickets";
import history from "../history";

import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_TICKET,
  FETCH_TICKETS,
  FETCH_TICKET,
  DELETE_TICKET,
  CLOSE_TICKET,
  EDIT_TICKET,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createBug = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  let isClosed = false;
  const ticketType = "bug";
  const response = await tickets.post("/tickets", {
    ...formValues,
    userId,
    isClosed,
    ticketType,
  });

  dispatch({ type: CREATE_TICKET, payload: response.data });
  history.push("/");
};

export const fetchTickets = () => async (dispatch) => {
  const response = await tickets.get("/tickets");

  dispatch({ type: FETCH_TICKETS, payload: response.data });
};

export const fetchTicket = (id) => async (dispatch) => {
  const response = await tickets.get(`/tickets/${id}`);

  dispatch({ type: FETCH_TICKET, payload: response.data });
};

export const editTicket = (id, formValues) => async (dispatch) => {
  const response = await tickets.patch(`/tickets/${id}`, formValues);

  dispatch({ type: EDIT_TICKET, payload: response.data });
  history.push("/");
};

// BEFORE DEPLOYMENT... UPDATE BASEURL in TICKETS.JS

// export const createQuestion = (formValues) => async (dispatch, getState) => {
//   const { userId } = getState().auth;
//   let isClosed = false;
//   const ticketType = "question";
//   const response = await axios.post("/tickets", {
//     ...formValues,
//     userId,
//     isClosed,
//     ticketType,
//   });

//   dispatch({ type: CREATE_TICKET, payload: response.data });
//   history.push("/");
// };

// export const createProposal = (formValues) => async (dispatch, getState) => {
//   const { userId } = getState().auth;
//   let isClosed = false;
//   const ticketType = "proposal";
//   const response = await axios.post("/tickets", {
//     ...formValues,
//     userId,
//     isClosed,
//     ticketType,
//   });

//   dispatch({ type: CREATE_TICKET, payload: response.data });
//   history.push("/");
// };

// export const fetchTickets = () => async (dispatch) => {
//   const response = await axios.get("/tickets");

//   dispatch({ type: FETCH_TICKETS, payload: response.data });
// };

// export const closeTicket = (id, formValues, isClosed) => async (dispatch) => {
//   const response = await axios.patch(`/tickets/${id}`, formValues, isClosed);

//   dispatch({ type: CLOSE_TICKET, payload: response.data });
//   history.push("/");
// };

// export const deleteTicket = (id) => async (dispatch) => {
//   await axios.delete(`/tickets/${id}`);

//   dispatch({ type: DELETE_TICKET, payload: id });
// };
