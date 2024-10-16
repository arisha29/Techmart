import { useState } from "react";
import "./nav2.css";
import {
  Container,
  Nav,
  Form,
  Dropdown,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdHelpCircle } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";

const Navbar2 = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSubDropdown, setShowSubDropdown] = useState(false);
  const [showInput, setShowInput] = useState(false);

  // Handlers for main dropdown (Products)
  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);
  const handleToggleDropdown = () => setShowDropdown(!showDropdown);

  // Handlers for sub dropdown (Accessories)
  const handleSubMouseEnter = () => setShowSubDropdown(true);
  const handleSubMouseLeave = () => setShowSubDropdown(false);

  // Function to handle the click on the search icon button
  const toggleSearchInput = () => {
    setShowInput(!showInput);
  };

  return (
    <Container className="nav2 py-2">
      <div
        className="dropdown mx-3"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Nav.Link
          className="dropdown-toggle fs-6"
          id="productsDropdown2"
          onClick={handleToggleDropdown}
          aria-expanded={showDropdown}
        >
          Products
        </Nav.Link>
        <div
          className={`dropdown-menu ${showDropdown ? "show" : ""}`}
          aria-labelledby="productsDropdown"
        >
          <Nav.Link className="dropdown-item" href="#">
            Laptops
          </Nav.Link>
          <Dropdown.Divider />
          <Nav.Link className="dropdown-item" href="#">
            Smartphones
          </Nav.Link>
          <Dropdown.Divider />
          <Nav.Link className="dropdown-item" href="#">
            Tablets
          </Nav.Link>
          <Dropdown.Divider />
          {/* Nested Dropdown for Accessories */}
          <div
            className="dropdown-submenu"
            onMouseEnter={handleSubMouseEnter}
            onMouseLeave={handleSubMouseLeave}
          >
            <Nav.Link
              className="dropdown-toggle"
              id="accessories"
              aria-expanded={showSubDropdown}
            >
              Accessories
            </Nav.Link>
            <div
              className={`dropdown-menu dropdown-submenu-right ${
                showSubDropdown ? "show" : ""
              }`}
            >
              <Nav.Link className="dropdown-item" href="#">
                Product 1
              </Nav.Link>
              <Dropdown.Divider />
              <Nav.Link className="dropdown-item" href="#">
                Product 2
              </Nav.Link>
              <Dropdown.Divider />
              <Nav.Link className="dropdown-item" href="#">
                Product 3
              </Nav.Link>
              <Dropdown.Divider />
              <Nav.Link className="dropdown-item" href="#">
                Product 4
              </Nav.Link>
            </div>
          </div>
        </div>
      </div>
      <div className="search-input-container">
        <Form.Control
          type="text"
          placeholder="Search for Product"
          id="search-bar"
          className={`search-input ${showInput ? "show" : "hide"}`}
        />
      </div>
      <div className="icons-container">
        <div className="search-icon-container me-3" onClick={toggleSearchInput}>
          <FaSearch fontSize={25} color="#29456B" />
        </div>
        <div>
          <a href="#" className="me-3">
            <FaCartShopping fontSize={25} color="#29456B" />
          </a>
          <a href="#" className="me-3">
            <MdOutlineFavorite fontSize={25} color="#29456B" />
          </a>
          <a href="#" className="me-3">
            <IoMdHelpCircle fontSize={25} color="#29456B" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Navbar2;
