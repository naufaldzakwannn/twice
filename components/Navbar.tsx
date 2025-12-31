"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", href: "/" },
    { name: "Members", href: "/members" },
    { name: "Discography", href: "/discography" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-pink-500/90 backdrop-blur shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-twice2.png" alt="TWICE Logo" width={36} height={36} priority />
          <span className="text-white text-xl font-extrabold tracking-widest">TWICE</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {menu.map((item) => (
            <Link key={item.name} href={item.href} className="relative text-white font-medium group">
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* HAMBURGER */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Toggle Menu">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="md:hidden bg-pink-500/95 backdrop-blur px-6 pb-6 space-y-4 text-white">
            {menu.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setOpen(false)} className="block text-lg font-medium hover:text-pink-200 transition">
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
