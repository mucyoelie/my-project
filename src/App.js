import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {

  return (
    <div className="font-raleway text-gray-900 bg-gray-100 dark:bg-gray-900">
      <Navbar/>
      <Home />
      <About />
      <br />
      <br />
      <Skills/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
