import React from "react";
import { cocktailLists, mockTailLists } from "../../Constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Coctails = () => {
   useGSAP(() => {
      const parallaxTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: "#cocktails",
            start: "top 30%", // starts when top of section reach the 30% of the screen
            end: "bottom 80%", // ends when bottom of section reach the 80% of the screen
            scrub: true,
         },
      });

      parallaxTimeline.from("#c-left-leaf", {
         x: -100,
         y: 100,
      });

      parallaxTimeline.from("#c-right-leaf", {
         x: 100,
         y: 100,
      });
   });

   return (
      <section id="cocktails" className="noisy">
         <img
            src="/images/cocktail-left-leaf.png"
            alt="l-leaf"
            id="c-left-leaf"
         />
         <img
            src="/images/cocktail-right-leaf.png"
            alt="r-leaf"
            id="c-right-leaf"
         />

         <div className="list">
            <div className="popular">
               <h2>Most popular cocktails:</h2>

               <ul>
                  {cocktailLists.map(({ name, country, detail, price }) => (
                     <li key={name}>
                        <div className="md:me-28">
                           <h3>{name}</h3>
                           <p>
                              {country} | {detail}
                           </p>
                        </div>
                        <span>- {price}</span>
                     </li>
                  ))}
               </ul>
            </div>

            <div className="loved">
               <h2>Most loved mocktails:</h2>

               <ul>
                  {mockTailLists.map(({ name, country, detail, price }) => (
                     <li key={name}>
                        <div className="md:me-28">
                           <h3>{name}</h3>
                           <p>
                              {country} | {detail}
                           </p>
                        </div>
                        <span>- {price}</span>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
   );
};

export default Coctails;
