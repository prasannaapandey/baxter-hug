import React from "react";
import styles from "./Dashboard.module.css";

function NavigationHeader() {
  return (
    <header className={styles.navigation}>
      <h1 className={styles.baxterHug}>Baxter Hug</h1>
      <nav className={styles.buttons}>
        <button className={styles.button}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d63a5fc2c5586a61568dadfd60e7fcc434fcc26de3d8c0acfaf3a36beb5dbc5?placeholderIfAbsent=true"
            alt="Navigation icon"
            className={styles.img}
          />
        </button>
      </nav>
    </header>
  );
}

export default NavigationHeader;
