"use client";

import React from "react";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      {"FORREST SUN"}
      <div className={styles.headerMenu}>
        <button onClick={() => (window.location.href = "/")}>{"HOME"}</button>
        <button onClick={() => (window.location.href = "/blogs/cs373-blogs")}>
          {"CLASS BLOGS"}
        </button>
        <button onClick={() => (window.location.href = "/about")}>{"ABOUT"}</button>
      </div>
    </div>
  );
};
