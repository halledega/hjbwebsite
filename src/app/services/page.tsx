import Link from 'next/link';
import Image from 'next/image';
import Slideshow from '@/components/Slideshow'; // Import the new component
import projectsData from '@/../public/images/Project Photos/description.json'; // Import project data
import servicesData from '@/../public/data/services.json';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section with Background Slideshow */}
      <Slideshow slides={projectsData.projects}>
        <div className="relative z-10 px-6 md:px-10 lg:px-40 py-24 md:py-32 flex justify-center">
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/projects" className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold shadow-lg shadow-blue-900/30">
                View Portfolio
              </Link>
              <Link href="/contact" className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-white/5 hover:bg-white/10 transition-colors text-white text-base font-bold border border-white/20 backdrop-blur-sm">
                Contact Us
              </Link>
            </div>
        </div>
      </Slideshow>
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
      <div className="bg-primary relative overflow-hidden text-white py-16 px-6 md:px-10 lg:px-40">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 z-10">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h2 className="text-3xl font-bold">Ready to start your project?</h2>
            <p className="text-blue-100 text-lg">Let&apos;s discuss your structural engineering needs today.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/contact" className="bg-white text-secondary hover:bg-blue-50 hover:text-primary transition-all px-8 py-3 rounded-lg font-bold shadow-lg shadow-secondary/20">
              Request Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
