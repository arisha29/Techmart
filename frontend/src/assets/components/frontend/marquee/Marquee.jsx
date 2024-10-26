import "./marquee.css";
import logo1 from "../../../Images/samsung-logo.png";
import logo2 from "../../../Images/dell-logo.png";
import logo3 from "../../../Images/apple-logo.png";
import logo4 from "../../../Images/hp-logo.png";

const Marquee = () => {
  return (
    <div className="container-fluid" id="marquee-box">
      <div className="container text-white px-0">
        <div className="row" id="img-container">
          <div className="col-3">
            <img src={logo1} alt="samsung-logo" className="img-fluid" />
          </div>
          <div className="col-3">
            <img src={logo3} alt="samsung-logo" className="img-fluid" />
          </div>
          <div className="col-3">
            <img src={logo2} alt="samsung-logo" className="img-fluid" />
          </div>
          <div className="col-3">
            <img src={logo4} alt="samsung-logo" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
