import React from "react";
import styles from "./Dashboard.module.css";

function RobotPose() {
  return (
    <article className={styles.column5}>
      <div className={styles.list9}>
        <div className={styles.div29}>
          <div className={styles.div30}>
            <h3 className={styles.title5}>Robot Pose</h3>
            <span className={styles.joint}>Joint</span>
          </div>
          <span className={styles.angledeg}>Angle (deg)</span>
        </div>
        <dl className={styles.list10}>
          <div className={styles.div31}>
            <dt className={styles.leftShoulder}>Left Shoulder</dt>
            <dd className={styles.css10}>-10</dd>
          </div>
          <div className={styles.div32}>
            <dt className={styles.leftElbow}>Left Elbow</dt>
            <dd className={styles.css20}>-20</dd>
          </div>
          <div className={styles.div33}>
            <dt className={styles.leftWrist}>Left Wrist</dt>
            <dd className={styles.css30}>-30</dd>
          </div>
          <div className={styles.div34}>
            <dt className={styles.rightShoulder}>Right Shoulder</dt>
            <dd className={styles.css10}>10</dd>
          </div>
          <div className={styles.div35}>
            <dt className={styles.rightElbow}>Right Elbow</dt>
            <dd className={styles.css20}>20</dd>
          </div>
          <div className={styles.div36}>
            <dt className={styles.rightWrist}>Right Wrist</dt>
            <dd className={styles.css30}>30</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default RobotPose;
