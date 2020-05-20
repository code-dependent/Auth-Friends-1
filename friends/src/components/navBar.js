import React from "react";
import { useHistory } from "react-router-dom";
import "../assets/styles/Navbar.css";
const NavBar = (props) => {
  const { push } = useHistory();

  const navStyle = {
    width: "85%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "baseline",
  };
  return (
    <div className="nav-container">
      <h1 className="title">
        <span style={{ color: "gold", textShadow: "1px 1px black" }}>Good</span>{" "}
        Friends
      </h1>
      <nav>
        <a
          onClick={(e) => {
            e.preventDefault();
            push("/");
          }}
        >
          Sign in
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            push("/protected");
          }}
        >
          Friends
        </a>
      </nav>
    </div>
  );
};
export default NavBar;
