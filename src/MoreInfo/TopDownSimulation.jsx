import React from "react";
import styles from "./Dashboard.module.css";

function TopDownSimulation() {
  return (
    <article className={styles.column6}>
      <div className={styles.camera3}>
        <h3 className={styles.topDownSim}>Top Down Sim</h3>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b5fa4a42b41849460f97e180cdae47c623bcb9b8678148d01278810ec82a249?placeholderIfAbsent=true"
          alt="Top down simulation"
          className={styles.img4}
        />
      </div>
    </article>
  );
}

export default TopDownSimulation;
