import { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { MdLogout } from "react-icons/md";

function AdminNavigation() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleToggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <a href="#">
          <Image src="assets/Images/Logo.png" width={80} />
        </a>
        <Navbar.Brand href="#home" className="text-white fs-4 fw-bold">
          Techmart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
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
                title={
                  <span>
                    <Image src="holder.js/171x180" alt="user" roundedCircle />
                    {"userName"}
                  </span>
                }
              >
                <Dropdown.Item eventKey="1" className="fw-medium">
                  User Name
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="1" className="fw-medium">
                  My Profile
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4" className="fw-medium">
                  <MdLogout />
                  Sign Out
                </Dropdown.Item>
              </DropdownButton>
            ))}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavigation;
