import React, { useState, useEffect } from "react";
import { Nav, Navbar, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarTop.css";

function NavbarTop() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  //handler for login
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  //handler for signup
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  const walletUrl = "/wallet";
  let currentPath = window.location.pathname;
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (currentPath === walletUrl) {
      setHide(true);
    } else {
      setHide(false);
    }
  }, [currentPath]);

  return (
    <Navbar className="navBar" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand>
        <Link to="/">
          <img src="images/logo.png" alt="playtoshi" className="logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-md-3">
          <Nav.Link href="#home">MARKETPLACE</Nav.Link>
          <Nav.Link href="#link">COMMUNITY</Nav.Link>
          <Nav.Link href="#link" className="mr-md-2">
            HELP
          </Nav.Link>
          {!hide ? (
            <Link to="/wallet">
              <Button variant="outline-warning"> Connect your wallet </Button>
            </Link>
          ) : null}
        </Nav>
        <Button
          variant="outline-primary"
          className="mr-sm-2"
          onClick={handleShowLogin}
        >
          Login
        </Button>{" "}
        <Button variant="outline-success" onClick={handleShowSignup}>
          Sign Up
        </Button>{" "}
      </Navbar.Collapse>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={handleCloseLogin} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Link to="/user">
              <Button
                variant="primary"
                type="submit"
                onClick={handleCloseLogin}
              >
                Login
              </Button>
            </Link>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Signup modal */}
      <Modal show={showSignup} onHide={handleCloseSignup} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Enter Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                required
                className="mb-sm-2"
              />
              <Form.Control type="text" placeholder="Last Name" required />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Retype Password"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="I Agree the terms and conditions"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSignup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default NavbarTop;
