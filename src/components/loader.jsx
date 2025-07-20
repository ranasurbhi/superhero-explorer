import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="spinner"></div>
      <div className="loader-text">Loading Heroes...</div>
    </div>
  );
};

export default Loader;
