import { LuBell } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import {
  MdOutlineDashboard,
  MdOutlineMonetizationOn,
  MdOutlineClose,
} from "react-icons/md";
import { CiLogout, CiMenuFries } from "react-icons/ci";
import SideBar from "./SideBar";

const Header = () => {
  const [menuOpen, SetMenuOpen] = useState(false);
  const [showDropdown, SetShowDropdown] = useState(false);

  // Toggle for menu
  const handleMenuToggle = () => SetMenuOpen(!menuOpen);

  // handlers fro dropdown
  const handleMouseEnter = () => SetShowDropdown(true);
  const handleMouseLeave = () => SetShowDropdown(false);
  const handleToggleDropdown = () => SetShowDropdown(!showDropdown);

  return (
    <header>
      <div className="topbar d-flex align-items-center">
        <nav className="navbar navbar-expand">
          <div className="mobile-toggle-menu">
            <CiMenuFries
              color="#29456B"
              fontSize={25}
              onClick={handleMenuToggle}
            />
          </div>
          {menuOpen && <SideBar />}
          <div className="search-bar flex-grow-1">
            <div className="position-relative search-bar-box">
              <input
                type="text"
                className="form-control search-control"
                placeholder="Type to search..."
              />
              <span className="position-absolute top-50 search-show translate-middle-y">
                <IoSearchOutline color="#29456B" fontSize={25} />
              </span>
              <span className="position-absolute top-50 search-close translate-middle-y">
                <MdOutlineClose color="#29456B" fontSize={25} />
              </span>
            </div>
          </div>
          <div className="top-menu ms-auto">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item mobile-search-icon">
                <a className="nav-link" href="#">
                  <IoSearchOutline color="#29456B" fontSize={25} />
                </a>
              </li>
              <li className="nav-item dropdown dropdown-large">
                <a
                  className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="alert-count">7</span>
                  <LuBell color="#29456B" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a href="javascript:;">
                    <div className="msg-header">
                      <p className="msg-header-title">Notifications</p>
                      <p className="msg-header-clear ms-auto">
                        Marks all as read
                      </p>
                    </div>
                  </a>
                  <div className="header-notifications-list">
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-primary text-primary">
                          <i className="bx bx-group"></i>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            New Customers
                            <span className="msg-time float-end">
                              14 Sec ago
                            </span>
                          </h6>
                          <p className="msg-info">5 new user registered</p>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-danger text-danger">
                          <i className="bx bx-cart-alt"></i>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            New Orders{" "}
                            <span className="msg-time float-end">
                              2 min ago
                            </span>
                          </h6>
                          <p className="msg-info">
                            You have recived new orders
                          </p>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-success text-success">
                          <i className="bx bx-file"></i>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            24 PDF File
                            <span className="msg-time float-end">
                              19 min ago
                            </span>
                          </h6>
                          <p className="msg-info">The pdf files generated</p>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-warning text-warning">
                          <i className="bx bx-send"></i>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            Time Response{" "}
                            <span className="msg-time float-end">
                              28 min ago
                            </span>
                          </h6>
                          <p className="msg-info">
                            5.1 min avarage time response
                          </p>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-info text-info">
                          <i className="bx bx-home-circle"></i>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            New Product Approved{" "}
                            <span className="msg-time float-end">
                              2 hrs ago
                            </span>
                          </h6>
                          <p className="msg-info">
                            Your new product has approved
                          </p>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-danger text-danger">
                          <i className="bx bx-message-detail"></i>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            New Comments{" "}
                            <span className="msg-time float-end">
                              4 hrs ago
                            </span>
                          </h6>
                          <p className="msg-info">
                            New customer comments recived
                          </p>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-success text-success">
                          <i className="bx bx-check-square"></i>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            Your item is shipped{" "}
                            <span className="msg-time float-end">
                              5 hrs ago
                            </span>
                          </h6>
                          <p className="msg-info">
                            Successfully shipped your item
                          </p>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-primary text-primary">
                          <i className="bx bx-user-pin"></i>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            New 24 authors
                            <span className="msg-time float-end">
                              1 day ago
                            </span>
                          </h6>
                          <p className="msg-info">
                            24 new authors joined last week
                          </p>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-warning text-warning">
                          <i className="bx bx-door-open"></i>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            Defense Alerts{" "}
                            <span className="msg-time float-end">
                              2 weeks ago
                            </span>
                          </h6>
                          <p className="msg-info">
                            45% less alerts last 4 weeks
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <a href="javascript:;">
                    <div className="text-center msg-footer">
                      View All Notifications
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div
            className="user-box dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="d-flex align-items-center nav-link"
              role="button"
              onClick={handleToggleDropdown}
              aria-expanded={showDropdown}
            >
              <img
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                className="user-img"
                alt="user avatar"
              />
              <div className="user-info ps-3">
                <p className="user-name mb-0">User Name</p>
                <p className="designattion mb-0">Seller</p>
              </div>
            </div>
            <ul
              className={`dropdown-menu dropdown-menu-end ${
                showDropdown ? "show" : ""
              }`}
            >
              <li>
                <a className="dropdown-item" href="javascript:;">
                  <i className="bx bx-user"></i>
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="javascript:;">
                  <i className="bx bx-cog"></i>
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="javascript:;">
                  <MdOutlineDashboard color="#29456B" fontSize={25} />
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="javascript:;">
                  <MdOutlineMonetizationOn color="#29456B" fontSize={25} />
                  <span>Earnings</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="javascript:;">
                  <i className="bx bx-download"></i>
                  <span>Downloads</span>
                </a>
              </li>
              <li>
                <div className="dropdown-divider mb-0"></div>
              </li>
              <li>
                <a className="dropdown-item" href="javascript:;">
                  <CiLogout color="#29456B" fontSize={25} />
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
