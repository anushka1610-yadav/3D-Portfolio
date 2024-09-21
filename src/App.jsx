import React from 'react';
import Navbar from './Section/Navbar';
import Hero from './Section/Hero';
import About from './Section/About';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App