import {
  FETCH_REQUEST,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_FAILURE,
} from "../actions/actionstypes";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: "",
};

const reducerToFetchData = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case FETCH_REQUEST:
      return { ...state, data: [], loading: true, error: "" };
    case FETCH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: actions.payload,
      };
    case FETCH_REQUEST_FAILURE:
      return { ...state, loading: false, data: [], error: actions.payload };
    default:
      return state;
  }
};
export default reducerToFetchData;
