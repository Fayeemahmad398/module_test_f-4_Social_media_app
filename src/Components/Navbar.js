import { useState } from "react";
import homeicon from "./homeicon.png";
import next1 from "./next1.png";
import next2 from "./next2.png";
import next3 from "./next3.png";
import { FaPlaneDeparture, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <nav>
      <div>
        <h3 className="travel">TravelMedia.in</h3>
      </div>
      <div className={clicked ? "imgdiv imgdiv2" : "imgdiv"}>
        <img src={homeicon} alt="" />
        <img src={next1} alt="" />
        <img src={next2} alt="" />
        <img src={next3} alt="" />
      </div>
      <FaPlaneDeparture className="plane" />

      {!clicked ? (
        <FaBars
          className="menuBar"
          onClick={() => {
            setClicked(true);
          }}
        />
      ) : (
        <FaTimes
          className="crossicon"
          onClick={() => {
            setClicked(false);
          }}
        />
      )}
    </nav>
  );
};
export default Navbar;
