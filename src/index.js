import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainPage/Dashboard.module.css';

function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <h1>Dashboard</h1>
      <nav>
        <Link to="/more-info">More Info</Link>
        <Link to="/hug-history">Hug History</Link>
      </nav>
    </main>
  );
}

export default Dashboard;
