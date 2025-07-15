import React from "react";

const SortDropdown = ({ sortOrder, setSortOrder }) => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        style={{
          padding: "10px 16px",
          height: "42px",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "1px solid #444",
          backgroundColor: "#1e1e1e",
          color: "white",
          outline: "none",
          boxSizing: "border-box",
        }}
      >
        <option value="az">Sort: A-Z</option>
        <option value="za">Sort: Z-A</option>
      </select>
    </div>
  );
};

export default SortDropdown;
