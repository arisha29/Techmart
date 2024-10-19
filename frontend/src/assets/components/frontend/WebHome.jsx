// import "../../../App.css";
import { useEffect } from "react";
import Header from "./header/Header";
import Navigationbar from "./navbar/Navigationbar";
import Nav from "./navbar2/Navbar2";

const WebHome = () => {
  useEffect(() => {
    document.title = "Techmart - Home";
  }, []);

  return (
    <>
      <Header />
        <Navigationbar />
      <Nav />
    </>
  );
};

export default WebHome;
