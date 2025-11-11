// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import MainContent from "./components/main/Main";
import TrustSection from "./components/trust/Trust";
import Tasks from "./components/tasks/Tasks";
import Start from "./components/start/Satrt";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <MainContent />
              <TrustSection />
            </>
          }
        />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/start" element={<Start />} />
        <Route path="/about" element={<About />} />

      
        {/* другие маршруты */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;