"use client";
import React from "react";
import styles from "./Dashboard.module.css";

function ControlPanel() {
  return (
    <section className={styles.div}>
      <nav className={styles.segmentedcontrol}>
        <button className={styles.item1}>Overview</button>
        <button className={styles.item2}>More Info</button>
        <button className={styles.item3}>Hug History</button>
      </nav>
      <div className={styles.list}>
        <h2 className={styles.title}>Baxter Control</h2>
        <button className={styles.button2}>Enable</button>
        <button className={styles.button3}>Disable</button>
        <button className={styles.button4}>Reset</button>
      </div>
    </section>
  );
}

export default ControlPanel;
