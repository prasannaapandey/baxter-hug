"use client";
import React, { useState } from "react";
import styles from "./Dashboard.module.css";

function RobotStatus() {
  const [selectedMode, setSelectedMode] = useState(""); // Stores selected mode
  const [status, setStatus] = useState(""); // Stores confirmed mode after clicking SET

  return (
    <article className={styles.column} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className={styles.list2} style={{ textAlign: "center" }}>
        <h3 className={styles.title2}>Robot Status</h3>
        <dl className={styles.list3} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className={styles.div4} style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <dt className={styles.connected}>Connected</dt>
            <dd className={styles.yes}>Yes</dd>
          </div>
          <div className={styles.div5} style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <dt className={styles.status}>Status</dt>
            <dd className={styles.huggingauto} style={{ color: "black", marginLeft: "auto" }}>
              {status || "—"} {/* Empty until "SET" is clicked */}
            </dd>
          </div>
        </dl>

        {/* Mode Buttons - Stacked Vertically & Centered */}
        <div className={styles.list4} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginBottom: "40px" }}>
          {["AUTO", "HUG", "NEUTRAL", "MIRROR"].map((mode) => (
            <button
              key={mode}
              className={styles.auto}
              style={{
                cursor: "pointer",
                backgroundColor: selectedMode === mode ? "#d3d3d3" : "transparent",
                color: "black",
                border: "1px solid black",
                padding: "8px 20px",
                borderRadius: "5px",
                transition: "background-color 0.2s ease-in-out",
                width: "150px",
                textAlign: "center"
              }}
              onClick={() => setSelectedMode(mode)}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Moved Lower "SET" Button - Properly Centered */}
        <div className={styles.div26} style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
          <button
            className={styles.button6}
            onClick={() => setStatus(selectedMode)} // Only updates when clicked
            disabled={!selectedMode} // Disabled if no mode is selected
            style={{
              color: "white",
              backgroundColor: selectedMode ? "black" : "gray", // Darker button when active
              cursor: selectedMode ? "pointer" : "not-allowed",
              width: "180px",
              padding: "10px 20px",
              textAlign: "center",
              borderRadius: "5px",
              border: "none"
            }}
          >
            SET
          </button>
        </div>
      </div>
    </article>
  );
}

export default RobotStatus;
