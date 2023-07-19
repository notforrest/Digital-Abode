"use client";

import React from "react";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      {"FORREST SUN"}
      <div className={styles.headerMenu}>
        <button onClick={() => {}}>{"HOME"}</button>
        <button>{"PROJECTS"}</button>
        <button>{"ABOUT"}</button>
      </div>
    </div>
  );
};
