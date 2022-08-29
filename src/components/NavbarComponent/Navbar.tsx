import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./Navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  const goToLogIn = () => {
    navigate("/login");
  };

  return (
    <div className="navDiv">
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="pointer" onClick={goToHome}>
            Ask.it
          </Navbar.Brand>
          <Nav className="gap-4">
            <Button className="buttonDefault" onClick={goToLogIn}>
              Log In
            </Button>
            <Button className="buttonDefault" onClick={goToRegister}>
              Register
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
