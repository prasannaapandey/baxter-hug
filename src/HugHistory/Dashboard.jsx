"use client";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import NavigationBar from "./NavigationBar";
import DashboardContent from "./DashboardContent";

function HugHistory() {
  return (
    <main className={styles.dashboard}>
      <NavigationBar />
      <DashboardContent />
      <nav>
        <Link to="/">Back to Main Dashboard</Link>
        <Link to="/more-info">Go to More Info</Link>
      </nav>
    </main>
  );
}

export default HugHistory;
