import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Register from './pages/register';
import Home from './pages/home';
import User from './pages/user'; // Renamed to Users if it's for multiple users
import Footer from './Footer/footer';
import Navbar from './Navbar/Navbar';
import Exams from './pages/Exams'; // Correctly imported default export of Exams
import AboutUs from './pages/AboutUs'; // Correctly imported default export of Exams
import Tech from './pages/TechSupport'; // Correctly imported default export of Exams

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Redirect from '/' to '/home' */}
        <Route path="/" element={<Navigate to="/home" />} />
        
        {/* Redirecting '/exam' to the actual Exams page */}
        <Route path="/exams" element={<Exams />} />
        
        {/* Define routes for other pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} /> {/* This is for individual user; consider renaming to '/users' for clarity */}
        <Route path="/tech" element={<Tech />} /> 
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer /> {/* Footer is added here to display on every page */}
    </div>
  );
}

export default App;
