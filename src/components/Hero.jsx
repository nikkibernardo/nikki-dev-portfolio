import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <span id="home" className="hash-span">&nbsp;</span>
      <div className={`absolute inset-0 top-[8vh] sm:top-[12vh] md:top-[15vh] lg:top-[18vh] xl:top-[230px] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6 md:gap-8 lg:gap-10`}>
        {/* Text Content - Slightly narrower to accommodate larger canvas */}
        <div className="w-full lg:w-[45%] xl:w-[40%] text-center lg:text-left order-2 lg:order-1 mt-6 lg:mt-0">
          <p className={`${styles.heroSubText} mt-3 sm:mt-4 md:mt-5 text-white-100 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl transition-all duration-300`}>
            Hi, I'm Nikki <br className="hidden sm:inline-block" />
          </p>
          <h1 className="text-white font-sans font-bold">
            <span className="text-gray-100 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] md:leading-[1.15] tracking-tight">
              A WEB DESIGNER & DEVELOPER
            </span>
          </h1>
          
        </div>

        {/* Larger Canvas Container for desktop/laptop */}
        <div className="w-full lg:w-[55%] xl:w-[60%] 2xl:w-[65%] order-1 lg:order-2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[75vh]">
          <ComputersCanvas />
        </div>
      </div>



      {/* <ComputersCanvas /> */}

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
