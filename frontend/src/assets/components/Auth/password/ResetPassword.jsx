import "./password.css";
import reset from "../../../Images/reset-password.jpg";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthUser from "../AuthUser";

const ResetPassword = () => {
  const { http } = AuthUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = new URLSearchParams(location.search);
  const [formData, setFormData] = useState({
    token: searchParams.get("token"),
    email: searchParams.get("email"),
    password: "",
    password_confirmation: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ensure password match before submitting
    if (formData.password !== formData.password_confirmation) {
      toast.error("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await http.post("reset/password", {
        token: formData.token,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
      });

      toast.success(response.data.message);

      setFormData({
        token: "",
        email: "",
        password: "",
        password_confirmation: "",
      });

      navigate("/login");
    } catch (error) {
      toast.error(`${error} || An error occurred. Please try again later.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-forgot">
      <div className="wrapper">
        <div className="authentication-reset-password">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="card">
                <div className="row g-0">
                  <div className="col-lg-6 border-end">
                    <div className="card-body">
                      <div className="p-5">
                        <h4 className="mt-1 font-weight-bold">
                          Genrate New Password
                        </h4>
                        <p className="text-muted">
                          We received your reset password request. Please enter
                          your new password!
                        </p>
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3 mt-5">
                            <label className="form-label">Email</label>
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              value={formData.email || ""}
                              disabled
                            />
                          </div>
                          <div className="mb-3 d-none">
                            <label className="form-label">Token</label>
                            <input
                              type="text"
                              name="token"
                              className="form-control"
                              value={formData.token || ""}
                              disabled
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">New Password</label>
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              placeholder="Enter new password"
                              value={formData.password}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              name="password_confirmation"
                              className="form-control"
                              placeholder="Confirm password"
                              value={formData.password_confirmation}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="d-grid gap-2 mt-4">
                            <button
                              type="submit"
                              className="btn btn-primary"
                              id="custom-bg-btn"
                              disabled={isSubmitting}
                            >
                              {isSubmitting
                                ? "Submitting..."
                                : "Change Password"}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <img
                      src={reset}
                      className="img-fluid card-img login-img h-100"
                      alt="..."
                    />
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

export default ResetPassword;
