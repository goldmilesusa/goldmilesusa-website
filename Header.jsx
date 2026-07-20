'use client';

import { useState } from 'react';

const links = [
  ['About Us', '#about'],
  ['Services', '#services'],
  ['Equipment', '#equipment'],
  ['Safety', '#safety'],
  ['Careers', '#careers'],
  ['Contact', '#contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-xl">
      <div className="container-shell flex min-h-[92px] items-center justify-between">
        <a href="#home" aria-label="Gold Miles USA home">
          <img
            src="/gold-miles-logo.png"
            alt="Gold Miles USA"
            className="h-auto w-[185px] object-contain"
          />
        </a>

        <button
          className="grid gap-1.5 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-7 bg-white" />
          <span className="h-0.5 w-7 bg-white" />
          <span className="h-0.5 w-7 bg-white" />
        </button>

        <nav className={`${open ? 'flex' : 'hidden'} absolute left-5 right-5 top-[92px] flex-col gap-5 border border-white/10 bg-black p-6 lg:static lg:flex lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-sm font-bold uppercase tracking-wide text-white transition hover:text-gold-500">
              {label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="border border-gold-500 px-7 py-3 text-center text-sm font-bold uppercase tracking-wide text-gold-400 transition hover:bg-gold-500 hover:text-black"
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
