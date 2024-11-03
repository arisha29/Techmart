import { useEffect } from "react";
import "../../css/app.css";
import "./layouts/admin.css";
import Header from "./layouts/Header";
import SideBar from "./layouts/SideBar";
import UserProfile from "./layouts/UserProfile";

const Home = () => {
  useEffect(() => {
    document.title = "Techmart - Dashboard";
  }, []);

  return (
    <>
      <Header />
      <SideBar />
      <UserProfile/>
    </>
  );
};

export default Home;
