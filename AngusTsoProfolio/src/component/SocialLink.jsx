import React from "react";
import styles from "./SocialLink.module.css";
import githubLogo from "../assets/github-mark-white.png";
import igLogo from "../assets/Instagram_Glyph_White.png";
import LnWhite from "../assets/In-White-128.png";
import leetCode from "../assets/leetcode.png";
import { Link } from "react-router-dom";

const SocialLink = () => {
  return (
    <div className={styles.social}>
      <ul>
        <li>
          <Link to="https://github.com/AngusTso/">
            <img src={githubLogo} />
          </Link>
          <Link to="https://github.com/AngusTso/">
            <img src={igLogo} />
          </Link>
          <Link to="https://github.com/AngusTso/">
            <img src={LnWhite} />
          </Link>
          <Link to="https://leetcode.com/u/AngusKing/">
            <img style={{ color: "white" }} src={leetCode} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialLink;
