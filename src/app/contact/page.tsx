"use client";
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

export default function ContactPage() {
  return (
    <>
      <div className="flex-grow flex flex-col items-center w-full px-4 md:px-10 lg:px-40 py-8 lg:py-12">
        <div className="w-full max-w-[1200px] flex flex-col gap-10">
          <div className="flex flex-col gap-3 max-w-2xl">
            <h1 className="text-secondary dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
              Contact Us
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg font-normal leading-normal">
              Reach out to discuss your next structural project. Our engineers are ready to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
            <div className="flex flex-col gap-8">
              <div className="bg-surface-light dark:bg-surface-dark p-6 md:p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700/50 flex flex-col gap-6">
                <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">Contact Information</h3>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-10 rounded-full bg-slate-100 dark:bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="font-medium text-secondary dark:text-white">Our Office</p>
                    <p className="text-slate-500 dark:text-slate-300 mt-1 leading-relaxed">
                      110 2920 Virtual Way<br />
                      Vancouver, BC V5M 0C4
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-10 rounded-full bg-slate-100 dark:bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="font-medium text-secondary dark:text-white">Email</p>
                    <a className="text-slate-500 dark:text-slate-300 mt-1 hover:text-primary transition-colors block" href="mailto:admin@hjbeng.com">admin@hjbeng.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[400px] lg:h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700/50">
              <Map showOffice={true} zoom={14} />
              <div className="absolute bottom-4 left-4 z-[400] bg-white/90 dark:bg-secondary/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-medium text-secondary dark:text-slate-200 shadow-sm border border-slate-200 dark:border-slate-700">
                Serving Greater Vancouver
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}