import { useState } from "react";
import { Form, Dropdown, Nav } from "react-bootstrap";
import { IoSearchOutline, IoPersonOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import logo from "../../../Images/Logo.png";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showInput, setShowInput] = useState(false);

  // Handlers for main dropdown (Products)
  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);
  const handleToggleDropdown = () => setShowDropdown(!showDropdown);

  // Function to handle the click on the search icon button
  const toggleSearchInput = () => {
    setShowInput(!showInput);
  };

  return (
    <nav className="topbar">
      <div className="admin-nav">
        <div className="d-lg-none">
          <img src={logo} alt="" width={50} />
        </div>
        <div className="admin-search-input-container">
          <Form.Control
            type="email"
            placeholder="Type to search..."
            className={`search-input ${showInput ? "show" : "hide"}`}
          />
        </div>
        <div className="admin-search-icon" onClick={toggleSearchInput}>
          <IoSearchOutline fontSize={25} />
        </div>
        <div className="d-flex align-items-center">
          <div className="divider"></div>
          <div
            className="dropdown mx-3 p-0"
            id="userDropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Nav.Link
              className="dropdown-toggle fs-6 px-0 mb-0 user-info"
              onClick={handleToggleDropdown}
              aria-expanded={showDropdown}
            >
              <img
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                className="user-img me-2"
                alt="user avatar"
              />
              <span>User Name</span>
            </Nav.Link>
            <div
              className={`dropdown-menu ${showDropdown ? "show" : ""}`}
              aria-labelledby="productsDropdown"
            >
              <Nav.Link
                className="dropdown-item d-flex align-items-center gap-2"
                href="#"
              >
                <IoPersonOutline fontSize={20} color="#29456B" />
                <span>Profile</span>
              </Nav.Link>
              <Nav.Link
                className="dropdown-item d-flex align-items-center gap-2"
                href="#"
              >
                <MdOutlineDashboard fontSize={20} color="#29456B" />
                <span>Dashboard</span>
              </Nav.Link>
              <Dropdown.Divider />
              <Nav.Link
                className="dropdown-item d-flex align-items-center gap-2"
                href="#"
              >
                <CiLogout fontSize={20} color="#29456B" />
                <span>Logout</span>
              </Nav.Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
