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
              Meet the experts behind HJB Engineering. Our principals bring decades of combined experience in structural engineering, ensuring precision and innovation in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {/* Doug Birch */}
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col">
              <div className="aspect-[3/4] overflow-hidden bg-slate-200">
                <Image 
                  alt="Professional headshot of Doug Birch" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="/images/people/Doug Birch_Updated.JPG" 
                  width={300} 
                  height={400} 
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-secondary dark:text-white">Doug Birch</h3>
                <h4 className="text-sm font-bold text-secondary dark:text-white mb-2">P.Eng, Struct Eng.</h4>
                <p className="text-primary text-sm font-medium mb-4">Principal</p>
                <div className="text-slate-500 dark:text-slate-400 text-sm space-y-3 flex-1">
                  <p>
                    Doug brings over 37 years of experience to HJB. His main areas of practice include institutional, industrial, commercial, and residential buildings in concrete, steel, and timber.
                  </p>
                  <p>
                    Doug is a registered Professional Engineer in British Columbia, Alberta, Ontario, and the Northwest Territories.
                  </p>
                </div>
              </div>
            </div>

            {/* Michael Halliday */}
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col">
              <div className="aspect-[3/4] overflow-hidden bg-slate-200">
                <Image 
                  alt="Professional headshot of Michael Halliday" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="/images/people/Michael H.JPG" 
                  width={300} 
                  height={400} 
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-secondary dark:text-white">Michael Halliday</h3>
                <h4 className="text-sm font-bold text-secondary dark:text-white mb-2">P.Eng.</h4>
                <p className="text-primary text-sm font-medium mb-4">Principal</p>
                <div className="text-slate-500 dark:text-slate-400 text-sm space-y-3 flex-1">
                  <p>
                    An experienced Professional Engineer with a demonstrated history in the structural engineering industry. He has extensive experience designing and detailing multi-storey wood frame, cast-in-place concrete, and structural steel buildings.
                  </p>
                  <p>
                    Skilled in various design and modelling software such as SAP2000, Etabs, S-Frame, and SAFE. As an experienced Revit user, Michael also leads our Revit/BIM efforts.
                  </p>
                  <p>
                    Michael is a registered Professional Engineer in British Columbia, Saskatchewan, and Manitoba.
                  </p>
                </div>
              </div>
            </div>

            {/* Dylan James */}
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col">
              <div className="aspect-[3/4] overflow-hidden bg-slate-200">
                <Image 
                  alt="Professional headshot of Dylan James" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="/images/people/Dylan James Headshot.jpg" 
                  width={300} 
                  height={400} 
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-secondary dark:text-white">Dylan James</h3>
                <h4 className="text-sm font-bold text-secondary dark:text-white mb-2">P.Eng.</h4>
                <p className="text-primary text-sm font-medium mb-4">Principal</p>
                <div className="text-slate-500 dark:text-slate-400 text-sm space-y-3 flex-1">
                  <p>
                    A 2017 graduate of the British Columbia Institute of Technology, Dylan transitioned from welding and steel erecting to structural engineering.
                  </p>
                  <p>
                    Focusing on tilt-up and structural steel design, he is a founding board member of TILT (Tilt-Up Industry Leaders of Tomorrow) and serves on the Tilt-Up Concrete Association’s Canadian Advisory Board.
                  </p>
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