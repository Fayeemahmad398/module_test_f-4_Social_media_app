import axios from "axios";
import {
  FETCH_REQUEST,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_FAILURE,
  SELECTED_POST,
} from "./actionstypes";
console.log(FETCH_REQUEST);
export const fetch_request = () => {
  return {
    type: FETCH_REQUEST,
  };
};

export const fetch_request_success = (data) => {
  return {
    type: FETCH_REQUEST_SUCCESS,
    payload: data,
  };
};
export const fetch_request_failure = (error) => {
  return {
    type: FETCH_REQUEST_FAILURE,
    payload: error,
  };
};

export const selected_post = (obj) => {
  return {
    type: SELECTED_POST,
    payload: obj,
  };
};

export const actionToFetchDataThunk = () => {
  return (dispatch) => {
    dispatch(fetch_request());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.status == 200) {
          console.log(response);
          dispatch(fetch_request_success(response.data));
        } else {
          dispatch(
            fetch_request_failure(`Error occured with ${response.status}`)
          );
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetch_request_failure(error.message));
      });
  };
};
