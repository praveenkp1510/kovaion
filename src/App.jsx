import React from "react";
import "./App.scss";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar";
import { HashRouter, Route, Routes } from "react-router-dom";
import LeadDetails from "./Pages/LeadDetails";

function App() {
  
  return (
    <div className="app-layout ">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/leads" element={<LeadDetails />} />
      </Routes>
    </div>
  );
}

export default App;