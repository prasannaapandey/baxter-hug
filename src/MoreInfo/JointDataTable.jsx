import React from "react";
import styles from "./Dashboard.module.css";

function JointDataTable({ columnClass, listClass, joints }) {
  return (
    <div className={columnClass}>
      <table className={listClass}>
        <tbody>
          {joints.map((joint, index) => (
            <tr
              key={index}
              className={
                index === 0
                  ? styles.div8
                  : index === 1
                  ? styles.div9
                  : index === 2
                  ? styles.div10
                  : index === 3
                  ? styles.div11
                  : index === 4
                  ? styles.div12
                  : index === 5
                  ? styles.div13
                  : index === 6
                  ? styles.div14
                  : index === 7
                  ? styles.div15
                  : index === 8
                  ? styles.div16
                  : index === 9
                  ? styles.div17
                  : index === 10
                  ? styles.div18
                  : index === 11
                  ? styles.div19
                  : index === 12
                  ? styles.div20
                  : index === 13
                  ? styles.div21
                  : index === 14
                  ? styles.div22
                  : index === 15
                  ? styles.div23
                  : index === 16
                  ? styles.div24
                  : styles.div25
              }
            >
              <td className={joint.nameClass}>{joint.name}</td>
              <td className={styles.css0}>{joint.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JointDataTable;
