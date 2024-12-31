import { FaLocationArrow, FaGithub, FaLinkedin } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useState, useEffect } from 'react';
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

const Hero = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  useEffect(() => {
    // Start showing elements sequentially
    const introTimer = setTimeout(() => setShowIntro(true), 2000); // After "Building Different"
    const descTimer = setTimeout(() => setShowDescription(true), 3000); // After intro
    const socialTimer = setTimeout(() => setShowSocial(true), 4000); // After description

    return () => {
      clearTimeout(introTimer);
      clearTimeout(descTimer);
      clearTimeout(socialTimer);
    };
  }, []);

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            whats good? 🤘
          </p>

          <div className="relative group mt-8 mb-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative">
              <img
                src="soham.jpg"
                alt="Soham Parab"
                className="w-40 h-40 rounded-full object-cover border-2 border-white/10"
              />
            </div>
          </div>

          <TextGenerateEffect
            words="Building Different"
            className="text-center text-[40px] md:text-5xl lg:text-6xl mt-6"
          />

          <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-center md:tracking-wider mb-2 text-sm md:text-lg lg:text-xl mt-4">
              Yo! Im <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">SOHAM</span> — The dev who means business
            </p>
          </div>
          
          <div className={`transition-opacity duration-1000 ${showDescription ? 'opacity-100' : 'opacity-0'}`}>
            <TextGenerateEffect
              words="I don't just push to main, I push the boundaries."
              className="text-center md:tracking-wider mb-2 text-sm md:text-lg lg:text-xl text-gray-400"
            />
            <TextGenerateEffect
              words="Mobile, web, you name it — I build it."
              className="text-center md:tracking-wider mb-6 text-sm md:text-lg lg:text-xl text-gray-400"
            />
          </div>

          <div className={`flex gap-4 mb-6 transition-opacity duration-1000 ${showSocial ? 'opacity-100' : 'opacity-0'}`}>
            <a href="https://github.com/Soham-03" target="_blank" rel="noopener noreferrer">
              <div className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-200">
                <FaGithub className="w-6 h-6" />
              </div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-200">
                <FaLinkedin className="w-6 h-6" />
              </div>
            </a>
          </div>

          <div className={`transition-opacity duration-1000 ${showSocial ? 'opacity-100' : 'opacity-0'}`}>
            <a href="#projects">
              <MagicButton
                title="Check the heat 🔥"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;