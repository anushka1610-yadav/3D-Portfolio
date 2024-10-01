import React from "react";
import Navbar from "./Section/Navbar";
import Hero from "./Section/Hero";
import About from "./Section/About";
import Projects from "./Section/Projects";
import Clients from "./Section/Clients";
import Contact from "./Section/Contact";
import Footer from "./Section/Footer";
import Experience from "./Section/Experience";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
