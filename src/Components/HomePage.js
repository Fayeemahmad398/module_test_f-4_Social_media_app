import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import rectangle from "./Rectangle 789.png";
import arrow from "./Polygon 1.png";

import { FaSearch } from "react-icons/fa";
import {
  actionToFetchDataThunk,
  selected_post,
} from "../redux/actions/actionsCreator";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionToFetchDataThunk());
  }, []);

  const navigator = useNavigate();

  const { data, loading, error } = useSelector((state) => {
    console.log(state);
    return state.reducerToFetchData;
  });
  const products = data;
  const newerror = error;

  console.log(products);
  console.log(error);

  return (
    <div className="home-page-upperpart">
        <h3>Social Media For Travellers</h3>
      <div className="heading-search">
        <input type="text" placeholder="search  here..." />
        <FaSearch className="searchicons" />
      </div>

      {loading && (
        <div id="loader-box">
          <div id="loader"></div>
        </div>
      )}
      {
        <div className="box-container">
          {products.length > 0 &&
            products.map((obj) => {
              return (
                <div
                  key={obj.id}
                  className="box"
                  onClick={() => {
                    dispatch(selected_post(obj));

                    navigator(`/item/:${obj.id}`);
                  }}
                >
                  <div>
                    <img
                      className="all-img-home"
                      src={`https://picsum.photos/200?random=${obj.id}`}
                      alt=""
                    />
                  </div>
                  <div className="card-lower-part">
                    <div>
                      <h3>
                        {obj.title[0].toUpperCase()}
                        {obj.title.slice(1, 15)}{" "}
                      </h3>
                      <p>
                        {obj.body[0].toUpperCase()}
                        {obj.body.slice(1, 80)}...{" "}
                        <span className="span">readmore</span>
                      </p>
                    </div>
                    <div>
                      <div className="arrow-img">
                        <img src={rectangle} alt="" />
                        <img src={arrow} alt="" className="imgarrow" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      }
      {error && <h1 style={{ color: "red" }}>{newerror}</h1>}
    </div>
  );
};

export default HomePage;
