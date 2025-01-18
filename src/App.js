import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css"; // Ensure to update styles in this file
import HomePage from "./HomePage/HomePage"; 
import Gouvernorats from "./Gouvernorats/Gouvernorats.jsx"; 
import SousCategorie from "./Gouvernorats/SousCategorie.jsx"; 
import Activities from "./Gouvernorats/Activities.jsx"; 
import OneUser from "./Gouvernorats/OneUser.jsx"; 
import Users from "./Gouvernorats/Users"; 
import Search from "./Gouvernorats/Search.jsx"; 
import OneUserUpdate  from "./Gouvernorats/Update.jsx";
import SideBar from "./App.jsx";
import Connect from "./HomePage/Login";

const AppContent = () => {

  return (
    <div className="app">
      {/* Sidebar (Desktop Version) */}
<div className="sidebar">
 <SideBar />
</div>

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
          <Route path="/connect" element={<Connect />} />
          <Route path="/update" element={<OneUserUpdate />} />
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
