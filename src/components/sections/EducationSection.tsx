'use client';

import React, { useEffect, useRef } from 'react';
import { SectionTitle, SectionSubtitle } from '@/components/shared/Section';
import { education } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const EducationSection = () => {
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
      id="education" 
      className="h-screen overflow-hidden bg-background flex flex-col"
    >
      <div className="pt-20 pb-10 flex-shrink-0 z-20 bg-background/5 backdrop-blur-sm relative">
        <SectionTitle>Education</SectionTitle>
        <SectionSubtitle>My academic foundation in Artificial Intelligence and Engineering.</SectionSubtitle>
      </div>
      
      <div className="flex-grow relative px-4 md:px-0">
        <div 
          ref={contentRef}
          className="max-w-4xl mx-auto space-y-8 pb-32 pt-4 relative"
        >
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-4 top-0 bottom-[-48px] w-0.5 bg-border" />

          {education.map((edu, index) => (
            <div key={index} className="relative md:pl-16 pl-8">
              {/* Timeline Dot */}
              <div className="absolute left-[-26px] md:left-[-26px] top-12 w-3.5 h-3.5 rounded-full bg-accent border-4 border-background z-10" />

              <Card className="glassmorphism hover:border-accent/40 transition-all duration-300">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <edu.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <CardTitle className="text-xl text-primary">{edu.institution}</CardTitle>
                      <span className="text-sm font-bold text-accent whitespace-nowrap">{edu.period}</span>
                    </div>
                    <CardDescription className="text-foreground/90 font-medium text-lg mt-1">
                      {edu.degree}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <p className="text-muted-foreground text-sm leading-relaxed italic">
                      {edu.details}
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                       <span className="font-semibold text-foreground">Grade:</span> {edu.grade}
                    </div>
                    {edu.skills && (
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-primary/10 text-[11px] h-6 text-primary-foreground/70">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;