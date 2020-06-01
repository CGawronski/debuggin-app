import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import ticketReducer from "./ticketReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  tickets: ticketReducer,
});
