"use client";
import React from "react";
import styles from "./Dashboard.module.css";

function RobotExpression() {
  return (
    <article className={styles.column4}>
      <div className={styles.list7}>
        <div className={styles.div20}>
          <h3 className={styles.title4}>Robot Expression</h3>
          <p className={styles.currentExpression}>
            Current Expression: Smile (AUTO)
          </p>
        </div>
        <div className={styles.list8}>
          {["AUTO", "Neutral", "Smile", "Anger", "Camera"].map((expression) => (
            <div key={expression} className={styles.div21}>
              <span className={styles.auto}>{expression}</span>
              <div className={styles.radiobuttons3}>
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
          <div className={styles.div26}>
            <div className={styles.div27}>
              <span className={styles.custom}>Custom</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f8d2a71cf902a94ce03680e4511d161b6505dd509aa3a7cab8a5d7213ce3ef9?placeholderIfAbsent=true"
                alt="Custom expression"
                className={styles.img3}
              />
            </div>
            <div className={styles.radiobuttons8}>
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
        </div>
        <button className={styles.button6}>SET</button>
      </div>
    </article>
  );
}

export default RobotExpression;
