import './Slider.css';
// import vector1 from './../../../Images/Vector.svg';

const Slider = () => {
  return (
    <>
      <div className="slider">
        <div className="slider-text">
          <h1>DISCOVER GADGETS THAT FIT YOUR LIFESTYLE</h1>
          <p>
            Explore our curated selection of cutting-edge gadgets and
            accessories, crafted to enhance your experience and suit your unique
            lifestyle.
          </p>
          <button id="custom-bg-btn" className="text-white">
            Shop Now
          </button>
        </div>
        {/* <div className="vector-box">
          <img src={vector1} alt="vector" className="img-fluid" id="vector1" />
          <img src={vector1} alt="vector" className="img-fluid" id='vector2'/>
        </div> */}
      </div>
    </>
  );
}

export default Slider;
