
'use client';

import React, { useState } from 'react';
import { Section, SectionTitle, SectionSubtitle } from '@/components/shared/Section';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Send, Loader2 } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import { useFirebase } from '@/firebase/provider';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

const ContactSection = () => {
  const { db } = useFirebase();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const myEmail = "ganeshoruganti2022@gmail.com";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Optional: Store in Firestore (only if db is properly initialized)
      if (db) {
        const dataToSave = {
          ...formData,
          createdAt: serverTimestamp()
        };
        const leadsRef = collection(db, 'leads');
        addDoc(leadsRef, dataToSave).catch((error) => {
           console.warn("Firestore lead storage failed (likely due to missing config/permissions):", error);
        });
      }

      // 2. Redirect to Mail Client
      // Constructing the mailto link with encoded parameters
      const subject = encodeURIComponent(`New Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
      );
      
      const mailtoUrl = `mailto:${myEmail}?subject=${subject}&body=${body}`;
      
      // Open the mail client
      window.location.href = mailtoUrl;

      toast({
        title: "Redirecting to Mail...",
        description: "Your default email application should open shortly.",
      });

      // We don't reset form immediately so user can see what they sent if redirection takes a moment
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, 1000);

    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Action Failed",
        description: "Could not open your email client. Please try manual email.",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <SectionSubtitle>
        Have a project in mind or just want to say hello? I'm always open to discussing AI systems and backend architecture.
      </SectionSubtitle>
      <div className="grid md:grid-cols-2 gap-12">
        <Card className="glassmorphism p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder=" "
                className="peer block w-full bg-card/50 h-12 pt-4 text-base"
              />
              <label
                htmlFor="name"
                className="absolute top-3 left-4 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-accent"
              >
                Your Name
              </label>
            </div>
            <div className="relative">
              <Input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder=" "
                className="peer block w-full bg-card/50 h-12 pt-4 text-base"
              />
              <label
                htmlFor="email"
                className="absolute top-3 left-4 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-accent"
              >
                Your Email
              </label>
            </div>
            <div className="relative">
              <Textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder=" "
                className="peer block w-full bg-card/50 min-h-[120px] pt-6"
              />
              <label
                htmlFor="message"
                className="absolute top-3 left-4 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-accent"
              >
                Your Message
              </label>
            </div>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              size="lg" 
              className="w-full group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg transition-all duration-300 transform hover:scale-105 glow"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  Send via Email <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </Card>
        
        <div className="flex flex-col justify-center gap-6">
          <h3 className="text-2xl font-bold text-center md:text-left">Or reach me directly</h3>
          <a href={`mailto:${myEmail}`} className="group flex items-center gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors">
            <Mail className="w-8 h-8 text-accent" />
            <div>
              <p className="font-semibold text-lg">Email</p>
              <p className="text-muted-foreground group-hover:text-accent transition-colors">{myEmail}</p>
            </div>
          </a>
          {socialLinks.map(link => (
             <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors">
                <link.icon className="w-8 h-8 text-accent" />
                <div>
                  <p className="font-semibold text-lg">{link.name}</p>
                  <p className="text-muted-foreground group-hover:text-accent transition-colors">Connect professionally</p>
                </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
