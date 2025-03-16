import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./MainPage/Dashboard";
import MoreInfo from "./MoreInfo/Dashboard";
import HugHistory from "./HugHistory/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/more-info" element={<MoreInfo />} />
        <Route path="/hug-history" element={<HugHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
