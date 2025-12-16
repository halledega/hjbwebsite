import Link from 'next/link';
import Image from 'next/image';
import servicesData from '@/../public/data/services.json';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-slate-300 pt-16 pb-8">
      <div className="max-w-[1100px] mx-auto px-4 md:px-10">
        {/* <div className="bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left mb-16 shadow-2xl">
          <div className="max-w-[500px]">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">Ready to start your project?</h2>
            <p className="text-blue-100">Contact our engineering team today for a consultation on your next development.</p>
          </div>
          <Link href="/contact">
            <button className="whitespace-nowrap bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors shadow-lg">
              Let&apos;s Build Together
            </button>
          </Link>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-4">
              <Image alt="HJB Engineering Logo" className="h-8 w-auto brightness-0 invert" src="/images/HJB Logo.png" width={32} height={32} />
              <span className="text-lg font-bold">HJB Engineering</span>
            </div>
            {/* <p className="text-sm text-slate-400 mb-6">
              Professional structural engineering services for a changing world. Built on trust, precision, and innovation.
            </p> */}
            {/* <div className="flex gap-4">
              <a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
              <a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
            </div> */}
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link className="hover:text-primary transition-colors" href="/services">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li><Link className="hover:text-primary transition-colors" href="/about">About Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/projects">Our Portfolio</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Vancouver Office</h4>
            <div className="w-full h-[120px] rounded-lg overflow-hidden bg-slate-800 mb-3 relative">
              <Image alt="Map showing location of Vancouver office" className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity" data-location="Vancouver, BC" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDswu_iXbx-0S28-HH6mRil6I8qwkyBBAPqOgtnvDbSOZvdLJ2r0zk8Z73Qfhh9wCdYW3qmUkKj6elrJZN3Gf1McFPjnd4U0WOrtVYgiJQXFlkntokgpGjEmz91qm8k6o1TwFRDuYVphypcrUmGA5v5LkTAU_5V-5Y88HPV7VuqOlZTA6kQoJut7Yl6Sts-C2-eWahqPGfIrY3dl-zyf3W5lsxlhn5IH8wevIVX7vmQgIJrNVnX7Tac7JS4QAek0zqDVUbEZiZ6QoaC" width={200} height={120} />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="material-symbols-outlined text-primary text-3xl drop-shadow-lg">location_on</span>
              </div>
            </div>
            <p className="text-sm text-slate-400">
              110 2920 Virtual Way<br />
              Vancouver, BC V5M 0C4
            </p>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 HJB Engineering Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="hover:text-slate-300" href="/privacy-policy">Privacy Policy</Link>
            <Link className="hover:text-slate-300" href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
