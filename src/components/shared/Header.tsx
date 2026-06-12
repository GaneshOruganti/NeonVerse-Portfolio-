
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code, Maximize, Minimize } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = navLinks.map(link => document.querySelector(link.href));
      let currentSection = '';
      
      sections.forEach(section => {
        if (section && window.scrollY >= (section as HTMLElement).offsetTop - 150) {
          currentSection = `#${section.id}`;
        }
      });
      
      setActiveSection(currentSection);
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const NavContent = ({ isMobile = false }) => (
    <nav className={cn("flex items-center gap-2", isMobile && "flex-col items-start gap-4 p-4")}>
      {navLinks.map(({ href, label }) => (
        <Button
          key={href}
          asChild
          variant="link"
          className={cn(
            'relative h-10 px-4 transition-all duration-300 no-underline hover:no-underline group font-semibold',
            activeSection === href 
              ? 'text-accent' 
              : 'text-foreground/70 hover:text-foreground hover:bg-white/10',
            isMobile && "w-full justify-start"
          )}
        >
          <Link href={href}>
            <span className="relative z-10">
                {label}
                <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                    activeSection === href ? "w-full" : "w-0 group-hover:w-full"
                )} />
            </span>
          </Link>
        </Button>
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'glassmorphism h-16' : 'bg-transparent h-20'
      )}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl group">
          <Code className="text-accent transition-transform group-hover:rotate-12" />
          <span className="tracking-tight">NeonVerse</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-2">
          <NavContent />
          <div className="w-px h-6 bg-border/50 mx-2" />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleFullscreen}
            className="rounded-full text-foreground/70 hover:text-foreground hover:bg-white/10 transition-all duration-300"
            title={isFullscreen ? "Exit Full Screen" : "Enter Full Screen"}
          >
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 border-l border-border/50 backdrop-blur-xl">
              <div className="mt-8">
                <NavContent isMobile />
                <Button
                  variant="ghost"
                  className="w-full justify-start text-muted-foreground hover:text-accent gap-2 h-10 px-4 mt-4"
                  onClick={toggleFullscreen}
                >
                  {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                  <span>{isFullscreen ? "Exit Full Screen" : "Go Full Screen"}</span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
