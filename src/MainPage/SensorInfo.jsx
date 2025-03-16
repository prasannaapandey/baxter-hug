import React from "react";
import styles from "./Dashboard.module.css";

function SensorInfo() {
  return (
    <article className={styles.column2}>
      <div className={styles.list5}>
        <h3 className={styles.title3}>Sensor Info</h3>
        <dl className={styles.list6}>
          <div className={styles.div11}>
            <dt className={styles.subjectFound}>Subject Found</dt>
            <dd className={styles.yes}>YES</dd>
          </div>
          <div className={styles.div12}>
            <dt className={styles.distance}>Distance</dt>
            <dd className={styles.m}>0.5m</dd>
          </div>
          <div className={styles.div13}>
            <dt className={styles.height}>Height</dt>
            <dd className={styles.m}>1.7m</dd>
          </div>
          <div className={styles.div14}>
            <dt className={styles.heading}>Heading</dt>
            <dd className={styles.deg}>+20 deg</dd>
          </div>
          <div className={styles.div15}>
            <dt className={styles.shoulderWidth}>Shoulder Width</dt>
            <dd className={styles.m2}>0.48m</dd>
          </div>
          <div className={styles.div16}>
            <dt className={styles.ifSensorLeft1}>IF Sensor Left 1</dt>
            <dd className={styles.m3}>0.2m</dd>
          </div>
          <div className={styles.div17}>
            <dt className={styles.ifSensorRight1}>IF Sensor Right 1</dt>
            <dd className={styles.m4}>0.48m</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default SensorInfo;
