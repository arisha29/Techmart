import "./password.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import svg from "../../../Images/forgot-lock.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import AuthUser from "../AuthUser";

const ForgotPassword = () => {
  const { http } = AuthUser();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    if (!email) {
      toast.error("Please enter an valid email address.");
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail) return;

    setLoading(true);

    try {
      const response = await http.post("/forgot-password", { email });

      toast.success(
        response.data.message || "Password reset link sent to your email."
      );

      setEmail("");

    } catch (error) {

      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-forgot">
        <div className="wrapper">
          <div className="authentication-forgot d-flex align-items-center justify-content-center">
            <div className="card forgot-box">
              <div className="card-body">
                <div className="p-4 rounded border">
                  <div className="text-center">
                    <img src={svg} width="150" alt="" />
                  </div>
                  <h4 className="mt-5 font-weight-bold text-center">
                    Forgot Password?
                  </h4>
                  <p className="text-muted">
                    Enter your registered email ID to reset the password
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="my-4">
                      <label className="form-label">Email id</label>
                      <input
                        type="email"
                        className="form-control form-control-lg fs-6"
                        placeholder="example@user.com"
                        name="email"
                        onChange={handleEmailChange}
                      />
                    </div>
                    <div className="d-grid gap-2">
                      <button
                        type="submit"
                        className="btn text-center w-100 fs-5 py-2 mb-3 rounded text-white"
                        id="custom-bg-btn"
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "Send"}
                      </button>
                      <NavLink to="/login">
                        <button
                          className="w-100 d-flex align-items-center justify-content-center gap-2 fs-6 py-2 rounded"
                          id="custom-btn"
                        >
                          <FaArrowLeftLong />
                          <span>Back to Login</span>
                        </button>
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
