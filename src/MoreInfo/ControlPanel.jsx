"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

function ControlPanel() {
  const [status, setStatus] = useState("Disabled");
  const buttons = ["Enable", "Disable", "Reset", "Stop"];
  const navigate = useNavigate();

  return (
    <section className={styles.div}>
      <nav className={styles.segmentedcontrol}>
        <button className={styles.item1} onClick={() => navigate("/")}>Overview</button>
        <button className={styles.item2} onClick={() => navigate("/more-info")}>More Info</button>
        <button className={styles.item3} onClick={() => navigate("/hug-history")}>Hug History</button>
      </nav>
      <div className={styles.list}>
        <h2 className={styles.title}>Baxter Control</h2>
        <p className={styles.status} style={{ color: "black", display: "inline-block", marginRight: "10px" }}>
          Status: {status}
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
          {buttons.map((btn, index) => (
            <button
              key={btn}
              className={styles[`button${index + 2}`]}
              onClick={() => setStatus(btn)}
              style={{ color: "white" }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ControlPanel;
