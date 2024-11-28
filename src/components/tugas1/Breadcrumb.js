import React from "react";
import "./Breadcrumb.css";

export const Breadcrumb = ({ items = [] }) => {
  if (!Array.isArray(items)) {
    throw new Error("The `items` prop must be an array.");
  }

  return (
    <nav className="breadcrumb">
      {items.map((item, index) => (
        <span key={index} className="breadcrumb-item">
          {item}
          {index < items.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
};
