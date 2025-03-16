import React from "react";
import styles from "./Dashboard.module.css";
import RobotStatus from "./RobotStatus";
import SensorInfo from "./SensorInfo";
import CameraFeed from "./CameraFeed";

function StatusSection() {
  return (
    <section className={styles.div2}>
      <div className={styles.div3}>
        <RobotStatus />
        <SensorInfo />
        <CameraFeed />
      </div>
    </section>
  );
}

export default StatusSection;
