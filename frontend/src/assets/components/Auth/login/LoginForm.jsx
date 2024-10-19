import "./login.css";
import { FaUnlockAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
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
                        <span>OR SIGN IN WITH EMAIL</span>
                        <hr />
                      </div>
                      <div className="form-body">
                        <form className="row g-3">
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
                                id="inputChoosePassword"
                                value="12345678"
                                placeholder="Enter Password"
                              />
                              <a
                                href="javascript:;"
                                className="input-group-text bg-transparent"
                              >
                                {/* <i className="bx bx-hide"></i> */}
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
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
                              Forgot Password ?</NavLink>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <button
                                type="submit"
                                className="btn text-white d-flex justify-content-center align-items-center gap-2"
                                id="custom-bg-btn"
                              >
                                <FaUnlockAlt />
                                <span>Sign In</span>
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
