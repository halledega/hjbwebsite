import Link from 'next/link';
import Image from 'next/image';
import Slideshow from '@/components/Slideshow'; // Import the new component
import projectsData from '@/../public/images/Project Photos/description.json';

import servicesData from '@/../public/data/services.json';

export default function Home() {
  const featuredProjects = projectsData.projects.slice(0, 3);

  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* Hero Section with Background Slideshow */}
        <Slideshow slides={projectsData.projects}>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Link href="/projects" className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-secondary transition-all shadow-lg hover:shadow-primary/40">
              <span className="truncate">View Portfolio</span>
            </Link>
            <Link href="/services" className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/10 backdrop-blur-md border border-white/30 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/20 transition-all">
              <span className="truncate">Our Services</span>
            </Link>
          </div>
        </Slideshow>
        
        <section className="w-full bg-background-light dark:bg-[#0d131a] py-16 md:py-24">
          <div className="max-w-[1100px] mx-auto px-4 md:px-10">
            <div className="text-center max-w-[700px] mx-auto mb-12">
              <h2 className="text-[#0e141b] dark:text-white text-3xl font-bold leading-tight mb-4">Our Core Services</h2>
              <p className="text-slate-500 dark:text-slate-400">Comprehensive structural engineering capabilities for projects of all scales.</p>
            </div>
            {/* Dynamically render service cards from services.json */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {servicesData.map((service) => (
                <div key={service.slug} className="group flex flex-col gap-4 rounded-xl p-8 bg-white dark:bg-[#1a2632] border border-transparent hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#0e141b] dark:text-white">{service.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full bg-white dark:bg-[#111921] py-16 md:py-24">
          <div className="max-w-[1100px] mx-auto px-4 md:px-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
              <div>
                <h2 className="text-[#0e141b] dark:text-white text-3xl font-bold leading-tight mb-2">Featured Projects</h2>
                <p className="text-slate-500 dark:text-slate-400">A glimpse into our portfolio of work.</p>
              </div>
              <Link href="/projects" className="text-primary font-bold text-sm flex items-center hover:underline">
                View All Projects <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map(project => (
                <Link key={project.slug} href={`/projects/${project.slug}`} className="flex flex-col gap-3 group cursor-pointer">
                  <div className="overflow-hidden rounded-xl h-[240px] w-full relative">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
                    <Image 
                      alt={`Image of ${project.name}`}
                      src={project.image}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 z-20 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                      {project.type[0]}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0e141b] dark:text-white group-hover:text-primary transition-colors">{project.name}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{project.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}