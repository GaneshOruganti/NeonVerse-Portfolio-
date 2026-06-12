'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Section, SectionTitle, SectionSubtitle } from '@/components/shared/Section';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Github, ExternalLink, Code2 } from 'lucide-react';

type Project = typeof projects[0];

const ProjectCard = ({ project, onOpen }: { project: Project; onOpen: () => void }) => {
  const projectImage = PlaceHolderImages.find(img => img.id === project.image);

  return (
    <div className="group h-full">
      <Card
        onClick={onOpen}
        className="glassmorphism relative h-full w-full cursor-pointer rounded-xl shadow-lg transition-all duration-300 hover:border-accent/60 flex flex-col overflow-hidden border-border/50"
      >
        <div className="relative h-48 w-full shrink-0 flex items-center justify-center bg-muted/20">
          {projectImage && (
            <Image
              src={projectImage.imageUrl}
              alt={project.title}
              fill
              className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              data-ai-hint={projectImage.imageHint}
              unoptimized
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <Code2 className="absolute top-4 right-4 text-accent/20 w-8 h-8 group-hover:text-accent/40 transition-colors" />
        </div>
        <CardHeader className="p-5 pb-2">
          <CardTitle className="text-xl text-primary font-bold leading-tight group-hover:text-accent transition-colors">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-5 pt-0 flex-grow flex flex-col gap-4">
          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.technologies.map((tech) => (
              <Badge 
                key={tech} 
                className="bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider hover:bg-accent/80 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

const ProjectModal = ({ project, isOpen, onClose }: { project: Project; isOpen: boolean; onClose: () => void }) => {
    const projectImage = PlaceHolderImages.find(img => img.id === project.image);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="glassmorphism max-w-2xl border-accent/20 max-h-[90vh] overflow-y-auto p-0 gap-0">
                <div className="relative h-72 w-full shrink-0 flex items-center justify-center bg-muted/20">
                    {projectImage && (
                        <Image
                            src={projectImage.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover"
                            data-ai-hint={projectImage.imageHint}
                            unoptimized
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                
                <div className="p-6">
                  <DialogHeader>
                      <DialogTitle className="text-2xl text-accent font-bold">{project.title}</DialogTitle>
                      <DialogDescription className="text-muted-foreground pt-4 text-base leading-relaxed">
                          {project.description}
                      </DialogDescription>
                  </DialogHeader>
                  
                  <div className="py-6 border-y border-border/50 my-6">
                      <h4 className="font-bold mb-4 text-foreground flex items-center gap-2 uppercase text-xs tracking-widest">
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                          Technical Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="bg-primary text-primary-foreground px-3 py-1 font-bold border border-primary/10">{tech}</Badge>
                          ))}
                      </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild className="flex-1 group h-12" variant="outline">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-5 w-5" /> View Source
                          </a>
                      </Button>
                      <Button asChild className="flex-1 group h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                             Launch System <ExternalLink className="ml-2 h-5 w-5" />
                          </a>
                      </Button>
                  </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpen = (project: Project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  return (
    <Section id="projects" className="bg-card/5">
      <SectionTitle>Projects</SectionTitle>
      <SectionSubtitle>A collection of end-to-end AI systems, high-performance backends, and industrial research projects.</SectionSubtitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} onOpen={() => handleOpen(project)} />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={handleClose} />
      )}
    </Section>
  );
};

export default ProjectsSection;