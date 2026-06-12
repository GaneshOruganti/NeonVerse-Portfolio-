
import React from 'react';
import { socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-10 px-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NeonVerse. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <span className="text-red-500 animate-pulse">❤️</span> by <span className="font-semibold text-foreground">Ganesh Oruganti</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <Button 
              key={link.name} 
              variant="ghost" 
              size="icon" 
              asChild
              className="rounded-full text-foreground/70 hover:bg-white/20 hover:text-foreground transition-all duration-300"
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="w-5 h-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
