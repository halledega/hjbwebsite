"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projectsData from '@/../public/images/Project Photos/description.json';
import dynamic from 'next/dynamic';

// Dynamically import the Map component to avoid SSR issues with Leaflet
const Map = dynamic(() => import('@/components/Map'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-900 text-slate-400">
      <span className="flex items-center gap-2">
        <span className="material-symbols-outlined animate-spin">refresh</span>
        Loading Map...
      </span>
    </div>
  )
});

// --- Type Definitions for Project Data ---
// This defines the shape of a single project object. 
// Using a 'type' ensures that any data we use for a project has a 'name', 'location', etc.
// This is a TypeScript feature that helps prevent errors by making sure our data is structured correctly.
type Project = {
  name: string;
  slug: string;
  location: string;
  type: string[];
  description: string;
  image: string;
  coordinates: [number, number];
};

export default function ProjectsPage() {
  // --- State Management ---
  // `useState` is a React Hook that lets you add state to functional components.
  // `activeFilter` stores the currently selected filter as a string.
  // `setActiveFilter` is the function to update this state.
  const [activeFilter, setActiveFilter] = useState('All Projects');
  
  // `filteredProjects` stores the array of projects to be displayed.
  // We initialize it with all projects from our JSON data.
  // It's typed as an array of 'Project' objects, ensuring type safety.
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData.projects as Project[]);

  // --- Dynamic Filter Categories ---
  // We create a Set of all project types to get a list of unique categories.
  // The 'flat()' method creates a new array with all sub-array elements concatenated into it.
  const projectTypes = ['All Projects', ...Array.from(new Set(projectsData.projects.flatMap(p => p.type)))];

  // --- Filtering Logic ---
  // `useEffect` is a React Hook that runs side effects in components.
  // This effect runs whenever the `activeFilter` state changes.
  useEffect(() => {
    // If 'All Projects' is selected, show all projects.
    if (activeFilter === 'All Projects') {
      setFilteredProjects(projectsData.projects as Project[]);
    } else {
      // Otherwise, filter the projects to find ones where the 'type' array includes the active filter.
      const filtered = projectsData.projects.filter(project =>
        project.type.includes(activeFilter)
      );
      setFilteredProjects(filtered as Project[]);
    }
  }, [activeFilter]); // The dependency array ensures this effect only re-runs when `activeFilter` changes.

  return (
    <>
      <section className="relative w-full py-16 md:py-24 px-4 bg-background-light dark:bg-background-dark">
        <div className="max-w-[960px] mx-auto text-center flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-secondary dark:text-white leading-[1.1]">
            Our Portfolio
          </h1>
        </div>
      </section>

      {/* Dynamic Map Section */}
      <section className="w-full h-[500px] bg-slate-100 dark:bg-slate-900 overflow-hidden relative z-0">
        <Map projects={projectsData.projects as Project[]} />
      </section>
      
      {/* Filter Buttons Section */}
      <section className="sticky top-[73px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm py-4 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {/* Dynamically render filter buttons from our project types */}
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 active:scale-95
                  ${activeFilter === type
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-slate-700'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <div className="w-full py-12 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Dynamically render project cards from the filteredProjects state */}
            {filteredProjects.map((project) => (
              <Link href={`/projects/${project.slug}`} key={project.slug} className="group relative overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 cursor-pointer aspect-[4/3] shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                <Image
                  src={project.image}
                  alt={`Image of ${project.name}`}
                  fill={true}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/40 to-transparent opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <div className="flex justify-between items-end">
                    <div>
                      {/* We can map over the types for each project to display them */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.type.map(t => (
                          <span key={t} className="inline-block px-2 py-1 text-xs font-bold uppercase tracking-wider bg-white/10 rounded text-white border border-white/20 backdrop-blur-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold leading-tight mb-1">{project.name}</h3>
                      <p className="text-sm font-medium text-slate-200 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                        {project.location}
                      </p>
                    </div>
                    <div className="flex-shrink-0 size-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors opacity-0 group-hover:opacity-100 duration-300">
                      <span className="material-symbols-outlined text-white">arrow_outward</span>
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>
          {projectsData.projects.length > 9 && (
            <div className="mt-12 flex justify-center">
              <button className="flex items-center gap-2 text-slate-900 dark:text-white font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors">
                Load More Projects
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </div>
          )}
        </div>
      </div>

    </>
  );
}