import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./assets/components/frontend/Navigationbar";
// import Nav from "./assets/components/admin/AdminNavigation";
import SignupForm from "./assets/components/Auth/SignupForm";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Nav /> */}
      <SignupForm/>
    </>
  );
};

export default App;
