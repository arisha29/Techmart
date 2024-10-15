import { FaArrowLeftLong } from "react-icons/fa6";
import svg from "../../Images/forgot-lock.png";

const ForgotPassword = () => {
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
                  <h4 className="mt-5 font-weight-bold">Forgot Password?</h4>
                  <p className="text-muted">
                    Enter your registered email ID to reset the password
                  </p>
                  <div className="my-4">
                    <label className="form-label">Email id</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="example@user.com"
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      className="text-center w-100 fs-5 py-2 mb-3 rounded text-white"
                      type="button"
                      id="custom-bg-btn"
                    >
                      Send
                    </button>
                    <button
                      href="authentication-signin.html"
                      className="d-flex align-items-center justify-content-center gap-2 fs-6 py-2 rounded"
                      id="custom-btn"
                    >
                      <FaArrowLeftLong />
                      <span>Back to Login</span>
                    </button>
                  </div>
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
