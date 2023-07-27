"use client";

import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import styles from "./scroll-top.module.css";

export const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1000) {
      setVisible(true);
    } else if (scrolled <= 1000) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button className={styles["scroll-top"]} style={{ display: visible ? "flex" : "none" }}>
      <FaChevronUp onClick={scrollToTop} />
    </button>
  );
};