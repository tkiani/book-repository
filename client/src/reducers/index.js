// Code from https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669

import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});