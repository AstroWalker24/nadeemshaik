import React, { useEffect, useRef, useState } from 'react';
import TimelineComponent from './TimelineComponent';
import SkillComponent from './SkillComponent';
import { motion } from 'framer-motion';
import { responseWhoami, responseBuilds, responseHelp, descriptionText, detailedDesc, projects } from '../helpers/helper';
import Typed from 'typed.js';
import { fadeIn, textVariant } from '../helpers/motion';
import Techs from './Techs';
import Contact from './Contact';
import {StarCanvas} from './Stars';





const Hero = () => {
  const [inputValue, setInputValue] = useState(''); // State to track input field value
  const [commandHistory, setCommandHistory] = useState([]); // Track all entered commands

  // ref for terminal div
  const app2Ref = useRef(null);

  // Ref for input field
  const inputRef = useRef(null);

  // Ref for heading and description
  const typing = useRef(null);


  // using typed.js for typing effect
  useEffect(() => {
    const typed = new Typed(typing.current, {
      strings: [detailedDesc],
      typeSpeed: 100,
    });
  }, [])

  // scrolling behaviour for terminal
  useEffect(() => {
    if (app2Ref.current) {
      app2Ref.current.scrollTop = app2Ref.current.scrollHeight;
    }
  }, [commandHistory]);





  // Handle command input and display results
  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const newCommand = inputValue.trim();
      if (newCommand) {
        let response = '';
        switch (newCommand) {
          case 'whoami':
            response = `${responseWhoami}`;
            break;
          case 'builds':
            response = `${responseBuilds}`;
            break;
          case 'help':
            response = `${responseHelp}`;
            break;
          default:
            response = `Unknown command: ${newCommand}`;
        }
        setCommandHistory((prev) => [...prev, `> ${newCommand}`, response]);
      }
      setInputValue(''); // Clear input field
    }
  };



  return (
    <>
      <section className="relative min-h-screen w-full mx-auto">

        {/* a container for holding the description and the terminal */}
        <div className="py-6 sm:py-28 px-10 max-w-7xl mx-auto flex sm:flex-row flex-col sm:items-start sm:justify-start items-center justify-center gap-5">

          {/* Description section  */}
          <div className="flex flex-col mt-5 sm:w-[1403px]">
            <div>
              <h1 className="text-white sm:text-5xl text-2xl font-primary">
                Hey, <span className="text-[#66FF00]">Nadeem's</span> here!
              </h1>

              <p className="mt-4 text-white sm:leading-8 leading-8 sm:text-xl text-md font-primary" ref={typing} />
            </div>
          </div>

          {/* Terminal Section */}
          <div className="my-container flex flex-col  bg-terminal bg-opacity-10 backdrop-blur-md w-full h-[300px] border-terminal border m-2 overflow-hidden cursor-text p-2 rounded-lg">
            <div className="menu flex items-center text-center flex-row w-full text-xl p-2 cursor-default">
              <div className="buttons-flex sm:flex hidden absolute flex-row">
                <div className="my-button w-2.5 h-2.5 rounded-sm mr-4 cursor-pointer bg-button1"></div>
                <div className="my-button w-2.5 h-2.5 rounded-sm mr-4 cursor-pointer bg-button2"></div>
                <div className="my-button w-2.5 h-2.5 rounded-sm mr-4 cursor-pointer bg-button3"></div>
              </div>

              <div className="title flex-1 text-center">
                <a href="#" className="font-retro text-lime-500">Debug Mode: ON 🔧</a>
              </div>
            </div>

            <div id="app2" ref={app2Ref} className="scrollbar-hide flex flex-col text-white w-full h-full p-2 overflow-y-auto">
              {/* Command History */}
              {commandHistory.map((entry, index) => (
                <motion.p
                  key={index}
                  className="font-retro leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {entry}
                </motion.p>
              ))}

              {/* Input Field */}
              <div className="flex items-center">
                <span className="font-retro text-lime-400 mr-2">{'>'}</span>
                <input
                  type="text"
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleCommand}
                  className="font-retro text-white outline-none w-full bg-trans bg-opacity-0"
                  autoFocus
                />
              </div>
            </div>
          </div>


        </div>


        {/* about section goes here  */}
        <motion.div className='px-10 max-w-7xl mx-auto' >
          <p className='font-primary text-white text-md sm:text-xl sm:pb-2'>Prelude</p>
          <h1 className='font-primary text-lime-500 text-2xl sm:text-4xl sm:pb-4 pb-2'>Glimpse</h1>
        </motion.div>

        <motion.p className='font-primary text-white sm:text-lg text-sm leading-relaxed px-10 mx-auto max-w-7xl' variants={fadeIn("", "", 0.1, 1)}>
          {descriptionText}
        </motion.p>




        {/* card holder for skills  */}
        <div className='mt-10 flex flex-wrap gap-10 sm:pl-60 px-10'>
          <SkillComponent />
        </div>


        {/* projects section goes here */}
        <div className='flex justify-start items-start sm:px-32 mx-10 mt-10 flex-col'>
          <motion.div className='pt-10'>
            <p className='font-primary text-white text-md sm:text-xl sm:pb-2'>
              Milestones
            </p>
            <h1 className='font-primary text-lime-500 text-2xl sm:text-4xl sm:pb-4 pb-2'>Builds</h1>
          </motion.div>

          {/* timeline component goes here  */}
          <div className='mt-40 sm:flex flex-col w-full hidden'>
            <TimelineComponent />
          </div>

          {/* alternate mobile view goes here  */}
          <div className='flex flex-wrap sm:hidden mt-12 w-full'>
            {/* project card -1 */}
            {projects.map((project, index) => {
              return (
                <div className='bg-inherit rounded-lg shadow-lg border border-lime-500 p-4 h-auto mb-4 flex items-center flex-col w-full'>
                  <img src={project.icon} className='object-cover' width={40} height={40} alt={project.title} />
                  <div className='flex flex-col items-center'>
                    <h2 className='text-lg text-white font-primary mb-2 pt-2'>{project.title}</h2>


                    <p class="text-white mb-4 font-primary text-sm">A cool project that demonstrates amazing features.</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

            {/* technologies section goes here  */}
        <div className='mt-6 flex items-center justify-center'>
          <Techs/>
        </div>

            {/* Contact section goes here  */}
            <div className='w-100 flex justify-center z-0'>
              <Contact/>
              {/* star canvas goes here  */}
              <StarCanvas/>
              </div>
            





      </section>
    </>


  );
};

export default Hero;
