import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Coctails from "./Components/Coctails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
   return (
      <main>
         <Navbar />
         <Hero />
         <Coctails />
      </main>
   );
};

export default App;
