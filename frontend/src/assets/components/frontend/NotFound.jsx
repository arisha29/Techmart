import error from '../../Images/404-error.gif';
import { LuHome } from "react-icons/lu";

const NotFound = () => {
  return (
    <div className="error-404 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="card py-5">
          <div className="row">
            <div className="col-lg-5 col-xl-5 mx-auto">
              <div className="card-body p-4">
                <h1 className="display-1 text-center">
                  <span className="text-primary">4</span>
                  <span className="text-danger">0</span>
                  <span className="text-success">4</span>
                </h1>
                <h2 className="font-weight-bold display-4 text-center">Lost in Space</h2>
                <p className='text-center'>
                  You have reached the edge of the universe. The page you
                  requested could not be found. Dont'worry and return to the
                  previous page.
                </p>
                <div className="mt-5 text-center">
                  <a
                    href="javascript:;"
                    className="btn btn-primary btn-lg px-md-5 d-flex align-items-center justify-content-center gap-2 w-100"
                    id="custom-bg-btn"
                  >
                    <LuHome />
                    <span>Go Home</span>
                  </a>
                  {/* <a
                    href="javascript:;"
                    className="btn btn-outline-dark btn-lg ms-3 px-md-5 "
                    id="custom-btn"
                  >
                    Back
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-xl-7 text-center">
              <img
                src={error}
                width="400"
                className="img-fluid"
                alt="404 svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
