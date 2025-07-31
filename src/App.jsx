import React from "react";
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/WorkFlow";
import Pricing from "./components/Pricing";
import Testi from "./components/Testi";
import Footer from "./components/Footer";

const App = () => {
  return <div>
  <NavBar/> 
  <div className="max-w-7xl mx-auto pt-20 px-6">
  <HeroSection/>   
  <FeatureSection/>
  <WorkFlow/>
  <Pricing/>
  <Testi/>
  <Footer/>
  </div>
  </div>;
};

export default App;
