
'use client';

import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

export function AboutSection() {
  const skills = [
    { name: 'React', progress: 90 },
    { name: 'Next.js', progress: 85 },
    { name: 'TypeScript', progress: 80 },
    { name: 'Node.js', progress: 75 },
    { name: 'Tailwind CSS', progress: 95 },
    { name: 'SQL', progress: 70 },
  ];

  const timelineEvents = [
    {
      year: '2023 - Present',
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      description: 'Led development of scalable web applications, optimized performance, and mentored junior developers.',
    },
    {
      year: '2020 - 2023',
      title: 'Software Developer',
      company: 'Innovate Corp.',
      description: 'Developed and maintained front-end features for various client projects, focusing on user experience.',
    },
    {
      year: '2016 - 2020',
      title: 'B.S. in Computer Science',
      company: 'University of Tech',
      description: 'Graduated with honors, specializing in web development and data structures.',
    },
  ];

  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">My Story</h3>
          <p className="text-muted-foreground leading-relaxed">
            Hello! I'm [Your Name], a passionate full-stack developer with a knack for building beautiful and functional web applications. My journey into tech began [mention how you started, e.g., 'with a fascination for how websites work'], leading me to explore various technologies and frameworks.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Over the years, I've honed my skills in both front-end and back-end development, focusing on creating seamless user experiences and robust, scalable solutions. I thrive on solving complex problems and continuously learning new technologies to stay at the forefront of the industry.
          </p>
          <Button size="lg" asChild>
            <Link href="/your-resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" /> Download Resume
            </Link>
          </Button>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="text-2xl font-semibold mb-4">Experience & Education</h3>
            <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-8 group">
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-border group-last:h-6"></div>
                  <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-primary -translate-x-1/2"></div>
                  <h4 className="font-semibold text-lg">{event.title}</h4>
                  <p className="text-muted-foreground text-sm">{event.company} &bull; {event.year}</p>
                  <p className="text-muted-foreground mt-1">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

