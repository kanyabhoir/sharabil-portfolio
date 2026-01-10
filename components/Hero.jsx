'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollDown = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80')`,
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="absolute inset-0 bg-[var(--color-deep-charcoal)]/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 text-center">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold text-[var(--color-off-white)] mb-6 tracking-tight leading-tight">
            Designing spaces
            <br />
            that shape experiences
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-off-white)]/90 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            A curated portfolio of architectural excellence, where form meets function
            and every detail tells a story of precision and artistry.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer scroll-indicator"
        onClick={handleScrollDown}
      >
        <div className="flex flex-col items-center space-y-2 text-[var(--color-off-white)]/70 hover:text-[var(--color-off-white)] transition-colors duration-300">
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

