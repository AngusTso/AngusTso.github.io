import React from "react";
import styles from "./Footer.module.css";
import SocialLink from "./SocialLink";
const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className={styles.container}>
      <SocialLink />
      <div>
        <p> &copy; {currYear} Angus Tso. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
