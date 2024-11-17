import "./admin.css";
import { GoGlobe } from "react-icons/go";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import AuthUser from "../../Auth/AuthUser";
import { useEffect, useState } from "react";
// import Header from "./Header";
import { toast } from "react-toastify";

const cities = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Multan",
  "Peshawar",
  "Quetta",
  "Faisalabad",
  "Sialkot",
  "Gujranwala",
  "Hyderabad",
  "Sukkur",
  "Bahawalpur",
  "Guwadar",
  "Mardan",
  "Swat",
  "Abbottabad",
  "Jhelum",
  "Murree",
];

const UserProfile = () => {
  const { http } = AuthUser();
  const token =
    localStorage.getItem("access_token") ||
    sessionStorage.getItem("access_token");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [profileForm, setProfileForm] = useState({
    name: "",
    phone: "",
    profile_image: null,
  });
  const [linksForm, setLinksForm] = useState({
    website: "",
    facebook: "",
    instagram: "",
    twitter: "",
  });
  const [addressForm, setAddressForm] = useState({
    country: "Pakistan",
    city: "",
    zip_code: "",
    shipping_address: "",
    billing_address: "",
  });
  const [isPassword, setIsPassword] = useState({
    current_password: "",
    password: "",
    password_confirmation: "",
  });
  const urlRegex = /^(https?:\/\/(?:www\.)?[a-zA-Z0-9./-]+)$/;

  // validation function
  const validateFields = (form, rules) => {
    const newErrors = {};
    for (const [key, value] of Object.entries(form)) {
      if (rules[key]?.required && !value) {
        newErrors[key] = `${key.replace("_", "")} is required.`;
      }
      if (rules[key]?.regex && value && !rules[key].regex.test(value)) {
        newErrors[key] = rules[key].message;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Api request handler
  const handleApiRequest = async (url, formData, resetForm) => {
    setIsSubmitting(true);

    try {
      if (!token)
        throw new Error("User is not authenticated. Please login again.");

      const response = await http.post(url, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success(response.data.message || "operation successful!");
      if (resetForm) resetForm();
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // profile form submission
  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    const isValid = validateFields(profileForm, {
      name: { required: true },
      phone: {
        regex: /^\+92\s3\d{2}-\d{7}$/,
        message: "Invalid phone format (e.g., +92 312 4567891).",
      },
    });

    if (!isValid) return;

    const formData = new FormData();

    Object.entries(profileForm).forEach(([key, value]) =>
      formData.append(key, value)
    );
    handleApiRequest("profile/update", formData, () =>
      setProfileForm({ name: "", phone: "", profile_image: null })
    );
  };

  // links form submission
  const handleUserLinks = async (e) => {
    e.preventDefault();

    const isValid = validateFields(linksForm, {
      website: { regex: urlRegex, message: "Invalid URL format." },
      facebook: { regex: urlRegex, message: "Invalid URL format." },
      instagram: { regex: urlRegex, message: "Invalid URL format." },
      twitter: { regex: urlRegex, message: "Invalid URL format." },
    });

    if (!isValid) return;

    handleApiRequest("user-links", linksForm, () =>
      setLinksForm({ website: "", facebook: "", instagram: "", twitter: "" })
    );
  };

  // Address form submission
  const handleUserAddress = async (e) => {
    e.preventDefault();

    const isValid = validateFields(addressForm, {
      city: { required: true },
      zip_code: { required: true },
      shipping_address: { required: true },
      billing_address: { required: true },
    });

    if (!isValid) return;

    handleApiRequest("user-address", addressForm, () =>
      setAddressForm({
        city: "",
        zip_code: "",
        shipping_address: "",
        billing_address: "",
      })
    );
  };

  // Password form submission
  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    const isValid = validateFields(isPassword, {
      current_password: {
        required: true,
        message: "The current password is incorrect.",
      },
      password: {
        required: true,
        message: "Password must be at least 8 characters long.",
      },
      password_confirmation: { required: true },
    });

    if (!isValid || isPassword.password !== isPassword.password_confirmation) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password_confirmation: "Password do not match.",
      }));
      return;
    }

    handleApiRequest("update-password", isPassword, () =>
      setIsPassword({
        current_password: "",
        password: "",
        password_confirmation: "",
      })
    );
  };

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
                        <h4>user name</h4>
                        <p className="text-secondary mb-1">status</p>
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
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#primaryaddress"
                          role="tab"
                          aria-selected="false"
                        >
                          <div className="d-flex align-items-center">
                            <div className="tab-icon">
                              {/* <i className="bx bx-microphone font-18 me-1"></i> */}
                            </div>
                            <div className="tab-title">Addresses</div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#primarypassword"
                          role="tab"
                          aria-selected="false"
                        >
                          <div className="d-flex align-items-center">
                            <div className="tab-icon">
                              {/* <i className="bx bx-microphone font-18 me-1"></i> */}
                            </div>
                            <div className="tab-title">Passwords</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                    {/* profile form */}
                    <div className="tab-content py-3">
                      <div
                        className="tab-pane fade show active"
                        role="tabpanel"
                        id="primaryhome"
                      >
                        <form onSubmit={handleProfileUpdate}>
                          <div className="row mb-3">
                            <h6 className="col-sm-3">Profile Image</h6>
                            <div className="col-sm-9">
                              <input
                                type="file"
                                className="form-control"
                                onChange={(e) =>
                                  setProfileForm({
                                    ...profileForm,
                                    profile_image: e.target.files[0],
                                  })
                                }
                              />
                              {errors.profile_image && (
                                <small className="text-danger">
                                  {errors.profile_image}
                                </small>
                              )}
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Full Name</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <input
                                type="text"
                                name="name"
                                className={`form-control ${
                                  errors.name ? "is-invalid" : ""
                                }`}
                                placeholder="Enter your username"
                                value={profileForm.name}
                                onChange={(e) =>
                                  setProfileForm({
                                    ...profileForm,
                                    name: e.target.value,
                                  })
                                }
                                required
                              />
                              {errors.name && (
                                <small className="text-danger">
                                  {errors.name}
                                </small>
                              )}
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Email</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                // value={userInfo ? userInfo.email : "Loading..."}
                                // disabled
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
                                name="phone"
                                className={`form-control ${
                                  errors.phone ? "is-invalid" : ""
                                }`}
                                value={profileForm.phone}
                                onChange={(e) =>
                                  setProfileForm({
                                    ...profileForm,
                                    phone: e.target.value,
                                  })
                                }
                                placeholder="+92 3xx-xxxxxxx"
                              />
                              {errors.phone && (
                                <small className="text-danger">
                                  {errors.phone}
                                </small>
                              )}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-9 text-secondary">
                              <button
                                type="submit"
                                className="btn text-white d-flex justify-content-center align-items-center gap-2"
                                id="custom-bg-btn"
                                disabled={isSubmitting}
                              >
                                {isSubmitting
                                  ? "Submitting..."
                                  : "Save Changes"}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* links tab */}
                      <div
                        className="tab-pane fade"
                        role="tabpanel"
                        id="primaryprofile"
                      >
                        <form onSubmit={handleUserLinks}>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Website</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <input
                                type="url"
                                name="website"
                                className="form-control"
                                placeholder="https://www.example.com"
                                value={linksForm.website}
                                onChange={(e) =>
                                  setLinksForm({
                                    ...linksForm,
                                    website: e.target.value,
                                  })
                                }
                              />
                              {errors.website && (
                                <small className="text-danger">
                                  {errors.website}
                                </small>
                              )}
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Facebook</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <input
                                type="url"
                                name="facebook"
                                className="form-control"
                                placeholder="https://www.facebook.com/your-username"
                                value={linksForm.facebook}
                                onChange={(e) =>
                                  setLinksForm({
                                    ...linksForm,
                                    facebook: e.target.value,
                                  })
                                }
                              />
                              {errors.facebook && (
                                <small className="text-danger">
                                  {errors.facebook}
                                </small>
                              )}
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Instagram</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <input
                                type="url"
                                name="instagram"
                                className="form-control"
                                placeholder="https://www.instagram.com/your-username"
                                value={linksForm.instagram}
                                onChange={(e) =>
                                  setLinksForm({
                                    ...linksForm,
                                    instagram: e.target.value,
                                  })
                                }
                              />
                              {errors.instagram && (
                                <small className="text-danger">
                                  {errors.instagram}
                                </small>
                              )}
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Twitter</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <input
                                type="url"
                                name="twitter"
                                className="form-control"
                                placeholder="https://www.twitter.com/your-username"
                                value={linksForm.twitter}
                                onChange={(e) =>
                                  setLinksForm({
                                    ...linksForm,
                                    twitter: e.target.value,
                                  })
                                }
                              />
                              {errors.twitter && (
                                <small className="text-danger">
                                  {errors.twitter}
                                </small>
                              )}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-9 text-secondary">
                              <button
                                type="submit"
                                className="btn text-white d-flex justify-content-center align-items-center gap-2"
                                id="custom-bg-btn"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? "Submitting..." : "Save Links"}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* Address tab */}
                      <div
                        className="tab-pane fade"
                        role="tabpanel"
                        id="primaryaddress"
                      >
                        <form onSubmit={handleUserAddress}>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 htmlFor="city">Country</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <input
                                type="text"
                                name="country"
                                className="form-control"
                                placeholder="your country"
                                value={addressForm.country}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 htmlFor="city">City</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <select
                                id="city"
                                className="form-control"
                                value={addressForm.city}
                                onChange={(e) =>
                                  setAddressForm({
                                    ...addressForm,
                                    city: e.target.value,
                                  })
                                }
                                required
                              >
                                <option value="" disabled>
                                  Select your city
                                </option>
                                {cities.map((city, index) => (
                                  <option key={index} value={city}>
                                    {city}
                                  </option>
                                ))}
                              </select>
                              {errors.city && (
                                <small className="text-danger">
                                  {errors.city}
                                </small>
                              )}
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Postal Code</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <input
                                type="number"
                                name="zip_code"
                                className="form-control"
                                placeholder="23566"
                                value={addressForm.zip_code}
                                onChange={(e) =>
                                  setAddressForm({
                                    ...addressForm,
                                    zip_code: e.target.value,
                                  })
                                }
                              />
                              {errors.zip_code && (
                                <small className="text-danger">
                                  {errors.zip_code}
                                </small>
                              )}
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Shipping Address</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <input
                                type="text"
                                name="shipping_address"
                                className="form-control"
                                placeholder="Bay Area, San Francisco, CA"
                                value={addressForm.shipping_address}
                                onChange={(e) =>
                                  setAddressForm({
                                    ...addressForm,
                                    shipping_address: e.target.value,
                                  })
                                }
                              />
                              {errors.shipping_address && (
                                <small className="text-danger">
                                  {errors.shipping_address}
                                </small>
                              )}
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Billing Address</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <input
                                type="text"
                                name="billing_address"
                                className="form-control"
                                placeholder="Bay Area, San Francisco, CA"
                                value={addressForm.billing_address}
                                onChange={(e) =>
                                  setAddressForm({
                                    ...addressForm,
                                    billing_address: e.target.value,
                                  })
                                }
                              />
                              {errors.billing_address && (
                                <small className="text-danger">
                                  {errors.billing_address}
                                </small>
                              )}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-9 text-secondary">
                              <button
                                type="submit"
                                className="btn text-white d-flex justify-content-center align-items-center gap-2"
                                id="custom-bg-btn"
                                disabled={isSubmitting}
                              >
                                {isSubmitting
                                  ? "Submitting..."
                                  : "Save Address"}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* password tab */}
                      <div
                        className="tab-pane fade"
                        role="tabpanel"
                        id="primarypassword"
                      >
                        <form onSubmit={handleUpdatePassword}>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Current Password</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <input
                                type="password"
                                name="current_password"
                                className="form-control"
                                placeholder="Enter your current password"
                                value={isPassword.current_password}
                                onChange={(e) =>
                                  setIsPassword({
                                    ...isPassword,
                                    current_password: e.target.value,
                                  })
                                }
                                required
                              />
                              {errors.current_password && (
                                <small className="text-danger">
                                  {errors.current_password}
                                </small>
                              )}
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">New Password</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter a new password"
                                value={isPassword.password}
                                onChange={(e) =>
                                  setIsPassword({
                                    ...isPassword,
                                    password: e.target.value,
                                  })
                                }
                                required
                              />
                              {errors.password && (
                                <small className="text-danger">
                                  {errors.password}
                                </small>
                              )}
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Confirm Password</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <input
                                type="password"
                                name="password_confirmation"
                                className="form-control"
                                placeholder="Confirm your password"
                                value={isPassword.password_confirmation}
                                onChange={(e) =>
                                  setIsPassword({
                                    ...isPassword,
                                    password_confirmation: e.target.value,
                                  })
                                }
                                required
                              />
                              {errors.password_confirmation && (
                                <small className="text-danger">
                                  {errors.password_confirmation}
                                </small>
                              )}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-9 text-secondary">
                              <button
                                type="submit"
                                className="btn text-white d-flex justify-content-center align-items-center gap-2"
                                id="custom-bg-btn"
                                disabled={isSubmitting}
                              >
                                {isSubmitting
                                  ? "Submitting..."
                                  : "Change Password"}
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
    </>
  );
};

export default UserProfile;
