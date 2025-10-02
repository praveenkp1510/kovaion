import React from "react";
import "./App.scss";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar";
import { HashRouter, Route, Routes } from "react-router-dom";
import LeadDetails from "./Pages/LeadDetails";

function App() {
  // We combine the Sidebar and Dashboard into the main app view
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

// // src/App.jsx

// import React from 'react';
// import { Routes, Route } from 'react-router-dom'; // <--- NEW IMPORTS
// import './App.scss';

// // Import all your layout and page components
// import Sidebar from './components/Sidebar/Sidebar'; // existing component
// import Topbar from './components/Topbar/Topbar';   // existing component (I'll assume it exists)
// import Dashboard from './pages/Dashboard';         // existing page
// import LeadDetails from './pages/LeadDetails';     // <--- NEW PAGE

// function App() {
//   return (
//     <div className="app-layout">
//       {/* 1. Sidebar is the constant navigation panel */}
//       <Sidebar />

//       {/* 2. Main Content Wrapper: includes Topbar and the routing area */}
//       <div className="content-area">
//         <Topbar /> {/* Topbar stays above the page content */}

//         {/* 3. Main Content Router */}
//         <main className="main-content">
//           <Routes>
//             {/* Route for the main dashboard (e.g., accessed via '/') */}
//             <Route path="/" element={<Dashboard />} />

//             {/* Route for the specific Lead Details page */}
//             {/* The :id segment allows you to pass a Lead ID in the URL, e.g., /leads/123 */}
//             <Route path="/leads/:id" element={<LeadDetails />} />

//             {/* Optional: A route for the main Leads list page (from the image) */}
//             <Route path="/leads" element={<div>Leads Overview (List) Page</div>} />

//             {/* Add more routes for other pages here */}
//           </Routes>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default App;
