"use client";

import React, { useState } from "react";
import styles from "./header.module.css";
import Select from "react-select";

export const Header = () => {
  const [selectedBlogOption, setSelectedBlogOption] = useState<string>();

  const blogOptions = [
    { value: "cs371p-blogs", label: "CS 371p Blogs" },
    { value: "cs373-blogs", label: "CS 373 Blogs" },
  ];

  return (
    <div className={styles.header}>
      {"FORREST SUN"}
      <nav className={styles.headerMenu}>
        <button onClick={() => (window.location.href = "/")}>{"HOME"}</button>
        <Select
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          controlShouldRenderValue={false}
          isSearchable={false}
          onChange={(selectedOption) => {
            window.location.href = `/blogs/${selectedOption?.value}`;
          }}
          options={blogOptions}
          placeholder={"CLASS BLOGS"}
          styles={{
            control: (provided) => ({
              ...provided,
              border: "none",
              boxShadow: "none",
              backgroundColor: "transparent",
            }),
            menu: (provided) => ({
              ...provided,
              backgroundColor: "black",
              color: "white",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isFocused ? "#1f1f1f" : "black",
              fontSize: "16px",
              color: "white",
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "white",
            }),
          }}
        />
        <button onClick={() => (window.location.href = "/resume")}>{"RESUME"}</button>
      </nav>
    </div>
  );
};
