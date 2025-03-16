import React from "react";
import styles from "./Dashboard.module.css";

function CameraFeed() {
  return (
    <article className={styles.column3}>
      <div className={styles.camera}>
        <h3 className={styles.mainCameraFeed}>Main Camera Feed</h3>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e955aa73f0659f720ce95afa8efd0746130ea9fd8d4ea90ed322a2a90a0acb8a?placeholderIfAbsent=true"
          alt="Main camera feed"
          className={styles.img2}
        />
      </div>
    </article>
  );
}

export default CameraFeed;
