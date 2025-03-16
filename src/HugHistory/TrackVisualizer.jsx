import React from "react";
import styles from "./TrackVisualizer.module.css";

function TrackVisualizer() {
  return (
    <section className={styles.container}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4531f4a6a02b91b8f018e4de1aa32f89d1a576422c2ce048f848f66a5952f96?placeholderIfAbsent=true&apiKey=d7461f4ff0754d6cbcff4af3552e2222"
        alt="Background visualization"
        className={styles.background}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/273506241e6172785bccdbf60d2d9b9ba6084f755eafbfba9c64ecb6268cb960?placeholderIfAbsent=true&apiKey=d7461f4ff0754d6cbcff4af3552e2222"
        alt="Track icon"
        className={styles.icon}
      />
      <div className={styles.track} />
    </section>
  );
}

export default TrackVisualizer;
