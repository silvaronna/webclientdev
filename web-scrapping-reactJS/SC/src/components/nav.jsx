import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <h3 onClick={() => navigate("/")}>@Ayush Barnwal</h3>
      <section>
        <p onClick={() => navigate("/#about")}>About</p>
        <p onClick={() => navigate("/#work")}>Work</p>
        <p onClick={() => navigate("/contact")}>Contact</p>
      </section>
    </nav>
  );
};

export default Nav;
