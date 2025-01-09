import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import styles from "./Layout.module.css";
const Layout = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
