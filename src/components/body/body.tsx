"use client";

import React from "react";
import { bodyStyles } from "./body.styles";

export const Body = () => {
  return (
    <div className="body">
      {"Here is a little about myself:"}
      <style jsx>{bodyStyles}</style>
    </div>
  );
};
