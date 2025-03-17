import React from "react";
import styles from "./Dashboard.module.css";
import JointDataTable from "./JointDataTable";

function RobotPosePanel() {
  return (
    <section className={styles.list2} aria-labelledby="robot-pose-title">
      <div className={styles.div2}>
        <div className={styles.div3}>
          <div className={styles.div4}>
            <h3 id="robot-pose-title" className={styles.title2}>
              Robot Pose
            </h3>
            <p className={styles.joint}>Joint</p>
            <p className={styles.joint2}>Joint</p>
          </div>
          <p className={styles.angleRad}>Angle (Rad)</p>
        </div>
        <div className={styles.div5}>
          <p>Joint</p>
          <p className={styles.angleRad2}>Angle (Rad)</p>
          <p>Joint</p>
          <p className={styles.widthmm}>Width (mm)</p>
        </div>
      </div>
      <div className={styles.div6}>
        <div className={styles.div7}>
          <JointDataTable
            columnClass={styles.column}
            listClass={styles.list3}
            joints={[
              { name: "neck 0", value: "0", nameClass: styles.neck0 },
              { name: "Left s0", value: "0", nameClass: styles.lefts0 },
              { name: "Left s1", value: "0", nameClass: styles.lefts1 },
              { name: "Left e0", value: "0", nameClass: styles.lefte0 },
              { name: "Left e1", value: "0", nameClass: styles.lefte1 },
              { name: "Left w0", value: "0", nameClass: styles.leftw0 },
              { name: "Left w1", value: "0", nameClass: styles.leftw1 },
              { name: "Left Grip", value: "0", nameClass: styles.leftGrip },
            ]}
          />

          <JointDataTable
            columnClass={styles.column2}
            listClass={styles.list4}
            joints={[
              { name: "neck 1", value: "0", nameClass: styles.neck1 },
              { name: "Right s0", value: "0", nameClass: styles.rights0 },
              { name: "Right s1", value: "0", nameClass: styles.rights1 },
              { name: "Right e0", value: "0", nameClass: styles.righte0 },
              { name: "Right e1", value: "0", nameClass: styles.righte1 },
              { name: "Right w0", value: "0", nameClass: styles.rightw0 },
              { name: "Right w1", value: "0", nameClass: styles.rightw1 },
              { name: "Right Grip", value: "0", nameClass: styles.rightGrip },
            ]}
          />

          <JointDataTable
            columnClass={styles.column3}
            listClass={styles.list5}
            joints={[
              { name: "Left Grip", value: "0", nameClass: styles.leftGrip },
              { name: "Right Grip", value: "0", nameClass: styles.rightGrip },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default RobotPosePanel;
