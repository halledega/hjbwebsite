"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projectsData from '@/../public/images/Project Photos/description.json';

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
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Explore our portfolio of precision structural solutions. From heritage retrofits in Gastown to modern high-rises in Burnaby, we ensure stability meets aesthetics.
          </p>
        </div>
      </section>
      
      {/* Filter Buttons Section */}
      <section className="sticky top-[73px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm py-4 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          <div className="flex gap-3 min-w-max justify-start md:justify-center">
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
              <Link href={`/projects/${project.slug}`} key={project.slug} className="group relative overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 cursor-pointer aspect-[4/3] shadow-sm hover:shadow-xl transition-all duration-300">
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
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300">
                    <div className="overflow-hidden">
                      <p className="text-sm text-slate-200/90 mt-3 pt-3 border-t border-white/20">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <button className="flex items-center gap-2 text-slate-900 dark:text-white font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors">
              Load More Projects
              <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        </div>
      </div>
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-[960px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-secondary dark:text-white mb-4 tracking-tight">
            Building something ambitious?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can bring your structural vision to life with precision, safety, and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-white text-base font-bold shadow-lg hover:bg-secondary transition-all hover:scale-105">
              Contact Our Team
            </Link>
            <Link href="/services" className="flex items-center justify-center h-12 px-8 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent text-slate-900 dark:text-white text-base font-bold hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
