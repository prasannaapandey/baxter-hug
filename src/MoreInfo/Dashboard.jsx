"use client";
import React from "react";
import styles from "./Dashboard.module.css";
import NavigationBar from "./NavigationBar";
import ControlPanel from "./ControlPanel";
import RobotPosePanel from "./RobotPosePanel";

function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <NavigationBar />
      <section className={styles.div}>
        <ControlPanel />
        <RobotPosePanel />
      </section>
    </main>
  );
}

export default Dashboard;
