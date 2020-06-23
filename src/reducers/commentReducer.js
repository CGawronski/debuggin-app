import _ from "lodash";
import { CREATE_COMMENT } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    // case FETCH_COMMENTS:
    //   return { ...state, ..._.mapKeys(action.payload, "id") };
    case CREATE_COMMENT:
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
};
