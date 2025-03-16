import React from "react";
import SegmentedControl from "./SegmentedControl";
import HugEventList from "./HugEventList";
import TrackVisualizer from "./TrackVisualizer";
import styles from "./DashboardContent.module.css";

function DashboardContent() {
  return (
    <section className={styles.content}>
      <SegmentedControl />
      <HugEventList />
      <TrackVisualizer />
    </section>
  );
}

export default DashboardContent;
