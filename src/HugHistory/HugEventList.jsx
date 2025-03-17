"use client";
import React, { useState } from "react";
import styles from "./HugEventList.module.css";

function HugEventList() {
  const [showEvents, setShowEvents] = useState(false);

  // Sample Hug Event Dates
  const hugEvents = [
    "March 1, 2025",
    "March 5, 2025",
    "March 12, 2025",
    "March 20, 2025",
    "March 25, 2025",
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Hug Event List</h2>

      {/* Toggle Button */}
      <button
        className={styles.toggleButton}
        onClick={() => setShowEvents(!showEvents)}
      >
        {showEvents ? "Hide Hug Events" : "Show Hug Events"}
      </button>

      {/* Hug Events List - Only Shows if Toggled */}
      {showEvents && (
        <ul className={styles.eventList}>
          {hugEvents.map((date, index) => (
            <li key={index} className={styles.eventItem}>{date}</li>
          ))}
        </ul>
      )}

    </section>
  );
}

export default HugEventList;
