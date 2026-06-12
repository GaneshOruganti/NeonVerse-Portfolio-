import { cn } from '@/lib/utils';
import type React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-20 md:py-28 relative overflow-hidden', className)}
      {...props}
    >
      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn("text-3xl md:text-4xl font-bold mb-2 text-center", className)} {...props}>
      <span className="hero-text-gradient">{children}</span>
    </h2>
  );
}

export function SectionSubtitle({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className={cn("text-lg md:text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto", className)} {...props}>
            {children}
        </p>
    );
}
