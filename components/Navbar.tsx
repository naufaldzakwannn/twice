"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-pink-500 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-white">TWICE</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium text-white">
          <Link href="/" className="hover:text-pink-200">
            Home
          </Link>
          <Link href="/members" className="hover:text-pink-200">
            Members
          </Link>
          <Link href="/discography" className="hover:text-pink-200">
            Discography
          </Link>
          <Link href="/about" className="hover:text-pink-200">
            About
          </Link>
        </div>

        {/* Hamburger Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white focus:outline-none">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-pink-500 px-6 pb-4 text-white space-y-3">
          <Link href="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>
          <Link href="/members" onClick={() => setOpen(false)} className="block">
            Members
          </Link>
          <Link href="/discography" onClick={() => setOpen(false)} className="block">
            Discography
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block">
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
