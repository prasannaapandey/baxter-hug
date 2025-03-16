import React from "react";
import styles from "./SegmentedControl.module.css";

function SegmentedControl() {
  return (
    <div className={styles.container}>
      <button className={`${styles.item} ${styles.itemActive}`}>
        Overview
      </button>
      <button className={styles.item}>More Info</button>
      <button className={`${styles.item} ${styles.itemSelected}`}>
        Hug History
      </button>
    </div>
  );
}

export default SegmentedControl;
