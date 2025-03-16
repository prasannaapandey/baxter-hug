"use client";
import React from "react";
import styles from "./Dashboard.module.css";

function RobotStatus() {
  return (
    <article className={styles.column}>
      <div className={styles.list2}>
        <h3 className={styles.title2}>Robot Status</h3>
        <dl className={styles.list3}>
          <div className={styles.div4}>
            <dt className={styles.connected}>Connected</dt>
            <dd className={styles.yes}>Yes</dd>
          </div>
          <div className={styles.div5}>
            <dt className={styles.status}>Status</dt>
            <dd className={styles.huggingauto}>HUGGING (AUTO)</dd>
          </div>
        </dl>
        <div className={styles.list4}>
          {["AUTO", "HUG", "NEUTRAL", "MIRROR"].map((mode) => (
            <div key={mode} className={styles.div6}>
              <span className={styles.auto}>{mode}</span>
              <div className={styles.radiobuttons}>
                <div className={styles.container}>
                  <div className={styles.stateLayer}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f270363dc5709873ed3e408b1718fad24449b07504403783693a121f195d68a?placeholderIfAbsent=true"
                      alt="Radio button"
                      className={styles.img}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className={styles.div10}>
            <button className={styles.button5}>SET</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default RobotStatus;
