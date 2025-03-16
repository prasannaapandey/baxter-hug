"use client";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import NavigationHeader from "./NavigationHeader";
import ControlPanel from "./ControlPanel";
import StatusSection from "./StatusSection";
import BottomSection from "./BottomSection";

function MoreInfo() {
  return (
    <main className={styles.dashboard}>
      <NavigationHeader />
      <section className={styles.content}>
        <ControlPanel />
        <StatusSection />
        <BottomSection />
        <nav>
          <Link to="/">Back to Main Dashboard</Link>
          <Link to="/hug-history">Go to Hug History</Link>
        </nav>
      </section>
    </main>
  );
}

export default MoreInfo;
