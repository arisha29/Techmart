import "./sign-up.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { NavLink } from "react-router-dom";
import AlertMsg from "../../AlertMsg";
import AuthUser from "../AuthUser";
import { useState } from "react";
import Verification from "./Verification";

const SignupForm = () => {
  const { http } = AuthUser();
  const [FormData, SetFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState([]);
  const [alertMsg, setAlertMsg] = useState(null);
  const [alertType, setAlertType] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (e) => {
    SetFormData({
      ...FormData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const ValidateForm = () => {
    const errors = [];

    if (!FormData.name) errors.push("Name is required.");
    if (!FormData.email) errors.push("Email is required.");
    else if (!emailRegex.test(FormData.email))
      errors.push("Invalid email format.");
    if (!FormData.password) errors.push("Password is required.");
    if (FormData.password_confirmation !== FormData.password)
      errors.push("Passwords do not match.");
    if (!FormData.termsAccepted)
      errors.push("You must accept the terms and conditions.");

    setErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //clear previous messages
    setAlertMsg(null);
    setAlertType(null);

    if (!ValidateForm()) return;

    setIsSubmitting(true);
    // Log form data to console
    console.log(FormData);

    try {
      const response = await http.post("register", {
        name: FormData.name,
        email: FormData.email,
        password: FormData.password,
        password_confirmation: FormData.password_confirmation,
      });
      console.log("Backend Response", response.data);

      setAlertMsg("Registration Successfully.");
      setAlertType("success");
      SetFormData({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        termsAccepted: false,
      });

      setShowVerification(true);
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        "An error occured during registration.";

      setAlertMsg(errorMsg);
      setAlertType("error");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showVerification) {
    return (
      <div className="verification-container">
        <Verification />
      </div>
    );
  }

  return (
    <div className="bg-login">
      <div className="wrapper">
        <div className="d-flex align-items-center justify-content-center my-5 my-lg-0">
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
              <div className="col mx-auto">
                {/* alert messages */}
                {alertMsg && <AlertMsg type={alertType} msg={alertMsg} />}
                {errors.length > 0 && <AlertMsg errors={errors} />}
                <div className="card my-4">
                  <div className="card-body">
                    <div className="border p-4 rounded">
                      <div className="text-center">
                        <h3 className="fw-bold">Sign Up</h3>
                        <p>
                          Already have an account?
                          <NavLink to="/login">Sign in here</NavLink>
                        </p>
                      </div>
                      <div className="d-grid">
                        <a
                          id="custom-btn"
                          className="btn my-3 shadow-sm btn-white"
                          href="javascript:;"
                        >
                          <span className="d-flex justify-content-center align-items-center gap-2">
                            <FaGoogle fontSize={20} />
                            <span>Sign Up with Google</span>
                          </span>
                        </a>
                        <a
                          id="custom-btn"
                          className="btn shadow-sm btn-white"
                          href="javascript:;"
                        >
                          <span className="d-flex justify-content-center align-items-center gap-2">
                            <FaFacebookF fontSize={20} />
                            <span>Sign Up with Facebook</span>
                          </span>
                        </a>
                      </div>
                      <div className="login-separater text-center mb-4">
                        <span>OR SIGN UP WITH EMAIL</span>
                        <hr />
                      </div>
                      <div className="form-body">
                        <form className="row g-3" onSubmit={handleSubmit}>
                          <div className="col-12">
                            <label htmlFor="inputName" className="form-label">
                              Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputName"
                              name="name"
                              value={FormData.name}
                              onChange={handleInputChange}
                              placeholder="Jhon Deo"
                            />
                          </div>
                          <div className="col-12">
                            <label
                              htmlFor="inputEmailAddress"
                              className="form-label"
                            >
                              Email Address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="inputEmailAddress"
                              name="email"
                              value={FormData.email}
                              onChange={handleInputChange}
                              placeholder="example@user.com"
                            />
                          </div>
                          <div className="col-12">
                            <label
                              htmlFor="inputPassword"
                              className="form-label"
                            >
                              Password
                            </label>
                            <div
                              className="input-group"
                              id="show_hide_password"
                            >
                              <input
                                type="password"
                                className="form-control border-end-0"
                                id="inputPassword"
                                name="password"
                                value={FormData.password}
                                onChange={handleInputChange}
                                placeholder="Enter Password"
                              />
                              <a
                                href="javascript:;"
                                className="input-group-text bg-transparent"
                              ></a>
                            </div>
                          </div>
                          <div className="col-12">
                            <label
                              htmlFor="inputConfirmPassword"
                              className="form-label"
                            >
                              Confirm Password
                            </label>
                            <div
                              className="input-group"
                              id="show_hide_password"
                            >
                              <input
                                type="password"
                                className="form-control border-end-0"
                                id="inputConfirmPassword"
                                name="password_confirmation"
                                value={FormData.password_confirmation}
                                onChange={handleInputChange}
                                placeholder="Confirm Password"
                              />
                              <a
                                href="javascript:;"
                                className="input-group-text bg-transparent"
                              ></a>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                                name="termsAccepted"
                                value={FormData.termsAccepted}
                                onChange={handleInputChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckChecked"
                              >
                                I read and agree to Terms & Conditions
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <button
                                type="submit"
                                className="btn text-white d-flex justify-content-center align-items-center gap-2"
                                id="custom-bg-btn"
                                disabled={isSubmitting}
                              >
                                <IoMdPerson />
                                {isSubmitting ? "Submitting..." : "Sign up"}
                                {/* <span>Sign up</span> */}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
