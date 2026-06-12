'use client';

import React from 'react';
import { Section, SectionTitle, SectionSubtitle } from '@/components/shared/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skills } from '@/lib/data';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from '@/lib/utils';

type Skill = {
  name: string;
  icon: React.ElementType;
  tooltip: string;
}

const SkillCategory = ({ title, skillsList, isDominant = false }: { title: string; skillsList: Skill[]; isDominant?: boolean }) => (
  <Card className={cn(
    "glassmorphism w-full h-full flex flex-col transition-all duration-500",
    isDominant ? "border-2 border-accent/50 shadow-xl shadow-accent/10 scale-[1.02] z-10" : "hover:border-accent/30"
    )}>
    <CardHeader>
      <CardTitle className="text-xl font-bold text-center tracking-tight text-primary">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow flex items-center justify-center py-6">
      <TooltipProvider>
        <div className="flex flex-wrap justify-center gap-4 max-w-[280px] mx-auto">
          {skillsList.map((skill, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div
                  className="group relative flex flex-col items-center gap-2 p-3 rounded-lg bg-card/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20 w-20 h-20 justify-center cursor-help"
                >
                  <skill.icon className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-all duration-300 group-hover:rotate-6" />
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-foreground/70 group-hover:text-foreground transition-colors text-center">{skill.name}</span>
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-accent/30 transition-all duration-300"></div>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-xs text-center border-accent/20 bg-background/95 backdrop-blur-md z-[100]">
                <p className="text-sm font-medium">{skill.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  return (
    <Section id="skills" className="bg-card/10 !overflow-visible">
      <SectionTitle>Skills</SectionTitle>
      <SectionSubtitle>The technologies and tools I use to build production-ready AI systems.</SectionSubtitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        <SkillCategory title="AI & Machine Learning" skillsList={skills.ai} isDominant />
        <SkillCategory title="Systems & Backend" skillsList={skills.backend} />
        <SkillCategory title="Interface & Frontend" skillsList={skills.frontend} />
        <SkillCategory title="Engineering Foundations" skillsList={skills.foundations} />
      </div>
    </Section>
  );
};

export default SkillsSection;
