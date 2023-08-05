import { useDispatch, useSelector } from "react-redux";
import { selected_post } from "../redux/actions/actionsCreator";
import rectangle from "./Rectangle 789.png";
import arrow from "./Polygon 1.png";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { FaHeart, FaShareAlt } from "react-icons/fa";

const DetailsPage = () => {
  const [hasDetails, setDetails] = useState(true);
  const [products2, setproducts2] = useState([]);
  const obj = useSelector((state) => {
    return state.reducerToSelectedPost;
  });
  useEffect(() => {
    if (Object.keys(obj).length == 0) {
      navigator("/");
    }
    setproducts2(products.filter((obj1) => obj1.id !== obj.id));
  }, []);
  console.log(obj);

  const dispatch = useDispatch();
  const products = useSelector((state) => {
    return state.reducerToFetchData.data;
  });

  const error = useSelector((state) => {
    return state.reducerToFetchData.error;
  });
  const navigator = useNavigate();
  console.log(obj);
  return Object.keys(obj).length > 0 ? (
    <div className="details-box">
      <div id="detailsimg">
        <div>
          <h1> Post Number:{obj.id}</h1>
          <div id="imgbox">
            <img src={`https://picsum.photos/200?random=${obj.id}`} alt="" />
            <strong id="strong">
              {obj.title.slice(0, 1).toUpperCase()}
              {obj.title.slice(1)}
            </strong>
            <FaHeart className="heart" />
            <FaShareAlt className="share" />
          </div>
        </div>

        <div className="details">
          <div className="btns">
            <button
              className="navlink"
              id={hasDetails ? "orange" : ""}
              onClick={() => {
                setDetails(true);
              }}
            >
              Details
            </button>
            <button
              className="navlink"
              id={!hasDetails ? "orange" : ""}
              onClick={() => {
                setDetails(false);
              }}
            >
              User Info
            </button>
          </div>
          <div>
            {hasDetails ? (
              <h3 className="headingwithmargin">
                {obj.body[0].toUpperCase()}
                {obj.body.slice(1)}
              </h3>
            ) : (
              <strong id="postid">
                Post was posted by userId:{obj.userId}
              </strong>
            )}
          </div>
        </div>
      </div>
      <hr style={{ height: "2px", width: "100%", background: "grey" }} />
      <h1>More Posts</h1>
      <hr style={{ height: "3px", width: "100%", background: "red" }} />
      <div className="box-container">
        {products2.map((obj) => {
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
                  {obj.title && (
                    <h3 className="headingwithmargin">
                      {obj.title[0].toUpperCase()}
                      {obj.title.slice(1, 15)}
                    </h3>
                  )}
                  {obj.body && (
                    <p>
                      {obj.body[0].toUpperCase()}
                      {obj.body.slice(1, 80)}...
                      <span className="span">readmore</span>
                    </p>
                  )}
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
    </div>
  ) : (
    <h3>{error}</h3>
  );
};
export default DetailsPage;
