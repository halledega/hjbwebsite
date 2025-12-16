"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <>
      <div className="flex-grow flex flex-col items-center w-full px-4 md:px-10 lg:px-40 py-8 lg:py-12">
        <div className="w-full max-w-[1200px] flex flex-col gap-10">
          <div className="flex flex-col gap-3 max-w-2xl">
            <h1 className="text-secondary dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
              Let&apos;s Build Together
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg font-normal leading-normal">
              Reach out to discuss your next structural project in Vancouver. Our engineers are ready to help.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4">
            <div className="lg:col-span-7 bg-surface-light dark:bg-surface-dark p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700/50">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col md:flex-row gap-6">
                  <label className="flex flex-col flex-1 gap-2">
                    <span className="text-base font-medium text-secondary dark:text-slate-200">Full Name</span>
                    <input className="form-input w-full rounded-lg border-slate-200 dark:border-slate-600 bg-background-light dark:bg-[#0d2a58] text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4 placeholder:text-slate-400" placeholder="Jane Doe" required type="text" />
                  </label>
                  <label className="flex flex-col flex-1 gap-2">
                    <span className="text-base font-medium text-secondary dark:text-slate-200">Email Address</span>
                    <input className="form-input w-full rounded-lg border-slate-200 dark:border-slate-600 bg-background-light dark:bg-[#0d2a58] text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4 placeholder:text-slate-400" placeholder="jane@example.com" required type="email" />
                  </label>
                </div>
                <label className="flex flex-col flex-1 gap-2">
                  <span className="text-base font-medium text-secondary dark:text-slate-200">Project Type</span>
                  <div className="relative">
                    <select className="form-select w-full rounded-lg border-slate-200 dark:border-slate-600 bg-background-light dark:bg-[#0d2a58] text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4 pr-10 appearance-none">
                      <option disabled value="">Select a project type</option>
                      <option value="commercial">Commercial Development</option>
                      <option value="residential">Residential Structural Design</option>
                      <option value="renovation">Renovation &amp; Retrofit</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                </label>
                <label className="flex flex-col flex-1 gap-2">
                  <span className="text-base font-medium text-secondary dark:text-slate-200">Message</span>
                  <textarea className="form-textarea w-full rounded-lg border-slate-200 dark:border-slate-600 bg-background-light dark:bg-[#0d2a58] text-slate-900 dark:text-white focus:border-primary focus:ring-primary min-h-[160px] p-4 placeholder:text-slate-400 resize-y" placeholder="Tell us about your project details..."></textarea>
                </label>
                <button className="mt-2 w-full md:w-auto self-start bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-[1.01] shadow-md flex items-center justify-center gap-2" type="submit">
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </form>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="bg-surface-light dark:bg-surface-dark p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700/50 flex flex-col gap-6">
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
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="font-medium text-secondary dark:text-white">Phone</p>
                    <a className="text-slate-500 dark:text-slate-300 mt-1 hover:text-primary transition-colors block" href="tel:+16045550199">+1 (604) 555-0199</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-10 rounded-full bg-slate-100 dark:bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="font-medium text-secondary dark:text-white">Email</p>
                    <a className="text-slate-500 dark:text-slate-300 mt-1 hover:text-primary transition-colors block" href="mailto:hello@structurefirm.ca">hello@hjbengineering.ca</a>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700/50 group">
                <Image alt="Map showing Vancouver office location with abstract city grid overlay" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" data-alt="Map showing Vancouver office location with abstract city grid overlay" data-location="Vancouver" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEQppoua_qQuHPg6yWz_rUk-Bk9cZzS2vrdmia1FPz2YmBVmP6GF01Z8Tloi8AeArgKBCMNx38TJTu1Fu36VHyjyn8Z1wzAE22r2_BwIKNbRynI_g0ktJC9J7nyr0_e2eRgjPp5LSJyI9SgkA4xzvasEJvEAJCybl9qsn_bU33OAiPqdowv-gJRp9OjymnWiQQoVVvQ4k-6fp8sBk4rjfWKL8XACEuw23zP3lgj7YRC4xYM5tFqyd1WRI7gTK1iA1fkpCo2RC_eHqj" width={400} height={320} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <span className="material-symbols-outlined text-5xl text-primary drop-shadow-lg">location_on</span>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-black/30 rounded-full blur-[2px]"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-secondary/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-medium text-secondary dark:text-slate-200 shadow-sm border border-slate-200 dark:border-slate-700">
                  Serving Greater Vancouver
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}