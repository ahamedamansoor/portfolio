import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Recognitions from './pages/Recognitions';
import CursorFollower from './components/CursorFollower';

function App() {
  return (
    <Router>
      <CursorFollower />
      <AnimatePresence mode="wait">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recognitions" element={<Recognitions />} />
          </Routes>
        </Layout>
      </AnimatePresence>
    </Router>
  );
}

export default App;