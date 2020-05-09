import { combineReducers } from "redux";
import app from "./app/app.reducer";

const reducers = combineReducers({
  app,
});

export default reducers;
