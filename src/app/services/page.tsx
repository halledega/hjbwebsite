import Link from 'next/link';
import Image from 'next/image';
import Slideshow from '@/components/Slideshow'; // Import the new component
import projectsData from '@/../public/images/Project Photos/description.json'; // Import project data
import servicesData from '@/../public/data/services.json';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section with Background Slideshow */}
      <Slideshow slides={projectsData.projects}></Slideshow>
      <div className="px-6 md:px-10 lg:px-40 py-12 md:py-20 flex justify-center bg-white dark:bg-background-dark">
        <div className="w-full max-w-[1200px] flex flex-col gap-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start border-b border-gray-200 dark:border-gray-800 pb-12">
            <div className="flex-1">
              <h3 className="text-secondary dark:text-white text-3xl md:text-4xl font-bold leading-tight">
                Comprehensive Structural Solutions
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                We provide end-to-end structural engineering services tailored to the unique demands of our clients. No matter the size of project.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <div key={service.slug} className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 p-6 shadow-lg hover:shadow-xl hover:shadow-primary/10 hover:border-primary transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="size-14 rounded-lg bg-primary/5 dark:bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-secondary dark:text-white text-xl font-bold group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}