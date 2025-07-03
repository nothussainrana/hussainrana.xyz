import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-x-hidden">
      {/* Animated Background Particles */}
      <div className="particles fixed inset-0 z-0">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 grid-pattern opacity-20 z-0"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full glass backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="font-bold text-xl text-white animate-fade-in">
              Hussain Rana
            </div>
            <div className="hidden md:flex space-x-8 animate-slide-in-top animate-delay-300">
              <a href="#about" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">About</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">Experience</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">Projects</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">Skills</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Redesigned to be more compact */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-center min-h-[70vh]">
            {/* Left Side - Text Content */}
            <div className="lg:col-span-2 animate-slide-in-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-slide-in-bottom animate-delay-200">
                <span className="gradient-text">Hussain Rana</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-slide-in-bottom animate-delay-400">
                Full-Stack Developer & Software Engineer
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed animate-fade-in animate-delay-700">
                Crafting <span className="text-white font-semibold">digital experiences</span> with cutting-edge technologies. 
                Specialized in building <span className="text-gray-200 font-semibold">scalable web applications</span> and 
                <span className="text-gray-100 font-semibold"> robust backend systems</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-bottom animate-delay-1000">
                <a 
                  href="#contact" 
                  className="group relative bg-gradient-to-r from-gray-200 to-white hover:from-gray-100 hover:to-gray-200 text-black px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-glow-dark"
                >
                  <span className="relative z-10">Get In Touch</span>
                </a>
                <a 
                  href="#projects" 
                  className="group glass text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-white/30 hover-glow"
                >
                  <span className="relative z-10">View My Work</span>
                </a>
              </div>
            </div>

            {/* Right Side - Avatar and Quick Stats */}
            <div className="animate-slide-in-right">
              <div className="text-center lg:text-left">
                <div className="mb-8 animate-scale-in">
                  <div className="w-32 h-32 mx-auto lg:mx-0 bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 rounded-full flex items-center justify-center mb-6 shadow-2xl animate-glow hover-lift relative">
                    <span className="text-4xl font-bold text-black z-10">HR</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-500 to-gray-700 rounded-full animate-pulse-slow opacity-50"></div>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="glass p-6 rounded-2xl hover-lift border border-white/10">
                  <h4 className="font-bold text-white mb-4 text-lg">At a Glance</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Experience</span>
                      <span className="text-white font-semibold">3+ Years</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Location</span>
                      <span className="text-white font-semibold">Malaysia</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Status</span>
                      <span className="text-gray-100 font-semibold">Available</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Projects</span>
                      <span className="text-white font-semibold">10+ Built</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - More compact */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-xl text-gray-300">Passionate about creating innovative solutions</p>
          </div>
          
          {/* Main About Content */}
          <div className="animate-slide-in-left mb-10">
            <h3 className="text-2xl font-bold text-white mb-4">Hello! I'm <span className="text-gray-300">Hussain</span></h3>
            <p className="text-gray-300 mb-4 leading-relaxed max-w-4xl">
              I'm a passionate Full-Stack Developer based in <span className="text-white font-semibold">Kuala Lumpur, Malaysia</span>, 
              with a strong background in building scalable web applications and backend systems. With experience across 
              <span className="text-gray-100 font-semibold"> startups and established companies</span>, I've honed my skills in modern web technologies.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-4xl">
              My journey includes working with companies like <span className="text-gray-100 font-semibold">LuxTag</span> and 
              <span className="text-white font-semibold"> Horestco Industries</span>, where I've built APIs, optimized performance, 
              managed servers, and created CI/CD pipelines.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Education Card */}
            <div className="glass p-6 rounded-xl hover-lift border border-white/10 animate-slide-in-up">
              <h4 className="font-bold text-white mb-3 text-lg">🎓 Education</h4>
              <p className="text-gray-300 text-sm mb-2">Diploma in Software Engineering</p>
              <p className="text-gray-400 text-sm mb-2">Asia Pacific University</p>
              <p className="text-white text-sm font-semibold">GPA: 3.41/4.00</p>
            </div>

            {/* Status Card */}
            <div className="glass p-6 rounded-xl hover-lift border border-white/10 animate-slide-in-up animate-delay-200">
              <h4 className="font-bold text-white mb-3 text-lg">💼 Availability</h4>
              <p className="text-gray-100 text-sm font-semibold mb-2">Open to Remote Work</p>
              <p className="text-gray-300 text-sm mb-2">Kuala Lumpur, Malaysia</p>
              <p className="text-gray-300 text-sm">Available for new opportunities</p>
            </div>

            {/* Experience Highlights */}
            <div className="glass p-6 rounded-xl hover-lift border border-white/10 animate-slide-in-up animate-delay-400 md:col-span-2 lg:col-span-1">
              <h4 className="font-bold text-white mb-3 text-lg">⚡ Experience</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-gray-400 to-white rounded-full mr-3 animate-pulse-slow"></span>
                  <span className="text-gray-300 text-sm">3+ years professional</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-gray-400 to-white rounded-full mr-3 animate-pulse-slow"></span>
                  <span className="text-gray-300 text-sm">Startup experience</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-gray-400 to-white rounded-full mr-3 animate-pulse-slow"></span>
                  <span className="text-gray-300 text-sm">Full-stack expertise</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-gray-400 to-white rounded-full mr-3 animate-pulse-slow"></span>
                  <span className="text-gray-300 text-sm">DevOps & CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - More compact */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="gradient-text">Work Experience</span>
            </h2>
            <p className="text-xl text-gray-300">My professional journey</p>
          </div>
          <div className="space-y-6">
            {/* LuxTag */}
            <div className="glass p-6 rounded-2xl hover-lift animate-slide-in-left border border-white/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center">
                  {/* Company Icon */}
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0 p-2">
                    <Image 
                      src="/luxtag.png.webp" 
                      alt="LuxTag Logo" 
                      width={32} 
                      height={32} 
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Software Engineer</h3>
                    <p className="text-gray-200 font-semibold">LuxTag - Startup</p>
                  </div>
                </div>
                <div className="text-gray-300 mt-2 md:mt-0">
                  <span className="bg-gradient-to-r from-gray-200 to-white text-black px-3 py-1 rounded-full text-xs mr-2 font-semibold">Current</span>
                  <span className="text-gray-400 text-sm">March 2025 – Present • Remote</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-gray-400 to-white rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse-slow"></span>
                  Created and maintained API documentation, improving developer onboarding and speed
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-gray-400 to-white rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse-slow"></span>
                  Built and optimized frontend interfaces and backend APIs, improving overall product performance and user experience
                </li>
              </ul>
            </div>

            {/* Horestco */}
            <div className="glass p-6 rounded-2xl hover-lift animate-slide-in-right animate-delay-200 border border-white/15">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center">
                  {/* Company Icon */}
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0 p-2">
                    <Image 
                      src="/horestco.png" 
                      alt="Horestco Logo" 
                      width={32} 
                      height={32} 
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Fullstack Developer</h3>
                    <p className="text-gray-200 font-semibold">Horestco Industries</p>
                  </div>
                </div>
                <div className="text-gray-300 mt-2 md:mt-0">
                  <span className="text-gray-400 text-sm">January 2024 – March 2025 • Hybrid</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-gray-500 to-gray-300 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse-slow"></span>
                  Managed servers using CLI (MySQL, Apache, SSH) and built CI/CD pipelines, reducing deployment time and manual errors
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-gray-500 to-gray-300 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse-slow"></span>
                  Automated routine tasks, integrated analytics tools, and performed SEO research, leading to better visibility and streamlined workflows
                </li>
              </ul>
            </div>

            {/* APU */}
            <div className="glass p-6 rounded-2xl hover-lift animate-slide-in-left animate-delay-400 border border-white/15">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center">
                  {/* Company Icon */}
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0 p-1">
                    <Image 
                      src="/apu.jpeg" 
                      alt="Asia Pacific University Logo" 
                      width={40} 
                      height={40} 
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Technical Assistant</h3>
                    <p className="text-gray-200 font-semibold">Asia Pacific University</p>
                  </div>
                </div>
                <div className="text-gray-300 mt-2 md:mt-0">
                  <span className="text-gray-400 text-sm">August 2023 – December 2023 • On-Site</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse-slow"></span>
                  Updated and deployed software across hundreds of systems via Microsoft Active Directory, ensuring consistency and security
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse-slow"></span>
                  Standardized hardware configurations, resulting in a uniform and reliable user experience across the university
                </li>
              </ul>
            </div>

            {/* Freelance */}
            <div className="glass p-6 rounded-2xl hover-lift animate-slide-in-right animate-delay-500 border border-white/15">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center">
                  {/* Company Icon Placeholder for Upwork */}
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-300 to-gray-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl text-black font-bold">UW</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Freelance Fullstack Developer</h3>
                    <p className="text-gray-200 font-semibold">Upwork</p>
                  </div>
                </div>
                <div className="text-gray-300 mt-2 md:mt-0">
                  <span className="text-gray-400 text-sm">September 2022 – August 2023 • Remote</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse-slow"></span>
                  Built fullstack apps, Discord bots, web scraping tools, and handled website migrations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse-slow"></span>
                  Delivered MVPs and integrated payment systems for solo clients and small businesses
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - More compact */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-gray-300">Some of my recent work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Morpheus.asia */}
            <div className="glass p-6 rounded-2xl hover-lift animate-scale-in border border-white/15 group">
              <div className="flex items-center mb-4">
                {/* Project Icon */}
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 p-2">
                  <Image 
                    src="/mor-asia-logo-2.png" 
                    alt="Morpheus.asia Logo" 
                    width={32} 
                    height={32} 
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Morpheus.asia</h3>
                  <a 
                    href="https://morpheus.asia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
                  >
                    morpheus.asia ↗
                  </a>
                </div>
              </div>
              <p className="text-gray-300 mb-3 leading-relaxed text-sm">
                Built a custom blog system and metrics dashboard using <span className="text-white font-semibold">Next.js fullstack capabilities</span> (API routes + frontend), displaying real-time site data.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Collaborated in a dev team using <span className="text-gray-100 font-semibold">Git, PRs, and code reviews</span> to ship features fast and cleanly.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-2 py-1 rounded-full text-xs font-semibold">Next.js</span>
                <span className="bg-gradient-to-r from-gray-600 to-gray-500 text-white px-2 py-1 rounded-full text-xs font-semibold">React</span>
                <span className="bg-gradient-to-r from-gray-500 to-gray-400 text-white px-2 py-1 rounded-full text-xs font-semibold">TypeScript</span>
              </div>
            </div>

            {/* Dashtly */}
            <div className="glass p-6 rounded-2xl hover-lift animate-scale-in animate-delay-200 border border-white/15 group">
              <div className="flex items-center mb-4">
                {/* Project Icon */}
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 p-1">
                  <Image 
                    src="/dashtly.jpg" 
                    alt="Dashtly Logo" 
                    width={40} 
                    height={40} 
                    className="object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Dashtly</h3>
                  <a 
                    href="https://dashtly.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
                  >
                    dashtly.com ↗
                  </a>
                </div>
              </div>
              <p className="text-gray-300 mb-3 leading-relaxed text-sm">
                Built a full <span className="text-white font-semibold">P2P marketplace</span> with Next.js, Prisma, PostgreSQL, 
                and custom auth (signup/login, forgot password, email via SMTP).
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Deployed on <span className="text-gray-100 font-semibold">DigitalOcean</span> with an S3 bucket, 
                DB management, and UX for the Tajik market.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-2 py-1 rounded-full text-xs font-semibold">Next.js</span>
                <span className="bg-gradient-to-r from-gray-600 to-gray-500 text-white px-2 py-1 rounded-full text-xs font-semibold">Prisma</span>
                <span className="bg-gradient-to-r from-gray-500 to-gray-400 text-white px-2 py-1 rounded-full text-xs font-semibold">PostgreSQL</span>
                <span className="bg-gradient-to-r from-gray-400 to-gray-300 text-black px-2 py-1 rounded-full text-xs font-semibold">DigitalOcean</span>
              </div>
            </div>

            {/* phpSite */}
            <div className="glass p-6 rounded-2xl hover-lift animate-scale-in animate-delay-400 border border-white/15 group">
              <div className="flex items-center mb-4">
                {/* Project Icon Placeholder - No logo available */}
                <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl text-white font-bold">P</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">phpSite</h3>
                  <span className="text-gray-400 font-medium text-sm">Custom MVC Framework</span>
                </div>
              </div>
              <p className="text-gray-300 mb-3 leading-relaxed text-sm">
                Designed a custom <span className="text-white font-semibold">MVC structure</span> and mimicked Laravel's 
                request lifecycle without relying on external libraries.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Built lightweight alternatives to <span className="text-gray-100 font-semibold">Laravel features</span> like 
                middleware and simple ORM, leveling up backend fundamentals.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-gray-600 to-gray-500 text-white px-2 py-1 rounded-full text-xs font-semibold">PHP</span>
                <span className="bg-gradient-to-r from-gray-500 to-gray-400 text-white px-2 py-1 rounded-full text-xs font-semibold">MVC</span>
                <span className="bg-gradient-to-r from-gray-400 to-gray-300 text-black px-2 py-1 rounded-full text-xs font-semibold">Custom Framework</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - More compact */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <p className="text-xl text-gray-300">Technologies I work with</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Languages */}
            <div className="glass p-6 rounded-2xl hover-lift animate-slide-in-left border border-white/15">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">💻</span>
                Languages
              </h3>
              <div className="space-y-3">
                {['JavaScript', 'TypeScript', 'Python', 'PHP', 'HTML', 'CSS', 'Bash', 'SQL'].map((skill, index) => (
                  <div key={skill} className={`flex items-center animate-fade-in animate-delay-${(index + 1) * 100}`}>
                    <span className="w-2 h-2 bg-gradient-to-r from-white to-gray-400 rounded-full mr-3 animate-pulse-slow"></span>
                    <span className="text-gray-300 hover:text-white transition-colors text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="glass p-6 rounded-2xl hover-lift animate-slide-in-left animate-delay-200 border border-white/15">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">⚛️</span>
                Frameworks & Libraries
              </h3>
              <div className="space-y-3">
                {['Node.js', 'Express', 'React', 'Next.js', 'Tailwind CSS', 'MedusaJS', 'Laravel', 'Ethers.js', 'Prisma ORM'].map((skill, index) => (
                  <div key={skill} className={`flex items-center animate-fade-in animate-delay-${(index + 1) * 100}`}>
                    <span className="w-2 h-2 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full mr-3 animate-pulse-slow"></span>
                    <span className="text-gray-300 hover:text-white transition-colors text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases & Tools */}
            <div className="glass p-6 rounded-2xl hover-lift animate-slide-in-right animate-delay-200 border border-white/15">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">🛠️</span>
                Databases & Tools
              </h3>
              <div className="space-y-3">
                {['MySQL', 'PostgreSQL', 'Redis', 'Docker', 'Linux', 'Nginx', 'Git', 'Puppeteer'].map((skill, index) => (
                  <div key={skill} className={`flex items-center animate-fade-in animate-delay-${(index + 1) * 100}`}>
                    <span className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mr-3 animate-pulse-slow"></span>
                    <span className="text-gray-300 hover:text-white transition-colors text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="glass p-6 rounded-2xl hover-lift animate-slide-in-right border border-white/15">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">☁️</span>
                Cloud & DevOps
              </h3>
              <div className="space-y-3">
                {['DigitalOcean', 'AWS (EC2, S3)', 'Cloudflare', 'GitHub Actions', 'CI/CD', 'Vercel', 'Firebase', 'SMTP', 'Stripe'].map((skill, index) => (
                  <div key={skill} className={`flex items-center animate-fade-in animate-delay-${(index + 1) * 100}`}>
                    <span className="w-2 h-2 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full mr-3 animate-pulse-slow"></span>
                    <span className="text-gray-300 hover:text-white transition-colors text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - More compact */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="gradient-text">Let's Work Together</span>
            </h2>
            <p className="text-xl text-gray-300">Ready to bring your ideas to life</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm always open to discussing <span className="text-white font-semibold">new opportunities</span>, 
                <span className="text-gray-100 font-semibold"> interesting projects</span>, or just having a chat about technology. 
                Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 hover-glow border border-white/10">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href="mailto:nothussainrana@icloud.com" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
                      nothussainrana@icloud.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 hover-glow border border-white/10">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a href="tel:+60108326134" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
                      +60 10 832 6134
                    </a>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 hover-glow border border-white/10">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-gray-300 font-medium text-sm">Kuala Lumpur, Malaysia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="glass p-6 rounded-2xl hover-lift border border-white/10">
                <h4 className="font-bold text-white mb-6 text-lg">Connect with me</h4>
                <div className="space-y-4">
                  <a 
                    href="https://linkedin.com/in/nothussainrana" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 glass rounded-xl hover:scale-105 transition-all duration-300 hover-glow border border-white/10"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-200 to-white rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white group-hover:text-gray-300 transition-colors">LinkedIn</p>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm">Professional Network</p>
                    </div>
                  </a>
                  <a 
                    href="https://github.com/nothussainrana" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 glass rounded-xl hover:scale-105 transition-all duration-300 hover-glow border border-white/10"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-800 to-black rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white group-hover:text-gray-300 transition-colors">GitHub</p>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm">Code Repository</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
