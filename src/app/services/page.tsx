import Link from 'next/link';
import Image from 'next/image';
import Slideshow from '@/components/Slideshow'; // Import the new component
import projectsData from '@/../public/images/Project Photos/description.json'; // Import project data

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section with Background Slideshow */}
      <Slideshow slides={projectsData.projects}>
        <div className="relative z-10 px-6 md:px-10 lg:px-40 py-24 md:py-32 flex justify-center">
          {/* <div className="flex flex-col gap-6 text-center max-w-[800px]"> */}
            {/* <div className="inline-flex mx-auto items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-blue-100 text-xs font-bold tracking-wider uppercase">Serving Greater Vancouver</span>
            </div> */}
            {/* <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Precision Engineering for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Vancouver&apos;s Skyline</span>
            </h1>
            <p className="text-blue-100 text-lg md:text-xl font-normal leading-relaxed max-w-[640px] mx-auto">
              Expert structural consulting for residential, commercial, and seismic projects across British Columbia. We ensure safety, compliance, and innovation in every blueprint.
            </p> */}
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/projects" className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold shadow-lg shadow-blue-900/30">
                View Portfolio
              </Link>
              <Link href="/contact" className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-white/5 hover:bg-white/10 transition-colors text-white text-base font-bold border border-white/20 backdrop-blur-sm">
                Contact Us
              </Link>
            </div>
          {/* </div> */}
        </div>
      </Slideshow>
      <div className="px-6 md:px-10 lg:px-40 py-12 md:py-20 flex justify-center bg-background-light dark:bg-background-dark">
        <div className="w-full max-w-[1200px] flex flex-col gap-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start border-b border-gray-200 dark:border-gray-800 pb-12">
            <div className="flex-1">
              {/* <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-primary"></span>
                Our Expertise
              </h2> */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 p-6 hover:shadow-xl hover:shadow-primary/10 hover:border-primary transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="size-14 rounded-lg bg-primary/5 dark:bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-4xl">home</span>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-secondary dark:text-white text-xl font-bold group-hover:text-primary transition-colors">Residential Design</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Custom structural design for new homes, laneway houses, and major renovations. We optimize for space and stability.
                </p>
              </div>
            </div>
            <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 p-6 hover:shadow-xl hover:shadow-primary/10 hover:border-primary transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="size-14 rounded-lg bg-primary/5 dark:bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-4xl">domain</span>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-secondary dark:text-white text-xl font-bold group-hover:text-primary transition-colors">Commercial Structures</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Engineering solutions for office buildings, retail spaces, and mixed-use developments with a focus on efficiency.
                </p>
              </div>
            </div>
            <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 p-6 hover:shadow-xl hover:shadow-primary/10 hover:border-primary transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="size-14 rounded-lg bg-primary/5 dark:bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-4xl">waves</span>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-secondary dark:text-white text-xl font-bold group-hover:text-primary transition-colors">Seismic Retrofitting</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Expert assessment and upgrades to ensure older buildings meet current BC Building Code seismic standards.
                </p>
              </div>
            </div>
            <div className="group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 p-6 hover:shadow-xl hover:shadow-primary/10 hover:border-primary transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="size-14 rounded-lg bg-primary/5 dark:bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-4xl">storefront</span>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-secondary dark:text-white text-xl font-bold group-hover:text-primary transition-colors">Tenant Improvements</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Structural modifications, load analysis, and permitting support for commercial interior fit-outs and remodels.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="mt-12">
            <h3 className="text-secondary dark:text-white text-2xl font-bold mb-10 text-center relative">
              Why Partner With Us
              <span className="block w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex gap-4 items-start p-4 rounded-lg hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all">
                <div className="mt-1 text-primary bg-blue-50 dark:bg-primary/20 p-2 rounded-full">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h5 className="text-lg font-bold text-secondary dark:text-white mb-2">Vancouver Local Experts</h5>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Deep understanding of local soil conditions, municipal bylaws, and the specific challenges of West Coast construction.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-lg hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all">
                <div className="mt-1 text-primary bg-blue-50 dark:bg-primary/20 p-2 rounded-full">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div>
                  <h5 className="text-lg font-bold text-secondary dark:text-white mb-2">Licensed &amp; Insured</h5>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Fully licensed with PEGBC and carrying comprehensive liability insurance for peace of mind on every project.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-lg hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all">
                <div className="mt-1 text-primary bg-blue-50 dark:bg-primary/20 p-2 rounded-full">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <div>
                  <h5 className="text-lg font-bold text-secondary dark:text-white mb-2">Agile Response</h5>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">We pride ourselves on quick turnaround times for site visits and reports, keeping your project schedule on track.</p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="mt-12 bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm shadow-secondary/5">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-secondary">
              <span className="material-symbols-outlined text-9xl">format_quote</span>
            </div>
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-1 mb-6 text-yellow-500">
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
              </div>
              <h4 className="text-xl md:text-2xl font-medium text-secondary dark:text-white italic mb-6">
                &quot;HJB Engineering provided exceptional insight during our heritage renovation. Their team navigated the seismic upgrades brilliantly, preserving the character of our building while ensuring safety.&quot;
              </h4>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full border-2 border-primary p-0.5">
                  <Image alt="Portrait of Michael Chen, a satisfied client" className="w-full h-full object-cover rounded-full" data-alt="Professional headshot of a smiling man in a suit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0RPU6eGAokodH6Mt3Mzr1qwLjFwyPJyVOrbu6ARI1p9xult-oNz7tSmAm3n59Oynx08s2y2DJnc5UqM9RIRthJ1Tf_ob8QlJ_hBP9vhEhzlBfXmqEGAYy3FE9GMzKubzt327nN8ybkCcdynOhVMKyYFM0zKVaZErIOeXRpUqe56vB7Fk0RnfiFE3HOZYPL3hWfBtDyFJ6zDgA2yMCqZ0AGGGE_7GBPFo8_NhSA0zkztqewz85cBqQ-PWs9rpoAnNFQIe8ppH80FxR" width={48} height={48} />
                </div>
                <div>
                  <div className="font-bold text-secondary dark:text-white">Michael Chen</div>
                  <div className="text-sm text-primary font-medium">Project Manager, Urban Development Group</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="bg-primary relative overflow-hidden text-white py-16 px-6 md:px-10 lg:px-40">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-secondary/50 to-transparent"></div>
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