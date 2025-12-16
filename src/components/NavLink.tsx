"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${
        isActive ? 'text-primary' : 'text-[#0e141b] dark:text-slate-300'
      } text-sm font-medium leading-normal hover:text-primary transition-colors`}
    >
      {children}
    </Link>
  );
}
