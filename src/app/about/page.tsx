import Link from 'next/link';
import Image from 'next/image';
import Slideshow from '@/components/Slideshow'; // Import the new component
import projectsData from '@/../public/images/Project Photos/description.json'; // Import project data

export default function AboutPage() {
  return (
    <>
      <div className="@container w-full bg-white dark:bg-slate-900">
        {/* Hero Section with Background Slideshow */}
        <Slideshow slides={projectsData.projects}>
          <div />
        </Slideshow>
      </div>
      <div className="w-full bg-secondary py-12">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-white/20">
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-black text-white">20+</span>
              <span className="text-blue-200 text-sm font-medium uppercase tracking-wider">Years Experience</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-black text-white">450+</span>
              <span className="text-blue-200 text-sm font-medium uppercase tracking-wider">Projects Completed</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-black text-white">32</span>
              <span className="text-blue-200 text-sm font-medium uppercase tracking-wider">Awards Won</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-black text-white">100%</span>
              <span className="text-blue-200 text-sm font-medium uppercase tracking-wider">Safety Record</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-16 md:py-24">
        <div className="max-w-[960px] mx-auto px-6 md:px-10 flex flex-col gap-10">
          <div className="text-center">
            <h2 className="text-secondary dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-4">Our Story</h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg font-normal leading-relaxed max-w-[700px] mx-auto">
              Established in the heart of the Pacific Northwest, HJB Engineering has been shaping the skyline of Vancouver for over two decades. Our journey is built on a foundation of technical excellence, a commitment to sustainable structural design, and a deep respect for the communities we build for.
            </p>
          </div>
          <div className="mt-8 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="grid grid-cols-[40px_1fr] gap-x-6 px-4">
              <div className="flex flex-col items-center gap-1 pt-3">
                <div className="text-primary bg-blue-50 dark:bg-blue-900/30 p-2 rounded-full">
                  <span className="material-symbols-outlined text-[24px]">architecture</span>
                </div>
                <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-full grow my-2"></div>
              </div>
              <div className="flex flex-1 flex-col py-3 pb-8">
                <p className="text-secondary dark:text-white text-lg font-bold leading-normal">Firm Founded</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">2003</p>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  HJB Engineering began as a small consultancy in Gastown, focused on residential renovations and small commercial retrofits.
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-2"></div>
                <div className="text-primary bg-blue-50 dark:bg-blue-900/30 p-2 rounded-full">
                  <span className="material-symbols-outlined text-[24px]">apartment</span>
                </div>
                <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-full grow my-2"></div>
              </div>
              <div className="flex flex-1 flex-col py-3 pb-8">
                <p className="text-secondary dark:text-white text-lg font-bold leading-normal">First High-Rise Completed</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">2008</p>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  A milestone achievement, the &quot;Pacific Zenith&quot; tower showcased our ability to handle complex vertical engineering challenges.
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-2"></div>
                <div className="text-primary bg-blue-50 dark:bg-blue-900/30 p-2 rounded-full">
                  <span className="material-symbols-outlined text-[24px]">factory</span>
                </div>
                <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-full grow my-2"></div>
              </div>
              <div className="flex flex-1 flex-col py-3 pb-8">
                <p className="text-secondary dark:text-white text-lg font-bold leading-normal">Expansion to Industrial Sector</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">2015</p>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  Diversifying our portfolio, we began engineering large-scale industrial facilities and distribution centers across BC.
                </p>
              </div>
              <div className="flex flex-col items-center gap-1 pb-3">
                <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-2"></div>
                <div className="text-primary bg-blue-50 dark:bg-blue-900/30 p-2 rounded-full">
                  <span className="material-symbols-outlined text-[24px]">eco</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-secondary dark:text-white text-lg font-bold leading-normal">Sustainable Design Award</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">2023</p>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  Recognized for our commitment to reducing carbon footprints through innovative timber hybrid structures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-slate-900 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-secondary dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">Our Core Values</h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg">The principles that guide every calculation and client relationship.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 p-8 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-shadow border border-slate-100 dark:border-slate-700">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
              <h3 className="text-xl font-bold text-secondary dark:text-white">Integrity</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Honest calculations, honest relationships. We believe in transparency at every stage of the project, ensuring no hidden costs or surprises.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-8 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-shadow border border-slate-100 dark:border-slate-700">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-3xl">lightbulb</span>
              </div>
              <h3 className="text-xl font-bold text-secondary dark:text-white">Innovation</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Pushing the boundaries of material science. We constantly explore new methods to build lighter, stronger, and more sustainable structures.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-8 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-shadow border border-slate-100 dark:border-slate-700">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-3xl">shield</span>
              </div>
              <h3 className="text-xl font-bold text-secondary dark:text-white">Safety</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Our non-negotiable priority. We design with redundant safety margins to protect the lives of those who build and inhabit our structures.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-secondary dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">Meet the Principals</h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg">
                Our team brings together decades of experience in structural analysis, seismic retrofitting, and project management.
              </p>
            </div>
            <Link className="text-primary font-bold flex items-center hover:underline" href="/team">
              View Full Team <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="aspect-[3/4] overflow-hidden bg-slate-200">
                <Image alt="Professional headshot of James Sterling" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Man in blue suit smiling professionally" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbbcrbao6bvSZMSeZsONrh9pQq-iXa529TeI61qqsmYVrTbzfErmY-iXBhNa-s1dffkAVhdQu-_KRqum99AKf7NP-uXpigmcgQKsckzw5b6lWoGr3-0lLxoPkb4yGKZmYL1GQpei7j1Kd_PHpRmTjy5vdZjpNPTNHJvfE7zQTTuTlFXYpIISek-PVABGukiLFKCDvSPCA8V6Om20Nyc9GbBSVodT9gVoX057QFTNh9j_jo8xBTdgd6hJYJx2e1hwLHf1uTtDtbnJVl" width={300} height={400} />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-secondary dark:text-white">James Sterling, P.Eng</h3>
                <p className="text-primary text-sm font-medium mb-2">Principal Engineer</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-3 mb-3">
                  James founded HJB Engineering with a vision to modernize structural consulting. He specializes in high-rise concrete design and seismic resilience.
                </p>
                <span className="text-xs font-bold text-slate-900 dark:text-slate-200 group-hover:text-primary transition-colors flex items-center gap-1 cursor-pointer">
                  Read Bio <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="aspect-[3/4] overflow-hidden bg-slate-200">
                <Image alt="Professional headshot of Elena Rostova" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Woman in blazer with glasses looking confident" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSX3Z5P600FM4deCD4iUmk--ooIZsCxOF1YA5g0UH7FdTV1fmKGAlRwvocOwfvpkM86g3CVfSgYvx4mFFFp3vRY5VIsv2jt5toojTVeMKFOpkfuLIEN0njEQVk5NQeNWpmPZv0Y06SAUES1WMbgcgyepInzfKMqU9w7xrZp6-eFJG3RbN6F-D5QqIHi38M98EVZxDaNDUF38XK0aHur2w8cJZXJIPFPhR-7-_PsLlEO4xtnx35rCuy1-NYQHypyWv_yykURpPfe1DK" width={300} height={400} />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-secondary dark:text-white">Elena Rostova, P.Eng</h3>
                <p className="text-primary text-sm font-medium mb-2">Senior Structural Lead</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-3 mb-3">
                  With 15 years in steel design, Elena leads our industrial division. She is passionate about efficient material usage and lean construction.
                </p>
                <span className="text-xs font-bold text-slate-900 dark:text-slate-200 group-hover:text-primary transition-colors flex items-center gap-1 cursor-pointer">
                  Read Bio <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="aspect-[3/4] overflow-hidden bg-slate-200">
                <Image alt="Professional headshot of Michael Chen" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Man in grey suit tie smiling at camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUieT9sT36Gk7dRC_zWkp1A-xXi6Pvz74jflLakC8oAGABtxP3x_DMKBonFSEDABYLATEK1CnxDazYjtpBhAEKwRSKVNwdD8AWwsmw7-6nK8sClmuXo03PkNWmy1SqW0W35LrUIQc6aNc-61qmADNHvjANW98P0837W3wfZ-83ezS836eCY8hy0E8XFJQC9_8PJR9-g03GblMoihcVIGxL-nc06ePwNyQ6XJai1sXBDgjoJQ-tCvYPnbvEdLwKyhQsIjT437_073CS" width={300} height={400} />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-secondary dark:text-white">Michael Chen</h3>
                <p className="text-primary text-sm font-medium mb-2">Director of Projects</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-3 mb-3">
                  Michael ensures every project stays on time and on budget. His background in construction management bridges the gap between design and site.
                </p>
                <span className="text-xs font-bold text-slate-900 dark:text-slate-200 group-hover:text-primary transition-colors flex items-center gap-1 cursor-pointer">
                  Read Bio <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="aspect-[3/4] overflow-hidden bg-slate-200">
                <Image alt="Professional headshot of Sarah Jenkins" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Woman with curly hair smiling outdoors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACVTAgw5IQJkfMn1X9kLXxwMv_fKujpISDqa5qekBwdlDSWLTYdYR2-e-FKvLdr_uqr6kBmipIlmLxKX8vDomORV0ap0sLaOUcpK1zqIpv0r128F9M4MNF7P5XoPyY_1ejv76RDJBi3XvWbxYumxoiCq_B8yBeZZ7vnAUtRUpwkFhiC9NWlotuKNrh_KYX-dtM4vjj5_P4CXZsiShnlSQbSU7AWFRw1ITaudbSgKs5okP4Akr5kSXwu8jFA7x8IjzPfznLuiL4VtDY" width={300} height={400} />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-secondary dark:text-white">Sarah Jenkins</h3>
                <p className="text-primary text-sm font-medium mb-2">Sustainability Coordinator</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-3 mb-3">
                  Sarah champions our green initiatives, focusing on mass timber projects and LEED certification standards for new developments.
                </p>
                <span className="text-xs font-bold text-slate-900 dark:text-slate-200 group-hover:text-primary transition-colors flex items-center gap-1 cursor-pointer">
                  Read Bio <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 radial-gradient">
        </div>
        <div className="relative max-w-[960px] mx-auto px-6 py-20 text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to build something lasting?</h2>
          <p className="text-slate-300 text-lg max-w-[600px]">
            Whether it&apos;s a commercial high-rise or a custom residential project, let&apos;s discuss how we can bring structural integrity to your vision.
          </p>
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