import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, Download } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import BoyAnimation from '@/components/BoyAnimation';
import RotatingText from '@/components/shared/RotatingText';
import NeuralBackground from '@/components/shared/NeuralBackground';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic AI Background Element */}
      <NeuralBackground />
      
      <div className="container mx-auto px-4 py-16 md:py-0 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-6">
            <div className="space-y-2">
              <p className="text-muted-foreground font-medium tracking-wide">Hi there, I'm</p>
              <h1 className="flex flex-col font-black tracking-tight leading-none">
                <span className="text-foreground text-5xl sm:text-6xl lg:text-7xl pb-1">Ganesh</span>
                <span className="hero-text-gradient text-3xl sm:text-4xl lg:text-5xl mt-1 pb-4 leading-[1.2]">Oruganti</span>
              </h1>
            </div>
            
            <div className="flex justify-center md:justify-start">
               <RotatingText />
            </div>

            <p className="max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Engineering production-ready AI systems that scale.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start items-center pt-4">
               <Button asChild size="lg" className="group h-14 px-8 rounded-full bg-primary text-primary-foreground font-bold text-lg transition-all duration-300 transform hover:scale-105 glow-primary">
                <Link href="#projects">
                  Explore My Work
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 rounded-full font-bold text-lg border-2 border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
              >
                <a href="/resume.pdf" download="Ganesh_Oruganti_Resume.pdf">
                  Download My Resume
                </a>
              </Button>
            </div>

            <div className="pt-8 flex justify-center md:justify-start gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300 transform hover:scale-110"
                >
                  <link.icon className="w-5 h-5"/>
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
              <a 
                  href="mailto:ganeshoruganti2022@gmail.com"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="w-5 h-5"/>
                  <span className="sr-only">Email</span>
                </a>
            </div>
          </div>
          <div className="flex justify-center items-center row-start-1 md:row-auto">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-none md:w-[450px] lg:w-[550px] h-auto aspect-square relative">
              {/* Subtle background glow behind the boy animation */}
              <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full animate-pulse-slow"></div>
              <BoyAnimation />
            </div>
          </div>
        </div>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll to about section">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
