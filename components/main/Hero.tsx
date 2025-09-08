'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaCode } from 'react-icons/fa';
import { TextGenerateEffect } from '../ui/TextGenerateEffect';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';
import StarsCanvas from './StarBackground';

const socialLinks = [
  {
    href: 'https://github.com/Nishant-Gaur07',
    label: 'GitHub',
    icon: <FaGithub />,
  },
  {
    href: 'https://www.linkedin.com/in/nishantgaur1110/',
    label: 'LinkedIn',
    icon: <FaLinkedinIn />,
  },
  {
    href: 'mailto:nishantgaur1110@gmail.com',
    label: 'Email',
    icon: <FaEnvelope />,
  },
];

const Hero = () => {
  const [showStars, setShowStars] = useState(true);

  return (
    <section
      id="hero"
      className="flex items-center h-auto md:min-h-[70vh] lg:min-h-[80vh] py-2 px-2 mt-12 text-white"
    >
      <div className="container mx-auto flex flex-wrap items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(1)}
          className="w-full md:w-1/2 flex flex-col md:items-start items-center"
        >
          <div className="flex items-center mb-2">
            <div className="Welcome-box py-2 px-2 border border-[#7042f88b] opacity-[0.9]">
              <FaCode className="text-[#b49bff] mr-[10px] h-5 w-5" />
              <div className="Welcome-text italic md:text-xl text-xs px-2 ml-[-12px] font-semibold">
                Nishant - Technology Enthusiast
              </div>
            </div>
          </div>
          <h2 className="md:text-5xl text-xl font-bold leading-tight">
            Always{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              learning
            </span>
            , always{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              building
            </span>
          </h2>
          <h4 className="md:text-xl text-base font-medium text-gray-400 mt-1 mb-[-6px] italic flex ">
            <Image
              src="/location.png"
              alt="India Flag"
              width={24}
              height={24}
              className="mr-2"
            />
            Based in Greater Noida, India
          </h4>

          <TextGenerateEffect
            words="I'm a passionate and detail-oriented technology enthusiast with hands-on practice in Cloud Platforms and Web Development. Currently pursuing Bachelor of Technology in Information Technology at NIET, Greater Noida with CGPA 7.51. I specialize in Java, React.js, AWS, Azure, and SQL. Eager to contribute my skills and grow in a dynamic tech environment."
          />

          {/* Toggle Button + Social Links */}
          <div className="flex flex-col md:flex-row items-center mt-2 z-20">
            <button
              className={`md:inline-block sm:px-8 sm:py-2 px-4 py-2 sm:text-sm md:text-base lg:text-lg text-sm rounded-xl transition-colors ${
                showStars
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              onClick={() => setShowStars(!showStars)}
            >
              {showStars ? 'Disable Background Stars' : 'Enable Background Stars'}
            </button>
            <div className="flex gap-4 md:gap-6 justify-center md:justify-end items-center mt-6 md:mt-0 md:ml-6">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white text-2xl md:text-4xl hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromRight(1)}
          className="w-full md:w-1/2 px-4 mt-6 md:mt-2 flex justify-center items-center"
        >
          <div className="relative overflow-hidden rounded-3xl bg-[#ffffff10] backdrop-blur-xl border border-border-custom flex justify-center items-center shadow-sm shadow-gray-800 w-[200px] h-[300px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[370px]">
            <Image
              src="/nishant-profile.jpg"
              alt="Nishant Image"
              className="object-cover object-bottom rounded-3xl transition-transform duration-500 hover:scale-105"
              priority
              fill
              quality={80}
              sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              33vw"
            />
          </div>
        </motion.div>
      </div>

      {/* Stars Background with fade animation */}
      <AnimatePresence>
        {showStars && (
          <motion.div
            key="stars"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <StarsCanvas show={showStars} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
