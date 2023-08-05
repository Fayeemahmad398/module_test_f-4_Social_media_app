import homeicon from "./homeicon.png";
import next1 from "./next1.png";
import next2 from "./next2.png";
import next3 from "./next3.png";
import { FaPlaneDeparture } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h3 className="travel">TravelMedia.in</h3>
      </div>
      <div className="imgdiv">
        <img src={homeicon} alt="" />
        <img src={next1} alt="" />
        <img src={next2} alt="" />
        <img src={next3} alt="" />
      </div>
      <FaPlaneDeparture className="plane" />
    </nav>
  );
};
export default Navbar;
