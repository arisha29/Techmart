import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WebHome from "./assets/components/frontend/WebHome";
import Navigationbar from "./assets/components/frontend/navbar/Navigationbar";
import LoginForm from "./assets/components/Auth/login/LoginForm";
import SignupForm from "./assets/components/Auth/sign-up/SignupForm";
import ForgotPassword from "./assets/components/Auth/password/ForgotPassword";
import ResetPassword from "./assets/components/Auth/password/ResetPassword";
import Home from "./assets/components/admin/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WebHome />,
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
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
