import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutMe">About Me</Link>
        </li>
        <li>
          <Link to="/myWork">Projects</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
