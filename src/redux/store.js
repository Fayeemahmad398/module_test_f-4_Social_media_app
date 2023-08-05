import { createStore, combineReducers, applyMiddleware } from "redux";
import reducerToSelectedPost from "./reducers/reducerToSelectedPost";
import reducerToFetchData from "./reducers/reducerToFetchData";
import thunk from "redux-thunk";
const rootReducers = combineReducers({
  reducerToFetchData: reducerToFetchData,
  reducerToSelectedPost: reducerToSelectedPost,
});

const store = createStore(rootReducers, applyMiddleware(thunk));
export default store;
