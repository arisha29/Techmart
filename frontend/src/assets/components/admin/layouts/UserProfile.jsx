import './admin.css';
import { GoGlobe } from "react-icons/go";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const UserProfile = () => {
  return (
    <>
      <div className="wrapper">
        <div className="page-wrapper">
          <div className="page-content">
            <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
              <div className="breadcrumb-title pe-3">User Profile</div>
              <div className="ps-3">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0 p-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      User Profile
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="row justify-content-around px-2 profile-container">
              <div className="col-md-4 col-lg-4 px-0">
                <div className="card border-0">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src="https://via.placeholder.com/200x200"
                        alt="Admin"
                        className="img-fluid rounded-circle"
                        width="110"
                      />
                      <div className="my-3">
                        <h4>User Name</h4>
                        <p className="text-secondary mb-1">User Status</p>
                        <p className="text-muted font-size-sm">location</p>
                      </div>
                    </div>
                    <hr className="my-0" />
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap py-3">
                        <h6 className="mb-0">
                          <GoGlobe
                            fontSize={20}
                            color="#29456B"
                            className="me-2"
                          />
                          Website
                        </h6>
                        <span className="text-secondary">
                          https://codervent.com
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap py-3">
                        <h6 className="mb-0">
                          <RiTwitterXLine
                            fontSize={20}
                            color="#29456B"
                            className="me-2"
                          />
                          Twitter
                        </h6>
                        <span className="text-secondary">@codervent</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap py-3">
                        <h6 className="mb-0">
                          <FaInstagram
                            fontSize={20}
                            color="#29456B"
                            className="me-2"
                          />
                          Instagram
                        </h6>
                        <span className="text-secondary">codervent</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap py-3">
                        <h6 className="mb-0">
                          <FaFacebookF
                            fontSize={20}
                            color="#29456B"
                            className="me-2"
                          />
                          Facebook
                        </h6>
                        <span className="text-secondary">codervent</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-7 px-0">
                <div className="card border-0">
                  <div className="card-body">
                    <ul className="nav nav-tabs nav-primary" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active"
                          data-bs-toggle="tab"
                          href="#primaryhome"
                          role="tab"
                          aria-selected="true"
                        >
                          <div className="d-flex align-items-center">
                            <div className="tab-title">Info</div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#primaryprofile"
                          role="tab"
                          aria-selected="false"
                        >
                          <div className="d-flex align-items-center">
                            <div className="tab-title">Links</div>
                          </div>
                        </a>
                      </li>
                      {/* <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#primarycontact"
                          role="tab"
                          aria-selected="false"
                        >
                          <div className="d-flex align-items-center">
                            <div className="tab-icon">
                              <i className="bx bx-microphone font-18 me-1"></i>
                            </div>
                            <div className="tab-title">Contact</div>
                          </div>
                        </a>
                      </li> */}
                    </ul>
                    <div className="tab-content py-3">
                      <div
                        className="tab-pane fade show active"
                        role="tabpanel"
                        id="primaryhome"
                      >
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Full Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              value="John Doe"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              value="john@example.com"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Phone</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              value="(239) 816-9029"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Mobile</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              value="(320) 380-4539"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Postal Code</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              value="23566"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Shipping Address</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              value="Bay Area, San Francisco, CA"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Billing Address</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              value="Bay Area, San Francisco, CA"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3"></div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="button"
                              id="custom-bg-btn"
                              className="btn text-white px-5"
                              value="Save Changes"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        role="tabpanel"
                        id="primaryprofile"
                      >
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Website</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              value="(320) 380-4539"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Twitter</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              value="(320) 380-4539"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Instagram</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              value="(320) 380-4539"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Facebook</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input
                              type="text"
                              className="form-control"
                              value="(320) 380-4539"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-3"></div>
                          <div className="col-sm-9 text-secondary">
                            <button
                              id="custom-bg-btn"
                              className="btn text-white px-5 custom-btn"
                            >
                              Save
                            </button>
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
      </div>
    </>
  );
};

export default UserProfile;
