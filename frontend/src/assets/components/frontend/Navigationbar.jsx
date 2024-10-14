import { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Image,
  Form,
  Dropdown,
} from "react-bootstrap";
import { PiSignInLight, PiSignOutLight } from "react-icons/pi";
import { MdOutlineAddCircle, MdOutlineFavorite } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdHelpCircle } from "react-icons/io";

const Navigationbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSubDropdown, setShowSubDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  // Handlers for main dropdown (Products)
  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);
  const handleToggleDropdown = () => setShowDropdown(!showDropdown);

  // Handlers for sub dropdown (Accessories)
  const handleSubMouseEnter = () => setShowSubDropdown(true);
  const handleSubMouseLeave = () => setShowSubDropdown(false);

  // Handlers for user dropdown
  const handleUserMouseEnter = () => setShowUserDropdown(true);
  const handleUserMouseLeave = () => setShowUserDropdown(false);
  const handleToggleUserDropdown = () => setShowDropdown(!showUserDropdown);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <a href="#">
            <Image src="assets/Images/Logo.png" width={80} />
          </a>
          <Navbar.Brand href="#home" className="fw-bold fs-4" id="site-name">
            Techmart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div
                className="dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Nav.Link
                  className="dropdown-toggle fw-medium"
                  id="productsDropdown"
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
            </Nav>

            <Nav.Link
              href="#home"
              className="d-flex align-items-center gap-1 me-4 fw-medium"
              id="sign-in"
            >
              <PiSignInLight fontSize={25} color="#29456B" />
              Sign In
            </Nav.Link>
            <Nav.Link href="#link">
              <Button
                className="d-flex align-items-center gap-2 fw-medium"
                id="add-product-btn"
              >
                <MdOutlineAddCircle fontSize={25} />
                Add Product
              </Button>
            </Nav.Link>

            <div
              id="user-profile-btn"
              className="dropdown user-dropdown rounded"
              onMouseEnter={handleUserMouseEnter}
              onMouseLeave={handleUserMouseLeave}
            >
              <Nav.Link
                className="dropdown-toggle fw-medium"
                id="userDropdown"
                onClick={handleToggleUserDropdown}
                aria-expanded={showUserDropdown}
              >
                <Image
                  src="https://via.placeholder.com/40"
                  alt="user"
                  width={30}
                  className="user-img me-2"
                  roundedCircle
                />
                <span>User Name</span>
              </Nav.Link>
              <div
                className={`dropdown-menu ${showUserDropdown ? "show" : ""}`}
                id="user-dropdown"
                aria-labelledby="userDropdown"
              >
                <p className="dropdown-item cursor-pointer">User Name</p>
                <Dropdown.Divider />
                <Nav.Link className="dropdown-item" href="#">
                  My Profile
                </Nav.Link>
                <Dropdown.Divider />
                <Nav.Link
                  className="dropdown-item d-flex align-items-center gap-1 me-4 fw-medium"
                  href="#home"
                  id="sign-in"
                >
                  <PiSignOutLight fontSize={25} color="#29456B" />
                  Sign Out
                </Nav.Link>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Search & icons */}

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Form.Control
            type="text"
            placeholder="Search for Product"
            id="search-bar"
          />
          <a href="#" className="me-2">
            <FaCartShopping fontSize={25} color="#29456B" />
          </a>
          <a href="#" className="me-2">
            <MdOutlineFavorite fontSize={25} color="#29456B" />
          </a>
          <a href="#">
            <IoMdHelpCircle fontSize={25} color="#29456B" />
          </a>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
