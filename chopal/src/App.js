import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
