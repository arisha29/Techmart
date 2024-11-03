import "./App.css";
// import 'bootstrap/js/dist/tab';
import "bootstrap/dist/js/bootstrap";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WebHome from "./assets/components/frontend/WebHome";
import Navigationbar from "./assets/components/frontend/navbar/Navigationbar";
import LoginForm from "./assets/components/Auth/login/LoginForm";
import SignupForm from "./assets/components/Auth/sign-up/SignupForm";
import ForgotPassword from "./assets/components/Auth/password/ForgotPassword";
import ResetPassword from "./assets/components/Auth/password/ResetPassword";
import Home from "./assets/components/admin/Home";
import UserProfile from "./assets/components/admin/layouts/UserProfile";
import Header from "./assets/components/admin/layouts/Header";
import SideBar from "./assets/components/admin/layouts/SideBar";
import NotFound from "./assets/components/frontend/NotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WebHome />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "login",
      element: (
        <>
          <Navigationbar />
          <LoginForm />
        </>
      ),
    },
    {
      path: "sign-up",
      element: (
        <>
          <Navigationbar />
          <SignupForm />
        </>
      ),
    },
    {
      path: "forgot-password",
      element: (
        <>
          <Navigationbar />
          <ForgotPassword />
        </>
      ),
    },
    {
      path: "reset-password",
      element: (
        <>
          <Navigationbar />
          <ResetPassword />
        </>
      ),
    },
    {
      path: "admin/dashboard",
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path: "profile",
      element: (
        <>
          <Header />
          <UserProfile />
          <SideBar />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
