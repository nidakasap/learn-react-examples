import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../img/logo.png";
import { Link, NavLink } from "react-router-dom";
const MyNavbar = () => {
  return (
    <Navbar expand="md" className="bg-light">
      <Container>
        <Link to="/">
          <img src={logo} width="150px" alt="a" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              className="nav-link"
              to="/"
              style={({ isActive }) => ({ color: isActive && "red" })}
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              to="/teacher"
              style={({ isActive }) => ({ fontSize: isActive && "30px" })}
            >
              Teacher
            </NavLink>
            <NavLink
              className="nav-link"
              to="/courses"
              style={({ isActive }) => ({
                border: isActive && "2px solid blue",
              })}
            >
              Courses
            </NavLink>
            <NavLink
              className="nav-link"
              to="/contact"
              style={({ isActive }) => ({
                backgroundColor: isActive && "pink",
              })}
            >
              Contact
            </NavLink>
            <a
              href="https://github.com/nidakasap"
              target="blank"
              className="nav-link"
            >
              Github
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
