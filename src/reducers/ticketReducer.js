import _ from "lodash";
import {
  CREATE_TICKET,
  FETCH_TICKETS,
  FETCH_TICKET,
  CLOSE_TICKET,
  EDIT_TICKET,
} from "../actions/types";

export default = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TICKETS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_TICKET:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_TICKET:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_TICKET:
      return { ...state, [action.payload.id]: action.payload };
    case CLOSE_TICKET:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
      
  }
}