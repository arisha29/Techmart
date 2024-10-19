import { useState } from "react";
import "./navbar.css";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Image,
  Dropdown,
} from "react-bootstrap";
import { PiSignInLight } from "react-icons/pi";
import { MdOutlineAddCircle } from "react-icons/md";
import logo from "../../../Images/Logo.png";

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
    <Navbar expand="lg" className="nav">
      <Container className="d-flex align-items-center justify-content-between px-0">
        <div className="tm-sm-nav px-0">
          <Navbar.Brand href="#home" className="fw-bold fs-4" id="site-name">
            <Image src={logo} className="logo-img img-fluid" />
            <span className="">Techmart</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div
              className="dropdown mx-3 "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Nav.Link
                className="dropdown-toggle fs-6"
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
            className="sign-in-btn d-flex align-items-center gap-1"
            id="sign-in"
          >
            <PiSignInLight fontSize={25} color="#29456B" />
            Sign In
          </Nav.Link>
          <Nav.Link href="#link">
            <Button
              className="add-product-btn d-flex align-items-center gap-1"
              id="custom-btn"
            >
              <MdOutlineAddCircle fontSize={25} />
              Add Product
            </Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
