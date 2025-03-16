import React from "react";
import styles from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <nav className={styles.navigation}>
      <h1 className={styles.title}>Baxter Hug</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d63a5fc2c5586a61568dadfd60e7fcc434fcc26de3d8c0acfaf3a36beb5dbc5?placeholderIfAbsent=true&apiKey=d7461f4ff0754d6cbcff4af3552e2222"
            alt="Navigation button"
            className={styles.buttonIcon}
          />
        </button>
      </div>
    </nav>
  );
}

export default NavigationBar;
