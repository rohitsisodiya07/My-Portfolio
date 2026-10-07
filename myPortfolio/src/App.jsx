import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        {/* Home */}
        <section id="home">
          <Hero />
        </section>

        {/* About */}
        <section id="about">
          <About />
        </section>

        {/* Experience & Education */}
        <section id="experience">
          <Experience />
        </section>

        {/* Skills */}
        <section id="skills">
          <Skills />
        </section>

        {/* Projects */}
        <section id="projects">
          <Projects />
        </section>

        {/* Contact */}
        <section id="contact">
          <Contact />
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default App;