
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-64px)] flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cfd2feae?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Professional Photo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I'm [Your Name],
          <br />a
          <TypeAnimation
            sequence={[
              'Full-stack Developer',
              1000,
              'UI/UX Designer',
              1000,
              'Problem Solver',
              1000,
              'Tech Enthusiast',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-primary ml-3"
          />
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Passionate about crafting innovative web solutions and creating intuitive user experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#projects">View My Work</Link>
          </Button>
        </div>
        <div className="flex justify-center items-center gap-4 pt-8">
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-6 w-6" />
            </Button>
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>
  );
}

