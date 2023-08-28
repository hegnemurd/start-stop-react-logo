import { createStore } from "redux";
import rotationReducer from "./reducers/rotateReducer";

function configureStore(state = { rotating: true }) {
  return createStore(rotationReducer, state);
}

export default configureStore;
