import { Section, SectionTitle, SectionSubtitle } from '@/components/shared/Section';
import { aboutMe } from '@/lib/data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const AboutSection = () => {
  const profilePhoto = PlaceHolderImages.find(img => img.id === aboutMe.photo.id);

  return (
    <Section id="about">
      <SectionTitle>The Mind Behind NeonVerse</SectionTitle>
      <SectionSubtitle>A glimpse into my professional journey and passions.</SectionSubtitle>
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 flex items-center justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <div className="relative w-full h-full rounded-full image-container">
              {profilePhoto && (
                <Image
                    src={profilePhoto.imageUrl}
                    alt={profilePhoto.description}
                    fill
                    className="profile-img"
                    data-ai-hint={profilePhoto.imageHint}
                />
              )}
            </div>
          </div>
        </div>
        <div className="md:col-span-3 text-center md:text-left space-y-4">
          {(Array.isArray(aboutMe.summary) ? aboutMe.summary : [aboutMe.summary]).map((paragraph, index) => (
            <p key={index} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
           <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed italic">When I’m not building systems, I’m exploring new AI research or mentoring students.</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutMe.highlights.map((highlight, index) => (
                <div key={index} className="glassmorphism p-4 rounded-lg flex items-center gap-4 hover:border-accent transition-colors">
                    <highlight.icon className="w-8 h-8 text-accent flex-shrink-0" />
                    <p className="text-sm font-medium text-foreground">{highlight.text}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
