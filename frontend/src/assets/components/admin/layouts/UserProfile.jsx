import "./admin.css";
import { GoGlobe } from "react-icons/go";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import AuthUser from "../../Auth/AuthUser";
import { useEffect, useState } from "react";
import Header from "./Header";
import { toast } from "react-toastify";

const UserProfile = () => {
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
  // const [selectedCity, setSelectedCity] = useState("");
  const { http } = AuthUser();
  const [userInfo, SetUserInfo] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profileForm, setProfileForm] = useState({
    name: "",
    phone: "",
    profile_image: "",
  });
  const [profileImg, setProfileImg] = useState(null);
 
  // const [isPassword, setIsPassword] = useState({
  //   current_password: "",
  //   new_password: "",
  //   confirm_password: "",
  // });

  // Handle changes
  // const handleCityChange = (event) => {
  //   setSelectedCity(event.target.value);
  //   setProfileForm((prevData)=>({...prevData, city: event.target.value}));
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    setProfileImg(e.target.files[0]);
  };

  // const handlePasswordChange = (e) => {
  //   const { name, value } = e.target;
  //   setProfileForm((prevData) => ({ ...prevData, [name]: value }));
  // };

  // Profile Image upload
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();

      form.append("name", profileForm.name);
      form.append("phone", profileForm.phone);

      // if image file exist then append
      if (profileForm.profile_image) {
        form.append("profile_image", profileImg);
      }

      const token =
        localStorage.getItem("access_token") ||
        sessionStorage.getItem("access_token");

      if(!token){
        toast.error("User is not authenticated. Please login again.");
        setIsSubmitting(false);
        return;
      }

      const response = await http.post("profile/update", form, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(`response: ${response.data}`);

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.log(
        `error: ${error.response ? error.response.data : error.message}`
      );
      toast.error("Error occured in profile updation!");
    } finally {
      setIsSubmitting(false);
    }
  };

  // fetch user info
  useEffect(() => {
    const token =
      localStorage.getItem("access_token") ||
      sessionStorage.getItem("access_token");
    if (token) {
      http
        .post(
          "me",
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response);
          SetUserInfo(response.data);
        })
        .catch((error) => {
          console.log(error, "error occured....");
        });
    } else {
      console.log("no token found");
    }
  }, []);

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
                        <h4>{userInfo ? userInfo.name : "Loading..."}</h4>
                        <p className="text-secondary mb-1">
                          {userInfo ? userInfo.role : "Loading..."}
                        </p>
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
                                onChange={handleImageChange}
                              />
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
                                className="form-control"
                                value={profileForm.name}
                                onChange={handleInputChange}
                              />
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
                                value={userInfo ? userInfo.email : "Loading..."}
                                disabled
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
                                className="form-control"
                                value={profileForm.phone}
                                onChange={handleInputChange}
                                placeholder="+92 3xx-xxxxxxx"
                              />
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
                        <form action="">
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Website</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="https://yourwebsite.com/"
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
                                placeholder="https://www.twitter.com/"
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
                                placeholder="https://www.instagram.com/"
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
                                placeholder="https://www.facebook.com/"
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
                                value="Save"
                              />
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
                        <form action="">
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 htmlFor="city">City</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <select id="city" className="form-control">
                                <option value="" disabled>
                                  Select your city
                                </option>
                                {cities.map((city, index) => (
                                  <option key={index} value={city}>
                                    {city}
                                  </option>
                                ))}
                              </select>
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
                                name="shipping_address"
                                className="form-control"
                                placeholder="Bay Area, San Francisco, CA"
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
                                name="billing_address"
                                className="form-control"
                                placeholder="Bay Area, San Francisco, CA"
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
                                value="Change Password"
                              />
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
                        <form action="">
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Current Password</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="https://www.facebook.com/"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">New Password</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="https://www.facebook.com/"
                              />
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Confirm Password</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="https://www.facebook.com/"
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
                                value="Change Password"
                              />
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
          {userInfo && <Header userName={userInfo.name} />}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
