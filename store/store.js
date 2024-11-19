import { createStore } from "redux";
import NexushubReducer from "./reducers/NexushubReducer";

const store = createStore(NexushubReducer);

export default store;
