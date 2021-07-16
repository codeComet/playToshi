import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarUser() {
  return (
    <div>
      <Navbar className="navBar" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand>
          <Link to="/">
            <img src="images/logo.png" alt="playtoshi" className="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-md-3">
            <Nav.Link href="#home">Explore</Nav.Link>
            <Nav.Link href="#link">My Items</Nav.Link>
            <Nav.Link href="#link">Following</Nav.Link>
            <Nav.Link href="#link">Activity</Nav.Link>
            <Button variant="outline-primary" className="mr-sm-2">
              Create NFT
            </Button>
            <div className="balance">
              <img src="" alt="coin" />
              <p>13,412 BNB</p>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarUser;
