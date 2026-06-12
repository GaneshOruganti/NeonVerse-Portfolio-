'use client';

import React, { useEffect, useRef } from 'react';
import { SectionTitle, SectionSubtitle } from '@/components/shared/Section';
import { experiences } from '@/lib/data';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    const headerHeight = 250; 
    const viewportHeight = window.innerHeight;
    const scrollDistance = Math.max(0, content.offsetHeight - (viewportHeight - headerHeight));

    let trigger: ScrollTrigger | null = null;

    if (scrollDistance > 0) {
      trigger = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollDistance + 400}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          gsap.to(content, {
            y: -scrollDistance * self.progress,
            overwrite: 'auto',
            ease: 'none',
          });
        },
      });
    }

    return () => {
      if (trigger) trigger.kill();
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="experience" 
      className="h-screen overflow-hidden bg-card/5 flex flex-col"
    >
      <div className="pt-20 pb-10 flex-shrink-0 z-20 bg-background/5 backdrop-blur-sm relative">
        <SectionTitle>Experience</SectionTitle>
        <SectionSubtitle>My professional journey through high-impact AI and development roles.</SectionSubtitle>
      </div>
      
      <div className="flex-grow relative px-4 md:px-0">
        <div 
          ref={contentRef}
          className="max-w-6xl mx-auto space-y-12 pb-32 pt-4 relative"
        >
          {/* Central Timeline Line (Desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={cn(
                "relative flex flex-col md:flex-row items-center w-full",
                isEven ? "md:justify-start" : "md:justify-end"
              )}>
                {/* Timeline Dot (Desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10 hidden md:block" />
                
                {/* Mobile Line & Dot */}
                <div className="absolute left-4 top-0 bottom-[-48px] w-0.5 bg-border md:hidden" />
                <div className="absolute left-[10px] top-8 w-3 h-3 rounded-full bg-accent border-4 border-background z-10 md:hidden" />

                <Card className={cn(
                  "glassmorphism w-full md:w-[45%] hover:border-accent/40 transition-colors duration-300 relative z-20",
                  !isEven && "md:ml-auto",
                  "ml-8 md:ml-0" // Offset for mobile line
                )}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-full bg-accent/10 border border-accent/20">
                        <Briefcase className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-primary">{exp.role}</CardTitle>
                        <CardDescription className="text-foreground/80 font-medium">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="flex gap-2 text-muted-foreground text-sm leading-relaxed">
                          <span className="text-accent mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;