import { SELECTED_POST } from "../actions/actionstypes";
const INITIAL_STATE = {};

const reducerToSelectedPost = (state = INITIAL_STATE, actions) => {
  console.log(actions);
  switch (actions.type) {
    case SELECTED_POST:
      return actions.payload;
    default:
      return state;
  }
};
export default reducerToSelectedPost;
