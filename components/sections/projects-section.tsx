
'use client';

import { useState } from 'react';
import { ProjectCard } from '@/components/ui/project-card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
  category: string;
}

const projects: Project[] = [
  {
    title: 'E-commerce Store',
    description: 'A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.',
    image: 'https://images.unsplash.com/photo-1483985988355-f7dc55ce8f0b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Next.js', 'React', 'TypeScript', 'Stripe', 'PostgreSQL'],
    githubLink: '#',
    liveLink: '#',
    category: 'Web Development',
  },
  {
    title: 'Task Management App',
    description: 'A simple and intuitive task management application with drag-and-drop functionality and real-time updates.',
    image: 'https://images.unsplash.com/photo-1504711434931-198732056bd3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    githubLink: '#',
    liveLink: '#',
    category: 'Web Development',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects, skills, and experience with a modern design.',
    image: 'https://images.unsplash.com/photo-1487017159836-b19e2e17bce7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    githubLink: '#',
    liveLink: '#',
    category: 'UI/UX Design',
  },
  {
    title: 'Mobile Recipe App',
    description: 'A mobile application for discovering and saving recipes, with features like ingredient search and meal planning.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React Native', 'Firebase', 'Redux'],
    githubLink: '#',
    liveLink: '#',
    category: 'Mobile Development',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets with various chart types and filtering options.',
    image: 'https://images.unsplash.com/photo-1551288259-cd7538950f5f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['D3.js', 'React', 'Python', 'Flask'],
    githubLink: '#',
    liveLink: '#',
    category: 'Data Science',
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="flex justify-center mb-8">
        <Tabs defaultValue="All" onValueChange={setActiveCategory}>
          <TabsList className="flex flex-wrap h-auto p-1">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="px-4 py-2">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

