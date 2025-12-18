import Link from 'next/link';
import Image from 'next/image';
import Slideshow from '@/components/Slideshow'; // Import the new component
import projectsData from '@/../public/images/Project Photos/description.json'; // Import project data

export default function AboutPage() {
  return (
    <>
      <div className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-secondary dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">Meet the Principals</h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg">
                Our team brings together decades of experience in structural analysis, seismic retrofitting, and project management.
              </p>
            </div>
            {/* <Link className="text-primary font-bold flex items-center hover:underline" href="/team">
              View Full Team <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
            </Link> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="aspect-[3/4] overflow-hidden bg-slate-200">
                <Image alt="Professional headshot of Doug Birch" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Man in blue suit smiling professionally" src="/images/people/Doug Birch_Updated.JPG" width={300} height={400} />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-secondary dark:text-white">Doug Birch</h3>
                <h3 className="text-sm font-bold text-secondary dark:text-white">P.Eng, Struct Eng.</h3>
                <p className="text-primary text-sm font-medium mb-2">Principal</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mb-3">
                  Doug brings over 37 years or experience to HJB.
                  Doug’s main areas of practice are institutional, industrial projects, commercial, and residential buildings in concrete, steel and timber.
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mb-3">
                Doug is a registered Professional Engineer in British Columbia, Alberta, Ontario, and the Northwest Territories.
                </p>
                {/* <span className="text-xs font-bold text-slate-900 dark:text-slate-200 group-hover:text-primary transition-colors flex items-center gap-1 cursor-pointer">
                  Read Bio <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </span> */}
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="aspect-[3/4] overflow-hidden bg-slate-200">
                <Image alt="Professional headshot of Elena Rostova" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Woman in blazer with glasses looking confident" src="/images/people/Michael H.JPG" width={300} height={400} />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-secondary dark:text-white">Michael Halliday</h3>
                <h3 className="text-sm font-bold text-secondary dark:text-white">P.Eng.</h3>
                <p className="text-primary text-sm font-medium mb-2">Principal</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-3 mb-3">
                  An experienced Professional Engineer with a demonstrated history of working in the structural engineering industry. He has extensive experience designing and detailing multi-storey wood frame, cast-in-place concrete, and structural steel buildings.  He is skilled in using various design and modelling software programs such as SAP2000, Etabs, S-Frame and SAFE.
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-3 mb-3">
                  As an experienced Revit user, Michael also leads our Revit/BIM efforts.
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-3 mb-3">
                  Michael is a registered Professional Engineer in British Columbia, Saskatchewan and Manitoba.  

                </p>
                {/* <span className="text-xs font-bold text-slate-900 dark:text-slate-200 group-hover:text-primary transition-colors flex items-center gap-1 cursor-pointer">
                  Read Bio <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </span> */}
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="aspect-[3/4] overflow-hidden bg-slate-200">
                <Image alt="Professional headshot of Michael Chen" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Man in grey suit tie smiling at camera" src="/images/people/Dylan James Headshot.jpg" width={300} height={400} />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-secondary dark:text-white">DylanJames</h3>
                <h3 className="text-sm font-bold text-secondary dark:text-white">P.Eng.</h3>
                <p className="text-primary text-sm font-medium mb-2">Pincipal</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mb-3">
                  A 2017 graduate of the British Columbia Institute of Technology, Dylan transitioned from welding and steel erecting to structural engineering.
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mb-3">
                  Focusing on tilt-up and structural steel design. He is a founding board member of TILT (Tilt-Up Industry Leaders of Tomorrow) and serves on the Tilt-Up Concrete Association’s Canadian Advisory Board. 
                </p>
                {/* <span className="text-xs font-bold text-slate-900 dark:text-slate-200 group-hover:text-primary transition-colors flex items-center gap-1 cursor-pointer">
                  Read Bio <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 radial-gradient">
        </div>
        <div className="relative max-w-[960px] mx-auto px-6 py-20 text-center flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/contact" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold">
              Start a Project
            </Link>
            <Link href="/contact" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-white/30 hover:bg-white/10 transition-colors text-white text-base font-bold">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}