import Image from 'next/image';
import Link from 'next/link';

export default function TeamPage() {
  return (
    <>
      <div className="w-full bg-slate-50 dark:bg-[#111921] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-white mb-6">Our Team</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Our principals bring decades of combined experience in structural engineering, ensuring precision and innovation in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {/* Doug Birch */}
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-secondary dark:text-white">Doug Birch</h3>
                <h4 className="text-sm font-bold text-secondary dark:text-white mb-2">P.Eng, Struct Eng.</h4>
                <h5 className="text-primary text-sm font-medium mb-4">Principal</h5>
                <div className="text-slate-500 dark:text-slate-400 text-sm space-y-3 flex-1 mb-6">
                  <p>
                    Doug brings over 37 years of experience to HJB. His main areas of practice include institutional, industrial, commercial, and residential buildings in concrete, steel, and timber.
                  </p>
                  <p>
                    Doug is a registered Professional Engineer in British Columbia, Alberta, Ontario, and the Northwest Territories.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                  <a href="mailto:dougb@hjbeng.com" className="text-primary hover:text-primary-hover text-sm font-medium flex items-center gap-2 transition-colors">
                    <span className="material-symbols-outlined text-base">mail</span>
                    dougb@hjbeng.com
                  </a>
                </div>
              </div>
            </div>

            {/* Michael Halliday */}
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-secondary dark:text-white">Michael Halliday</h3>
                <h4 className="text-sm font-bold text-secondary dark:text-white mb-2">P.Eng.</h4>
                <p className="text-primary text-sm font-medium mb-4">Principal</p>
                <div className="text-slate-500 dark:text-slate-400 text-sm space-y-3 flex-1 mb-6">
                  <p>
                    An experienced Professional Engineer with a demonstrated history in the structural engineering industry. He has extensive experience designing and detailing multi-storey wood frame, cast-in-place concrete, and structural steel buildings.
                  </p>
                  <p>
                    Michael is a registered Professional Engineer in British Columbia, Saskatchewan, and Manitoba.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                  <a href="mailto:michaelh@hjbeng.com" className="text-primary hover:text-primary-hover text-sm font-medium flex items-center gap-2 transition-colors">
                    <span className="material-symbols-outlined text-base">mail</span>
                    michaelh@hjbeng.com
                  </a>
                </div>
              </div>
            </div>

            {/* Dylan James */}
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-secondary dark:text-white">Dylan James</h3>
                <h4 className="text-sm font-bold text-secondary dark:text-white mb-2">P.Eng.</h4>
                <p className="text-primary text-sm font-medium mb-4">Principal</p>
                <div className="text-slate-500 dark:text-slate-400 text-sm space-y-3 flex-1 mb-6">
                  <p>
                    With a foundational background in welding and steel erecting, Dylan brings a deeper understanding of practical construction to structural engineering. 
                  </p>
                  <p>
                    He specializes in tilt-up and structural steel design, utilizing his hands-on field experience to deliver efficient site-ready solutions, and serves on the Tilt-Up Concrete Association’s Canadian Advisory Board.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                  <a href="mailto:dylanj@hjbeng.com" className="text-primary hover:text-primary-hover text-sm font-medium flex items-center gap-2 transition-colors">
                    <span className="material-symbols-outlined text-base">mail</span>
                    dylanj@hjbeng.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-secondary text-white relative overflow-hidden">
        <div className="relative max-w-[960px] mx-auto px-6 py-20 text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Work With Us?</h2>
          <p className="text-blue-100 max-w-2xl">
            Contact our team today to discuss your next project. We're ready to bring your vision to life with precision engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/contact" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
