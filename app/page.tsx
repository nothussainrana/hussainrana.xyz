'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import GalaxyBackground from "./components/GalaxyBackground";
import VantaBackground from "./components/VantaBackground";
import ParticlesBackground from "./components/ParticlesBackground";
import HeroTypewriter from "./components/HeroTypewriter";
import MagneticButton from "./components/MagneticButton";
import AnimatedCard from "./components/AnimatedCard";
import AnimatedSection, { itemVariants } from "./components/AnimatedSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Galaxy Starfield Background with Nebulas */}
      <GalaxyBackground />
      
      {/* Vanta NET 3D Effect Layer */}
      <VantaBackground />
      
      {/* Interactive Particles - Reduced for performance */}
      <ParticlesBackground />

      {/* Navigation with Framer Motion */}
      <motion.nav 
        className="fixed top-0 w-full glass backdrop-blur-md z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="font-bold text-xl text-white cursor-hover"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hussain Rana
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-gray-200 transition-all duration-300 cursor-hover text-base font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - With TypeIt Effect */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Side - Text Content with Typewriter */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <HeroTypewriter />
              <motion.p 
                className="text-xl text-white mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.6 }}
              >
                Crafting <span className="text-white font-bold">digital experiences</span> with cutting-edge technologies. 
                Specialized in building <span className="text-white font-bold">scalable web applications</span> and 
                <span className="text-white font-bold"> robust backend systems</span>.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 0.6 }}
              >
                <MagneticButton 
                  href="#contact"
                  className="group relative bg-white hover:bg-gray-100 text-black px-10 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-block text-center text-lg"
                >
                  <span className="relative z-10">Get In Touch</span>
                </MagneticButton>
                <MagneticButton 
                  href="#projects"
                  className="group glass text-white hover:bg-white/10 px-10 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block text-center text-lg"
                >
                  <span className="relative z-10">View My Work</span>
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Right Side - Profile Picture and Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="flex flex-col items-center lg:items-end space-y-8">
                {/* Profile Picture */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-48 h-48 rounded-lg overflow-hidden shadow-2xl animate-glow hover-lift cursor-hover">
                    <Image 
                      src="/Me1.jpg" 
                      alt="Hussain Rana Profile Picture" 
                      width={192} 
                      height={192} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </motion.div>
                
                {/* Quick Stats */}
                <motion.div 
                  className="glass p-8 rounded-lg hover-lift w-full max-w-sm cursor-hover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-bold mb-6 text-2xl">
                    <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">At a Glance</span>
                  </h4>
                  <div className="space-y-4">
                    {[
                      { label: 'Experience', value: '3+ Years' },
                      { label: 'Location', value: 'Malaysia' },
                      { label: 'Status', value: 'Available' },
                      { label: 'Projects', value: '10+ Built' }
                    ].map((stat, index) => (
                      <motion.div 
                        key={stat.label}
                        className="flex items-center justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <span className="text-white text-base">{stat.label}</span>
                        <span className="text-white font-bold text-lg">{stat.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - With AnimatedSection */}
      <AnimatedSection id="about" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">About Me</span>
            </h2>
            <p className="text-2xl text-white">Passionate about creating innovative solutions</p>
          </motion.div>
          
          {/* Main About Content */}
          <motion.div className="mb-10" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-6">Hello! I'm <span className="text-white">Hussain</span></h3>
            <p className="text-white text-lg mb-6 leading-relaxed max-w-4xl">
              I'm a passionate Full-Stack Developer based in <span className="text-white font-bold">Kuala Lumpur, Malaysia</span>, 
              with a strong background in building scalable web applications and backend systems. With experience across 
              <span className="text-white font-bold"> startups and established companies</span>, I've honed my skills in modern web technologies.
            </p>
            <p className="text-white text-lg mb-8 leading-relaxed max-w-4xl">
              My journey includes working with companies like <span className="text-white font-bold">LuxTag</span> and 
              <span className="text-white font-bold"> Horestco Industries</span>, where I've built APIs, optimized performance, 
              managed servers, and created CI/CD pipelines.
            </p>
          </motion.div>

          {/* Cards Grid with Stagger Animation */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedCard className="glass p-8 rounded-lg hover-lift" delay={0}>
              <h4 className="font-bold mb-4 text-2xl">
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Education</span>
              </h4>
              <p className="text-white text-lg mb-3 font-medium">Diploma in Software Engineering</p>
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center mr-2 flex-shrink-0 p-1">
                  <Image 
                    src="/apu.jpeg" 
                    alt="Asia Pacific University Logo" 
                    width={24} 
                    height={24} 
                    className="object-contain rounded"
                  />
                </div>
                <p className="text-white text-base">Asia Pacific University</p>
              </div>
              <p className="text-white text-base font-bold">GPA: 3.41/4.00</p>
            </AnimatedCard>

            <AnimatedCard className="glass p-8 rounded-lg hover-lift" delay={0.1}>
              <h4 className="font-bold mb-4 text-2xl">
                <span className="text-transparent bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text">Availability</span>
              </h4>
              <p className="text-white text-lg font-bold mb-3">Open to Remote Work</p>
              <p className="text-white text-base mb-3">Kuala Lumpur, Malaysia</p>
              <p className="text-white text-base">Available for new opportunities</p>
            </AnimatedCard>

            <AnimatedCard className="glass p-8 rounded-lg hover-lift md:col-span-2 lg:col-span-1" delay={0.2}>
              <h4 className="font-bold mb-4 text-2xl">
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">Experience</span>
              </h4>
              <div className="space-y-3">
                {['3+ years professional', 'Startup experience', 'Full-stack expertise', 'DevOps & CI/CD'].map((item, index) => (
                  <motion.div 
                    key={item}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="w-2 h-2 bg-white rounded-sm mr-3 flex-shrink-0"></span>
                    <span className="text-white text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section - Timeline Design */}
      <AnimatedSection id="experience" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">Work Experience</span>
            </h2>
            <p className="text-2xl text-white">My professional journey</p>
          </motion.div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 opacity-30"></div>
            
            <div className="space-y-12">
              {/* Morpheus Asia - Current */}
              <AnimatedCard className="relative" delay={0}>
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -ml-3 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-black z-10"></div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 md:pr-12 md:text-right md:ml-0 ml-20">
                    <div className="inline-block">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-bold">Current Position</span>
                    </div>
                    <p className="text-white text-base font-medium mt-3">June 2025 – Present</p>
                    <p className="text-white text-sm mt-1 opacity-80">Remote</p>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 ml-20 md:ml-0">
                    <div className="glass p-6 rounded-lg hover-lift">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                          <Image 
                            src="/mor-asia-logo-2.png" 
                            alt="Morpheus Asia Logo" 
                            width={48} 
                            height={48} 
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Community Lead</h3>
                          <p className="text-white text-lg font-semibold">Morpheus Asia</p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-white text-base">
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-3 flex-shrink-0">▸</span>
                          Led growth of Morpheus ecosystem and community building in Asia
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-3 flex-shrink-0">▸</span>
                          Worked on technical frontends that query the blockchain & smart contracts
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-3 flex-shrink-0">▸</span>
                          Wrote user guides onboarding normies to complex staking mechanisms and the blockchain world
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedCard>

              {/* LuxTag */}
              <AnimatedCard className="relative" delay={0.1}>
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -ml-3 w-6 h-6 rounded-full bg-white border-4 border-black z-10"></div>
                  
                  {/* Content - Reversed for alternating layout */}
                  <div className="md:w-1/2 md:pr-12 md:text-right ml-20 md:ml-0">
                    <div className="glass p-6 rounded-lg hover-lift md:hidden">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                          <Image 
                            src="/luxtag.png.webp" 
                            alt="LuxTag Logo" 
                            width={48} 
                            height={48} 
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Software Engineer</h3>
                          <p className="text-white text-lg font-semibold">LuxTag</p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-white text-base">
                        <li className="flex items-start">
                          <span className="text-pink-400 mr-3 flex-shrink-0">▸</span>
                          Created and maintained API documentation, improving developer onboarding speed
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-400 mr-3 flex-shrink-0">▸</span>
                          Built and optimized frontend interfaces and backend APIs, improving product performance
                        </li>
                      </ul>
                    </div>
                    
                    {/* Desktop version */}
                    <div className="glass p-6 rounded-lg hover-lift hidden md:block">
                      <div className="flex items-center gap-4 mb-4 justify-end">
                        <div>
                          <h3 className="text-2xl font-bold text-white">Software Engineer</h3>
                          <p className="text-white text-lg font-semibold">LuxTag</p>
                        </div>
                        <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                          <Image 
                            src="/luxtag.png.webp" 
                            alt="LuxTag Logo" 
                            width={48} 
                            height={48} 
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <ul className="space-y-3 text-white text-base text-right">
                        <li className="flex items-start justify-end">
                          <span className="order-2 text-pink-400 ml-3 flex-shrink-0">◂</span>
                          <span className="order-1">Created and maintained API documentation, improving developer onboarding speed</span>
                        </li>
                        <li className="flex items-start justify-end">
                          <span className="order-2 text-pink-400 ml-3 flex-shrink-0">◂</span>
                          <span className="order-1">Built and optimized frontend interfaces and backend APIs, improving product performance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 ml-20 md:ml-0">
                    <p className="text-white text-base font-medium">March 2025 – June 2025</p>
                    <p className="text-white text-sm mt-1 opacity-80">Remote</p>
                  </div>
                </div>
              </AnimatedCard>

              {/* Horestco */}
              <AnimatedCard className="relative" delay={0.2}>
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="absolute left-8 md:left-1/2 -ml-3 w-6 h-6 rounded-full bg-white border-4 border-black z-10"></div>
                  
                  <div className="md:w-1/2 md:pr-12 md:text-right md:ml-0 ml-20">
                    <p className="text-white text-base font-medium">January 2024 – March 2025</p>
                    <p className="text-white text-sm mt-1 opacity-80">Hybrid</p>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 ml-20 md:ml-0">
                    <div className="glass p-6 rounded-lg hover-lift">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                          <Image 
                            src="/horestco.png" 
                            alt="Horestco Logo" 
                            width={48} 
                            height={48} 
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Fullstack Developer</h3>
                          <p className="text-white text-lg font-semibold">Horestco Industries</p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-white text-base">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 flex-shrink-0">▸</span>
                          Managed servers using CLI and built CI/CD pipelines, reducing deployment time
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 flex-shrink-0">▸</span>
                          Automated routine tasks and integrated analytics tools for better visibility
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedCard>

              {/* APU */}
              <AnimatedCard className="relative" delay={0.3}>
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="absolute left-8 md:left-1/2 -ml-3 w-6 h-6 rounded-full bg-white border-4 border-black z-10"></div>
                  
                  <div className="md:w-1/2 md:pr-12 md:text-right ml-20 md:ml-0">
                    <div className="glass p-6 rounded-lg hover-lift md:hidden">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-1 flex-shrink-0">
                          <Image 
                            src="/apu.jpeg" 
                            alt="Asia Pacific University Logo" 
                            width={52} 
                            height={52} 
                            className="object-contain rounded-md"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Technical Assistant</h3>
                          <p className="text-white text-lg font-semibold">Asia Pacific University</p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-white text-base">
                        <li className="flex items-start">
                          <span className="text-cyan-400 mr-3 flex-shrink-0">▸</span>
                          Deployed software across hundreds of systems via Active Directory
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-400 mr-3 flex-shrink-0">▸</span>
                          Standardized hardware configurations for consistent user experience
                        </li>
                      </ul>
                    </div>
                    
                    <div className="glass p-6 rounded-lg hover-lift hidden md:block">
                      <div className="flex items-center gap-4 mb-4 justify-end">
                        <div>
                          <h3 className="text-2xl font-bold text-white">Technical Assistant</h3>
                          <p className="text-white text-lg font-semibold">Asia Pacific University</p>
                        </div>
                        <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-1 flex-shrink-0">
                          <Image 
                            src="/apu.jpeg" 
                            alt="Asia Pacific University Logo" 
                            width={52} 
                            height={52} 
                            className="object-contain rounded-md"
                          />
                        </div>
                      </div>
                      <ul className="space-y-3 text-white text-base text-right">
                        <li className="flex items-start justify-end">
                          <span className="order-2 text-cyan-400 ml-3 flex-shrink-0">◂</span>
                          <span className="order-1">Deployed software across hundreds of systems via Active Directory</span>
                        </li>
                        <li className="flex items-start justify-end">
                          <span className="order-2 text-cyan-400 ml-3 flex-shrink-0">◂</span>
                          <span className="order-1">Standardized hardware configurations for consistent user experience</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 ml-20 md:ml-0">
                    <p className="text-white text-base font-medium">August 2023 – December 2023</p>
                    <p className="text-white text-sm mt-1 opacity-80">On-Site</p>
                  </div>
                </div>
              </AnimatedCard>

              {/* Upwork Freelance */}
              <AnimatedCard className="relative" delay={0.4}>
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="absolute left-8 md:left-1/2 -ml-3 w-6 h-6 rounded-full bg-white border-4 border-black z-10"></div>
                  
                  <div className="md:w-1/2 md:pr-12 md:text-right md:ml-0 ml-20">
                    <p className="text-white text-base font-medium">September 2022 – August 2023</p>
                    <p className="text-white text-sm mt-1 opacity-80">Remote</p>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 ml-20 md:ml-0">
                    <div className="glass p-6 rounded-lg hover-lift">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                          <Image 
                            src="/upwork-logo.svg" 
                            alt="Upwork Logo" 
                            width={48} 
                            height={48} 
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Freelance Developer</h3>
                          <p className="text-white text-lg font-semibold">Upwork</p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-white text-base">
                        <li className="flex items-start">
                          <span className="text-green-400 mr-3 flex-shrink-0">▸</span>
                          Built fullstack apps, Discord bots, and web scraping tools
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-3 flex-shrink-0">▸</span>
                          Delivered MVPs and integrated payment systems for clients
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section - With Animated Cards */}
      <AnimatedSection id="projects" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">Featured Projects</span>
            </h2>
            <a 
              href="https://github.com/nothussainrana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text hover:from-purple-300 hover:via-pink-300 hover:to-blue-300 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              View All
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Morpheus.asia */}
            <AnimatedCard className="glass p-8 rounded-lg hover-lift group cursor-hover" delay={0}>
              <div className="flex items-center mb-6">
                {/* Project Icon */}
                <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 p-2">
                  <Image 
                    src="/mor-asia-logo-2.png" 
                    alt="Morpheus.asia Logo" 
                    width={48} 
                    height={48} 
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Morpheus.asia</h3>
                  <a 
                    href="https://morpheus.asia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors font-medium text-base cursor-hover"
                  >
                    morpheus.asia ↗
                  </a>
                </div>
              </div>
              <p className="text-white mb-4 leading-relaxed text-base">
                Built a custom blog system and metrics dashboard using <span className="text-white font-bold">Next.js fullstack capabilities</span> (API routes + frontend), displaying real-time site data.
              </p>
              <p className="text-white mb-6 leading-relaxed text-base">
                Collaborated in a dev team using <span className="text-white font-bold">Git, PRs, and code reviews</span> to ship features fast and cleanly.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white text-black px-3 py-1.5 rounded-md text-sm font-bold">Next.js</span>
                <span className="bg-white text-black px-3 py-1.5 rounded-md text-sm font-bold">React</span>
                <span className="bg-white text-black px-3 py-1.5 rounded-md text-sm font-bold">TypeScript</span>
              </div>
            </AnimatedCard>

            {/* Dashtly */}
            <AnimatedCard className="glass p-8 rounded-lg hover-lift group cursor-hover" delay={0.1}>
              <div className="flex items-center mb-6">
                {/* Project Icon */}
                <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 p-1">
                  <Image 
                    src="/dashtly.jpg" 
                    alt="Dashtly Logo" 
                    width={56} 
                    height={56} 
                    className="object-contain rounded-md"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Dashtly</h3>
                  <a 
                    href="https://dashtly.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors font-medium text-base cursor-hover"
                  >
                    dashtly.com ↗
                  </a>
                </div>
              </div>
              <p className="text-white mb-4 leading-relaxed text-base">
                Built a full <span className="text-white font-bold">P2P marketplace</span> with Next.js, Prisma, PostgreSQL, 
                and custom auth (signup/login, forgot password, email via SMTP).
              </p>
              <p className="text-white mb-6 leading-relaxed text-base">
                Deployed on <span className="text-white font-bold">DigitalOcean</span> with an S3 bucket, 
                DB management, and UX for the Tajik market.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white text-black px-3 py-1.5 rounded-md text-sm font-bold">Next.js</span>
                <span className="bg-white text-black px-3 py-1.5 rounded-md text-sm font-bold">Prisma</span>
                <span className="bg-white text-black px-3 py-1.5 rounded-md text-sm font-bold">PostgreSQL</span>
                <span className="bg-white text-black px-3 py-1.5 rounded-md text-sm font-bold">DigitalOcean</span>
              </div>
            </AnimatedCard>

            {/* phpSite */}
            <AnimatedCard className="glass p-8 rounded-lg hover-lift group cursor-hover" delay={0.2}>
              <div className="flex items-center mb-6">
                {/* Project Icon Placeholder - No logo available */}
                <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-black font-bold">P</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">phpSite</h3>
                  <span className="text-white font-medium text-base">Custom MVC Framework</span>
                </div>
              </div>
              <p className="text-white mb-4 leading-relaxed text-base">
                Designed a custom <span className="text-white font-bold">MVC structure</span> and mimicked Laravel's 
                request lifecycle without relying on external libraries.
              </p>
              <p className="text-white mb-6 leading-relaxed text-base">
                Built lightweight alternatives to <span className="text-white font-bold">Laravel features</span> like 
                middleware and simple ORM, leveling up backend fundamentals.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white text-black px-3 py-1.5 rounded-md text-sm font-bold">PHP</span>
                <span className="bg-white text-black px-3 py-1.5 rounded-md text-sm font-bold">MVC</span>
                <span className="bg-white text-black px-3 py-1.5 rounded-md text-sm font-bold">Custom Framework</span>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section - With AnimatedSection */}
      <AnimatedSection id="skills" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">Skills</span>
            </h2>
            <p className="text-2xl text-white">Technologies I work with</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Languages */}
            <AnimatedCard className="glass p-8 rounded-lg hover-lift cursor-hover" delay={0}>
              <h3 className="text-2xl font-bold text-white mb-6">
                Languages
              </h3>
              <div className="space-y-4">
                {['JavaScript', 'TypeScript', 'Python', 'PHP', 'HTML', 'CSS', 'Bash', 'SQL'].map((skill, index) => (
                  <motion.div 
                    key={skill} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="w-2 h-2 bg-white rounded-sm mr-4"></span>
                    <span className="text-white hover:text-gray-300 transition-colors text-base font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedCard>

            {/* Frameworks */}
            <AnimatedCard className="glass p-8 rounded-lg hover-lift cursor-hover" delay={0.1}>
              <h3 className="text-2xl font-bold text-white mb-6">
                Frameworks & Libraries
              </h3>
              <div className="space-y-4">
                {['Node.js', 'Express', 'React', 'Next.js', 'Tailwind CSS', 'MedusaJS', 'Laravel', 'Ethers.js', 'Prisma ORM'].map((skill, index) => (
                  <motion.div 
                    key={skill} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="w-2 h-2 bg-white rounded-sm mr-4"></span>
                    <span className="text-white hover:text-gray-300 transition-colors text-base font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedCard>

            {/* Databases & Tools */}
            <AnimatedCard className="glass p-8 rounded-lg hover-lift cursor-hover" delay={0.2}>
              <h3 className="text-2xl font-bold text-white mb-6">
                Databases & Tools
              </h3>
              <div className="space-y-4">
                {['MySQL', 'PostgreSQL', 'Redis', 'Docker', 'Linux', 'Nginx', 'Git', 'Puppeteer'].map((skill, index) => (
                  <motion.div 
                    key={skill} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="w-2 h-2 bg-white rounded-sm mr-4"></span>
                    <span className="text-white hover:text-gray-300 transition-colors text-base font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedCard>

            {/* Cloud & DevOps */}
            <AnimatedCard className="glass p-8 rounded-lg hover-lift cursor-hover" delay={0.3}>
              <h3 className="text-2xl font-bold text-white mb-6">
                Cloud & DevOps
              </h3>
              <div className="space-y-4">
                {['DigitalOcean', 'AWS (EC2, S3)', 'Cloudflare', 'GitHub Actions', 'CI/CD', 'Vercel', 'Firebase', 'SMTP', 'Stripe'].map((skill, index) => (
                  <motion.div 
                    key={skill} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="w-2 h-2 bg-white rounded-full mr-4 animate-pulse-slow"></span>
                    <span className="text-white hover:text-gray-300 transition-colors text-base font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section - With AnimatedSection */}
      <AnimatedSection id="contact" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">Let's Work Together</span>
            </h2>
            <p className="text-2xl text-white">Ready to bring your ideas to life</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-8">
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Get In Touch</span>
              </h3>
              <p className="text-white text-lg mb-8 leading-relaxed">
                I'm always open to discussing <span className="text-white font-bold">new opportunities</span>, 
                <span className="text-white font-bold"> interesting projects</span>, or just having a chat about technology. 
                Feel free to reach out!
              </p>
              <div className="space-y-5">
                {[
                  { label: 'Email', value: 'nothussainrana@icloud.com', href: 'mailto:nothussainrana@icloud.com' },
                  { label: 'Phone', value: '+60 10 832 6134', href: 'tel:+60108326134' },
                  { label: 'Location', value: 'Kuala Lumpur, Malaysia', href: null }
                ].map((contact, index) => (
                  <motion.div 
                    key={contact.label}
                    className="flex items-center group cursor-hover"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-14 h-14 glass rounded-md flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300 hover-glow">
                      <span className="w-3 h-3 bg-white rounded-sm"></span>
                    </div>
                    <div>
                      <p className="font-bold text-white text-base mb-1">{contact.label}</p>
                      {contact.href ? (
                        <a href={contact.href} className="text-white hover:text-gray-300 transition-colors font-medium text-base">
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium text-base">{contact.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="glass p-8 rounded-lg hover-lift cursor-hover">
                <h4 className="font-bold mb-8 text-2xl">
                  <span className="text-transparent bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text">Connect with me</span>
                </h4>
                <div className="space-y-5">
                  <MagneticButton 
                    href="https://linkedin.com/in/nothussainrana"
                    className="group flex items-center p-6 glass rounded-xl transition-all duration-300 hover-glow w-full"
                  >
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-white group-hover:text-gray-300 transition-colors text-lg">LinkedIn</p>
                      <p className="text-white group-hover:text-gray-300 transition-colors text-base">Professional Network</p>
                    </div>
                  </MagneticButton>
                  <MagneticButton 
                    href="https://github.com/nothussainrana"
                    className="group flex items-center p-6 glass rounded-xl transition-all duration-300 hover-glow w-full"
                  >
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-white group-hover:text-gray-300 transition-colors text-lg">GitHub</p>
                      <p className="text-white group-hover:text-gray-300 transition-colors text-base">Code Repository</p>
                    </div>
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
