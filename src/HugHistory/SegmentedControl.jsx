"use client";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./SegmentedControl.module.css";

function SegmentedControl() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.container}>
      <button
        className={`${styles.item} ${location.pathname === "/" ? styles.itemActive : ""}`}
        onClick={() => navigate("/")}
      >
        Overview
      </button>
      <button
        className={`${styles.item} ${location.pathname === "/more-info" ? styles.itemActive : ""}`}
        onClick={() => navigate("/more-info")}
      >
        More Info
      </button>
      <button
        className={`${styles.item} ${location.pathname === "/hug-history" ? styles.itemActive : ""}`}
        onClick={() => navigate("/hug-history")}
      >
        Hug History
      </button>
    </div>
  );
}

export default SegmentedControl;
