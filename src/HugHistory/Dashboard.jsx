"use client";
import React from "react";
import styles from "./Dashboard.module.css";
import NavigationBar from "./NavigationBar";
import DashboardContent from "./DashboardContent";

function HugHistory() {

  return (
    <main className={styles.dashboard}>
      <NavigationBar />
      <DashboardContent />
    </main>
  );
}

export default HugHistory;
