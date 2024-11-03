import "./login.css";
import { FaUnlockAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthUser from "../AuthUser";
import { toast } from "react-toastify";

const LoginForm = () => {
  const { http } = AuthUser();
  const navigate = useNavigate();
  const [FormData, SetFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (e) => {
    SetFormData({
      ...FormData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const ValidateForm = () => {
    let isValid = true; // Flag to track form validity

    if (!FormData.email) {
      toast.error("Email is required.");
      isValid = false;
    } else if (!emailRegex.test(FormData.email)) {
      toast.error("Invalid email format.");
      isValid = false;
    }

    if (!FormData.password) {
      toast.error("Password is required.");
      isValid = false;
    }

    return isValid; // Return true if valid, false otherwise
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ValidateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await http.post("login", {
        email: FormData.email,
        password: FormData.password,
      });

      const { token } = response.data.access_token;

      // Store the token based on Remember Me option
      if (FormData.rememberMe) {
        localStorage.setItem("access_token", token);
      } else {
        sessionStorage.setItem("access_token", token);
      }

      // Clear the form data
      SetFormData({
        email: "",
        password: "",
        rememberMe: false,
      });

      // Show success toast
      toast.success("Successfully logged in!");

      // Navigate to home page
      navigate("/");
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "An error occurred during login.";
      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-login">
      <div className="wrapper">
        <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
              <div className="col mx-auto">
                <div className="card">
                  <div className="card-body">
                    <div className="border p-4 rounded">
                      <div className="text-center">
                        <h3 className="fw-bold">Sign in</h3>
                        <p>
                          Don't have an account yet?
                          <NavLink to="/sign-up">Sign up here</NavLink>
                        </p>
                      </div>
                      <div className="d-grid">
                        <a
                          id="custom-btn"
                          className="btn my-3 shadow-sm btn-white"
                          href="#"
                        >
                          <span className="d-flex justify-content-center align-items-center gap-2">
                            <FaGoogle fontSize={20} />
                            <span>Sign Up with Google</span>
                          </span>
                        </a>
                        <a
                          id="custom-btn"
                          className="btn shadow-sm btn-white"
                          href="#"
                        >
                          <span className="d-flex justify-content-center align-items-center gap-2">
                            <FaFacebookF fontSize={20} />
                            <span>Sign Up with Facebook</span>
                          </span>
                        </a>
                      </div>
                      <div className="login-separater text-center mb-4">
                        <span>OR SIGN IN WITH EMAIL</span>
                        <hr />
                      </div>
                      <div className="form-body">
                        <form className="row g-3" onSubmit={handleSubmit}>
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
                              id="email"
                              name="email"
                              value={FormData.email}
                              onChange={handleInputChange}
                              placeholder="Email Address"
                            />
                          </div>
                          <div className="col-12">
                            <label
                              htmlFor="inputChoosePassword"
                              className="form-label"
                            >
                              Enter Password
                            </label>
                            <div
                              className="input-group"
                              id="show_hide_password"
                            >
                              <input
                                type="password"
                                className="form-control border-end-0"
                                id="password"
                                name="password"
                                placeholder="Enter Password"
                                value={FormData.password}
                                onChange={handleInputChange}
                              />
                              <a
                                href="#"
                                className="input-group-text bg-transparent"
                              ></a>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                                name="rememberMe"
                                checked={FormData.rememberMe}
                                onChange={handleInputChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckChecked"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 text-end">
                            <NavLink to="/forgot-password">
                              Forgot Password ?
                            </NavLink>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <button
                                type="submit"
                                className="btn text-white d-flex justify-content-center align-items-center gap-2"
                                id="custom-bg-btn"
                                disabled={isSubmitting}
                              >
                                <FaUnlockAlt />
                                {isSubmitting ? "Submitting..." : "Sign In"}
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

export default LoginForm;
