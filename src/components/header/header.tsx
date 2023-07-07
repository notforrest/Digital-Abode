"use client";

import React from "react";
import { headerStyles } from "./header.styles";

export const Header = () => {
  return (
    <div className="header">
      {"FORREST SUN"}
      <div className="headerMenu">
        <button onClick={() => {}}>{"HOME"}</button>
        <button>{"PROJECTS"}</button>
        <button>{"ABOUT"}</button>
      </div>
      <style jsx>{headerStyles}</style>
    </div>
  );
};
