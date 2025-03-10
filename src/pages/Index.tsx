
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Benefits from '../components/sections/Benefits';
import About from '../components/sections/About';
import ContactForm from '../components/sections/ContactForm';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: (targetElement as HTMLElement).offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      });
    });
    
    // Check if there is a hash in the URL when the page loads
    if (window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          window.scrollTo({
            top: (element as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
    
    // Add loading effect to images
    const images = document.querySelectorAll('.image-lazy');
    images.forEach(img => {
      const image = img as HTMLImageElement;
      if (image.complete) {
        image.classList.replace('loading', 'loaded');
      } else {
        image.addEventListener('load', () => {
          image.classList.replace('loading', 'loaded');
        });
      }
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Benefits />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
