"use client";
import React, { useState } from "react";
import styles from "./Dashboard.module.css";

function SegmentedControl() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <nav className={styles.segmentedcontrol} role="tablist">
      <button
        role="tab"
        aria-selected={activeTab === "overview"}
        onClick={() => setActiveTab("overview")}
        className={styles.item1}
      >
        Overview
      </button>
      <button
        role="tab"
        aria-selected={activeTab === "moreInfo"}
        onClick={() => setActiveTab("moreInfo")}
        className={styles.item2}
      >
        More Info
      </button>
      <button
        role="tab"
        aria-selected={activeTab === "hugHistory"}
        onClick={() => setActiveTab("hugHistory")}
        className={styles.item3}
      >
        Hug History
      </button>
    </nav>
  );
}

export default SegmentedControl;
