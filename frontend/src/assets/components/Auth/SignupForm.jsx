import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const SignupForm = () => {
  return (
    <div className="bg-login">
      <div className="wrapper">
        <div className="d-flex align-items-center justify-content-center my-5 my-lg-0">
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
              <div className="col mx-auto">
                <div className="card my-4">
                  <div className="card-body">
                    <div className="border p-4 rounded">
                      <div className="text-center">
                        <h3 className="fw-bold">Sign Up</h3>
                        <p>
                          Already have an account?
                          <a href="authentication-signin.html">Sign in here</a>
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
                        <form className="row g-3">
                          <div className="col-sm-6">
                            <label
                              htmlFor="inputFirstName"
                              className="form-label"
                            >
                              First Name
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="inputFirstName"
                              placeholder="Jhon"
                            />
                          </div>
                          <div className="col-sm-6">
                            <label
                              htmlFor="inputLastName"
                              className="form-label"
                            >
                              Last Name
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="inputLastName"
                              placeholder="Deo"
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
                              placeholder="example@user.com"
                            />
                          </div>
                          <div className="col-12">
                            <label
                              htmlFor="inputChoosePassword"
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
                                id="inputChoosePassword"
                                value="12345678"
                                placeholder="Enter Password"
                              />{" "}
                              <a
                                href="javascript:;"
                                className="input-group-text bg-transparent"
                              >
                              </a>
                            </div>
                          </div>
                          <div className="col-12">
                            <label
                              htmlFor="inputChoosePassword"
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
                                id="inputChoosePassword"
                                value="12345678"
                                placeholder="Confirm Password"
                              />{" "}
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
                              >
                                <IoMdPerson />
                                <span>Sign up</span>
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
