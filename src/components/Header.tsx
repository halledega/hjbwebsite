"use client";
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] dark:border-slate-700 bg-white dark:bg-[#111921] px-4 md:px-10 py-3">
      <Link href="/" className="flex items-center gap-3 text-[#0e141b] dark:text-white">
        <Image alt="HJB Engineering Logo" width={60} height={60} className="h-10 w-auto" src="/images/HJB Logo.png" />
        <h2 className="text-[#0e141b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">HJB Engineering</h2>
      </Link>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        {/* <Link href="/contact">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-secondary transition-colors">
            <span className="truncate">Contact Us</span>
          </button>
        </Link> */}
      </div>
      <button className="md:hidden text-[#0e141b] dark:text-white">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
}
