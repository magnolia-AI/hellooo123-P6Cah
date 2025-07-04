
'use client';

import { ProjectsSection } from '@/components/sections/projects-section';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';

export default function Home() {
  return (
    <div className="min-h-full">
      <AboutSection />
      <ProjectsSection />
      <HeroSection />
    </div>
  );
}

