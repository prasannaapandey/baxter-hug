"use client";
import React, { useState } from "react";
import styles from "./Dashboard.module.css";

function RobotExpression() {
  const [selectedExpression, setSelectedExpression] = useState(""); // Stores selected expression
  const [currentExpression, setCurrentExpression] = useState(""); // Stores confirmed expression after clicking SET

  return (
    <article className={styles.column4} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className={styles.list7} style={{ textAlign: "center" }}>
        <div className={styles.div20}>
          <h3 className={styles.title4}>Robot Expression</h3>
          <p className={styles.currentExpression} style={{ color: "black", textAlign: "center" }}>
            Current Expression: {currentExpression || "—"} {/* Empty until "SET" is clicked */}
          </p>
        </div>

        {/* Expression Buttons - Stacked Vertically & Centered */}
        <div
          className={styles.list8}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            marginBottom: "40px" // More space before the SET button
          }}
        >
          {["AUTO", "Neutral", "Smile", "Anger", "Camera"].map((expression) => (
            <button
              key={expression}
              className={styles.auto}
              style={{
                cursor: "pointer",
                backgroundColor: selectedExpression === expression ? "#d3d3d3" : "transparent", // Light gray when selected
                color: "black",
                border: "1px solid black",
                padding: "8px 20px",
                borderRadius: "5px",
                transition: "background-color 0.2s ease-in-out",
                width: "150px",
                textAlign: "center"
              }}
              onClick={() => setSelectedExpression(expression)}
            >
              {expression}
            </button>
          ))}
        </div>

        {/* Moved Lower "SET" Button - Properly Centered */}
        <div
          className={styles.div26}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px" // Pushes the SET button lower
          }}
        >
          <button
            className={styles.button6}
            onClick={() => setCurrentExpression(selectedExpression)} // Only updates when clicked
            disabled={!selectedExpression} // Disabled if no expression is selected
            style={{
              color: "white",
              backgroundColor: selectedExpression ? "black" : "gray", // Darker button when active
              cursor: selectedExpression ? "pointer" : "not-allowed",
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

export default RobotExpression;
