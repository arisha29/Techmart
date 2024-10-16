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
import { PiSignInLight } from "react-icons/pi";
import { MdOutlineAddCircle, MdOutlineFavorite } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdHelpCircle } from "react-icons/io";
import logo from "../../Images/Logo.png";

const Navigationbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSubDropdown, setShowSubDropdown] = useState(false);

  // Handlers for main dropdown (Products)
  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);
  const handleToggleDropdown = () => setShowDropdown(!showDropdown);

  // Handlers for sub dropdown (Accessories)
  const handleSubMouseEnter = () => setShowSubDropdown(true);
  const handleSubMouseLeave = () => setShowSubDropdown(false);

  return (
    <>
      <Navbar expand="lg" className="nav">
        <Container>
          <a href="#">
            <Image src={logo} width={80} />
          </a>
          <Navbar.Brand href="#home" className="fw-bold fs-4" id="site-name">
            Techmart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>

            <Nav.Link
              href="#home"
              className="d-flex align-items-center gap-1 me-2 fw-medium"
              id="sign-in"
            >
              <PiSignInLight fontSize={25} color="#29456B" />
              Sign In
            </Nav.Link>
            <Nav.Link href="#link">
              <Button
                className="d-flex align-items-center gap-2 fw-medium"
                id="custom-btn"
              >
                <MdOutlineAddCircle fontSize={25} />
                Add Product
              </Button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Search & icons */}

      <Navbar expand="lg" className="nav">
        <Container>
          <div
            className="dropdown mx-3"
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
          <Form.Control
            type="text"
            placeholder="Search for Product"
            id="search-bar"
          />
          <div className="mx-3">
            <a href="#" className="me-3">
              <FaCartShopping fontSize={25} color="#29456B" />
            </a>
            <a href="#" className="me-3">
              <MdOutlineFavorite fontSize={25} color="#29456B" />
            </a>
            <a href="#">
              <IoMdHelpCircle fontSize={25} color="#29456B" />
            </a>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
