"use client";
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] dark:border-slate-700 bg-white dark:bg-[#111921] px-4 md:px-10 py-3 relative">
      <Link href="/" className="flex items-center gap-3 text-[#0e141b] dark:text-white" onClick={closeMenu}>
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
      </div>
      <button className="md:hidden text-[#0e141b] dark:text-white" onClick={toggleMenu} aria-label="Toggle menu">
        <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-[#111921] border-b border-[#e7edf3] dark:border-slate-700 shadow-lg md:hidden flex flex-col p-4 gap-4 z-40">
          <NavLink href="/" onClick={closeMenu}>Home</NavLink>
          <NavLink href="/about" onClick={closeMenu}>About</NavLink>
          <NavLink href="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink href="/projects" onClick={closeMenu}>Projects</NavLink>
          <NavLink href="/contact" onClick={closeMenu}>Contact</NavLink>
        </div>
      )}
    </header>
  );
}