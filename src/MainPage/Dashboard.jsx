"use client";
import React from "react";
import styles from "./Dashboard.module.css";
import NavigationHeader from "./NavigationHeader";
import ControlPanel from "./ControlPanel";
import StatusSection from "./StatusSection";
import BottomSection from "./BottomSection";

function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <NavigationHeader />
      <section className={styles.content}>
        <ControlPanel />
        <StatusSection />
        <BottomSection />
      </section>
    </main>
  );
}

export default Dashboard;
