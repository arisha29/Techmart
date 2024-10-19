import { useEffect } from "react";
import "../../css/app.css";
import "./layouts/admin.css";
import Header from "./layouts/Header";
import SideBar from "./layouts/SideBar";

const Home = () => {
  useEffect(() => {
    document.title = "Techmart - Dashboard";
  }, []);

  return (
    <>
      <Header />
      <SideBar />
    </>
  );
};

export default Home;
