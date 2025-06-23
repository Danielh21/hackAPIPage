"use client";
import React from "react";
import styles from "../style.module.scss";

const Header = () => {
  const toggleTheme = () => {
    if (typeof document !== "undefined") {
      const current = document.documentElement.getAttribute("data-theme");
      document.documentElement.setAttribute(
        "data-theme",
        current === "dark" ? "light" : "dark"
      );
    }
  };

  return (
    <header className={styles.headerContainer}>
      <h1>Hacker News</h1>
      <button onClick={toggleTheme} className={styles.themeToggle}>
        Toggle Dark Mode
      </button>
    </header>
  );
};

export default Header;
