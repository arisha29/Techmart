import { useEffect } from "react";
// import Header from "./header/Header";
// import Navigationbar from "./navbar/Navigationbar";
// import Nav from "./navbar2/Navbar2";
// import Slider from "./carousel/Slider";
// import Marquee from './marquee/Marquee';
import Home from "../admin/Home";

const WebHome = () => {
  useEffect(() => {
    document.title = "Techmart - Home";
  }, []);

  return (
    <>
      {/* <Header />
      <Navigationbar />
      <Nav />
      <Slider /> */}
      {/* <Marquee/> */}
      <Home/>
    </>
  );
};

export default WebHome;
