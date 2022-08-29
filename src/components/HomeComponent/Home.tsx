import React from "react";
import NavBar from "../NavbarComponent/Navbar";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import { useSelector } from "react-redux";


function Home() {
  const navigate = useNavigate();

  const goToLogIn = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };

 

  return (
    <div>
      <NavBar />
      <div className="topDiv">
        <h1 className="headingLogo">Ask.it</h1>
        <div className="div">
          <div className="divCover">
            <h3 className="heading">Welcome</h3>
          </div>
          <Button onClick={goToLogIn} className="homeBtn">
            Log In
          </Button>
          <div className="divider" />
          <Button onClick={goToRegister} className="homeBtn">
            Register
          </Button>
        </div>
      </div>
      
    </div>
  );
}

export default Home;


