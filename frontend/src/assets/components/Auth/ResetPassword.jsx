import reset from '../../Images/reset-password.jpg';
import { FaArrowLeftLong } from "react-icons/fa6";


const ResetPassword = () => {
  return (
    <div className="wrapper">
      <div className="authentication-reset-password d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <div className="card">
              <div className="row g-0">
                <div className="col-lg-5 border-end">
                  <div className="card-body">
                    <div className="p-5">
                      <h4 className="mt-1 font-weight-bold">
                        Genrate New Password
                      </h4>
                      <p className="text-muted">
                        We received your reset password request. Please enter
                        your new password!
                      </p>
                      <div className="mb-3 mt-5">
                        <label className="form-label">New Password</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter new password"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Confirm password"
                        />
                      </div>
                      <div className="d-grid gap-2">
                        <button
                          type="button"
                          className="btn btn-primary"
                          id="custom-bg-btn"
                        >
                          Change Password
                        </button>
                        <button
                          href="authentication-signin.html"
                          className="d-flex align-items-center justify-content-center gap-2 fs-6 py-2 rounded mt-2"
                          id="custom-btn"
                        >
                          <FaArrowLeftLong />
                          <span>Back to Login</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <img
                    src={reset}
                    className="card-img login-img h-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
