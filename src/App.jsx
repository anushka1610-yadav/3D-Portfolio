import React from "react";
import Navbar from "./Section/Navbar";
import Hero from "./Section/Hero";
import About from "./Section/About";
import Projects from "./Section/Projects";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
};

export default App;
