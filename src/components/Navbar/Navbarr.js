/** @format */

import React from "react";
import "./Navbarr.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Ha_wallet_logo from "../../assets/Ha_Wallet.svg";
import Hamburger from "../../assets/list.svg";

const Navbarr = () => {
  function handleHamburger() {
    document.querySelector(".hamburger").classList.toggle("active");
  }
  return (
    <nav>
      <Navbar expand="lg" className="nav">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Ha_wallet_logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <div onClick={handleHamburger} className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <a className="nav_items" href="#">
                  Home
                </a>
              </Nav.Link>
              <Nav.Link href="#link">
                <a className="nav_items" href="#">
                  Services
                </a>
              </Nav.Link>
              <Nav.Link href="#link">
                <a className="nav_items" href="#">
                  Help
                </a>
              </Nav.Link>
              <Nav.Link href="#link">
                <a className="nav_items log" href="#">
                  Contact
                </a>
              </Nav.Link>
              <span>
                <Nav.Link href="#link">
                  <a className="nav_items" href="#">
                    Login
                  </a>
                </Nav.Link>
                <Nav.Link href="#link">
                  <button>Register</button>
                </Nav.Link>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Navbarr;
