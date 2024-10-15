import { FaUnlockAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  return (
    // <Form classNameName="login-form rounded p-4 my-3">
    //   <h5 classNameName="text-center">Login Your Account</h5>
    //   <Form.Group classNameName="my-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" classNameName="py-3" />
    //     <Form.Text classNameName="text-muted">
    //       <small>We'll never share your email with anyone else.</small>
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group classNameName="my-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" classNameName="py-3" />
    //   </Form.Group>
    //   <Form.Group
    //     classNameName="mb-3 d-flex align-items-center justify-content-between"
    //     controlId="formBasicCheckbox"
    //   >
    //     <Form.Check type="checkbox" label="Remember Me" />
    //     <a href="#" classNameName="form-link">
    //       Forget Password?
    //     </a>
    //   </Form.Group>
    //   <Button
    //     classNameName="text-center w-100 fs-5 py-2 mb-3"
    //     type="submit"
    //     id="custom-bg-btn"
    //   >
    //     Sign In
    //   </Button>
    //   <p classNameName="text-center">Or login with</p>
    //   <div classNameName="d-flex align-items-center justify-content-center gap-5 text-center mb-3">
    //     <Button
    //       type="submit"
    //       id="custom-btn"
    //       classNameName="d-flex align-items-center px-5 py-2"
    //     >
    //       <FaFacebookF fontSize={25} />
    //       <span classNameName="ms-3">Facebook</span>
    //     </Button>
    //     <Button
    //       type="submit"
    //       id="custom-btn"
    //       classNameName="d-flex align-items-center px-5 py-2"
    //     >
    //       <FaGoogle fontSize={25} />
    //       <span classNameName="ms-3">Google</span>
    //     </Button>
    //   </div>
    //   <p classNameName="text-center mb-0">
    //     You Don't have any account?<a href="#">Sign Up</a>
    //   </p>
    // </Form>

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
                          <a href="authentication-signup.html">Sign up here</a>
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
                        {" "}
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
                              />{" "}
                              <a
                                href="javascript:;"
                                className="input-group-text bg-transparent"
                              >
                                <i className="bx bx-hide"></i>
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
                            {" "}
                            <a href="authentication-forgot-password.html">
                              Forgot Password ?
                            </a>
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
