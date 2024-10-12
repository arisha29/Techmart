import { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import { PiSignInLight } from "react-icons/pi";
import { MdOutlineAddCircle } from "react-icons/md";
import Image from "react-bootstrap/Image";

function BasicExample() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleToggleDropdown = () => setShowDropdown(!showDropdown);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <a href="#">
          <Image src="assets/Images/Logo.png" width={80} />
        </a>
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          Techmart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div
              className="mb-2 fw-medium"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {["down-centered"].map((direction) => (
                <DropdownButton
                  as={ButtonGroup}
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  show={showDropdown}
                  onClick={handleToggleDropdown}
                  title="Products"
                >
                  <NavDropdown.Item href="#action/3.1" className="fw-medium">
                    Smartphones
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" className="fw-medium">
                    Laptops
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" className="fw-medium">
                    Tablets
                  </NavDropdown.Item>
                  <div className="mb-2 fw-medium">
                    {["end"].map((direction) => (
                      <DropdownButton
                        as={ButtonGroup}
                        key={direction}
                        id={`dropdown-button-drop-${direction}`}
                        drop={direction}
                        // variant="secondary"
                        title={"Accessories"}
                      >
                        <Dropdown.Item eventKey="1" className="fw-medium">
                          Laptops
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2" className="fw-medium">
                          Laptops
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" className="fw-medium">
                          Laptops
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="4" className="fw-medium">
                          Laptops
                        </Dropdown.Item>
                      </DropdownButton>
                    ))}
                  </div>
                </DropdownButton>
              ))}
            </div>
          </Nav>
          <Nav.Link
            href="#home"
            className="d-flex align-items-center gap-1 me-4 fw-medium"
            id="text-color"
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
