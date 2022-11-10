import React from "react";
import './index.css';
import Hero from "./components/Hero";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";



function App() {
  

  return (
    <div className='card'>
     <Hero />
     <About />
     <Interest />
     <Footer />
    </div>
  );
}

export default App;
