"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menu = [
    { name: "Home", href: "/" },
    { name: "Members", href: "/members" },
    { name: "Discography", href: "/discography" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50">
        {/* background layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 shadow-md" />

        <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LEFT: LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/logo-twice2.png" alt="TWICE" width={34} height={34} />
            <span className="text-white text-xl font-black tracking-wider">TWICE</span>
          </Link>

          {/* CENTER: MENU (desktop) */}
          <div className="hidden md:flex items-center gap-3 bg-white/10 backdrop-blur px-3 py-2 rounded-full">
            {menu.map((item) => {
              const active = pathname === item.href;

              return (
                <Link key={item.name} href={item.href} className="relative px-4 py-1.5 text-sm font-medium text-white">
                  {/* active pill */}
                  {active && <motion.span layoutId="nav-pill" className="absolute inset-0 bg-white/20 rounded-full" transition={{ type: "spring", stiffness: 300, damping: 25 }} />}

                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* RIGHT: CTA + BURGER */}
          <div className="flex items-center gap-3">
            {/* CTA (desktop only) */}
            <Link href="/discography" className="hidden md:inline-block px-5 py-2 rounded-full bg-white text-pink-500 text-sm font-semibold hover:bg-pink-100 transition">
              Listen Now
            </Link>

            {/* BURGER */}
            <button onClick={() => setOpen(true)} className="md:hidden text-white">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE PANEL (SLIDE FROM RIGHT) */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div className="fixed inset-0 bg-black/40 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />

            {/* PANEL */}
            <motion.div className="fixed top-0 right-0 h-full w-[75%] max-w-xs bg-white z-50 shadow-xl" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 260, damping: 25 }}>
              <div className="p-6 flex flex-col gap-6">
                {/* HEADER */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-pink-500">TWICE</span>
                  <button onClick={() => setOpen(false)}>✕</button>
                </div>

                {/* MENU */}
                <div className="flex flex-col gap-4">
                  {menu.map((item) => {
                    const active = pathname === item.href;

                    return (
                      <Link key={item.name} href={item.href} onClick={() => setOpen(false)} className={`text-base font-medium ${active ? "text-pink-500" : "text-gray-700 hover:text-pink-500"}`}>
                        {item.name}
                      </Link>
                    );
                  })}
                </div>

                {/* CTA */}
                <Link href="/discography" className="mt-4 inline-block text-center px-5 py-3 rounded-full bg-pink-500 text-white font-semibold">
                  Listen Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
