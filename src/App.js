import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css"; // Ensure to update styles in this file
import HomePage from "./HomePage/HomePage"; // Import the HomePage component
import Gouvernorats from "./Gouvernorats/Gouvernorats.jsx"; // Import the Gouvernorats component
import SousCategorie from "./Gouvernorats/SousCategorie.jsx"; // Import the Gouvernorats component
import Activities from "./Gouvernorats/Activities.jsx"; // Import the Activities component
import OneUser from "./Gouvernorats/OneUser.jsx"; // Import the OneUser component
import Users from "./Gouvernorats/Users"; // Import the OneUser component
import Search from "./Gouvernorats/Search.jsx"; // Import the Search component
import SideBar from "./App.jsx";

const AppContent = () => {

  return (
    <div className="app">
      {/* Sidebar (Desktop Version) */}

 <SideBar />


      {/* Main Content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Categories" element={<Activities />} />
          <Route path="/gouvernorats" element={<Gouvernorats />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/OneUser" element={<OneUser />} />
          <Route path="/SousCategories" element={<SousCategorie />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
};

// Wrap AppContent in Router at the root level
const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
