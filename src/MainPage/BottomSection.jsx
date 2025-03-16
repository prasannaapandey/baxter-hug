import React from "react";
import styles from "./Dashboard.module.css";
import RobotExpression from "./RobotExpression";
import RobotPose from "./RobotPose";
import TopDownSimulation from "./TopDownSimulation";

function BottomSection() {
  return (
    <section className={styles.div18}>
      <div className={styles.div19}>
        <RobotExpression />
        <RobotPose />
        <TopDownSimulation />
      </div>
    </section>
  );
}

export default BottomSection;
