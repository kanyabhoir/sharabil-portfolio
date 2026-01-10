'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Studio from '@/components/Studio';
import Services from '@/components/Services';
import Journal from '@/components/Journal';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { observeElements } from '@/lib/utils';

export default function Home() {
  useEffect(() => {
    const cleanup = observeElements();
    return cleanup;
  }, []);

  return (
    <main className="min-h-screen relative">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Services />
      <Studio />
      <Journal />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
