"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* BACKGROUND ACCENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-white to-pink-100 opacity-70" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          {/* TEXT SIDE */}
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="uppercase tracking-widest text-sm text-pink-500 font-medium">
              K-POP GIRL GROUP
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-extrabold leading-tight mt-2">
              TWICE
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-5 text-lg text-gray-600 max-w-md">
              One in a Million. Dive into music, visuals, and the journey of one of the most iconic girl groups.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex gap-4 flex-wrap">
              <Link href="/members" className="px-7 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition shadow-md">
                Members
              </Link>

              <Link href="/discography" className="px-7 py-3 rounded-full border border-pink-500 text-pink-500 font-semibold hover:bg-pink-50 transition">
                Discography
              </Link>
            </motion.div>
          </div>

          {/* IMAGE SIDE */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="absolute -inset-6 bg-pink-300 blur-3xl opacity-30 rounded-full" />

            <Image src="/twice1.jpg" alt="TWICE" width={500} height={500} className="relative rounded-3xl object-cover shadow-xl" />
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHT (lebih editorial style) */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard number="09" title="Members" desc="Each member brings a unique color, forming one complete identity." />
          <FeatureCard number="10+" title="Albums" desc="From debut to global hits, evolving through every era." />
          <FeatureCard number="2015" title="Debut" desc="A journey that started with energy and became legacy." />
        </div>
      </section>

      {/* FEATURED ERA (lebih clean & classy) */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <Image src="/albums/with-you-th.webp" alt="With YOU-th" width={400} height={400} className="rounded-3xl shadow-lg" />

          <div>
            <h2 className="text-3xl font-bold">
              Latest Era — <span className="text-pink-500">With YOU-th</span>
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">A more mature and emotional side of TWICE, blending soft visuals with deeper storytelling and refined sound.</p>

            <Link href="/discography" className="inline-block mt-6 text-pink-500 font-semibold group">
              Explore more
              <span className="ml-2 group-hover:translate-x-1 inline-block transition">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* COMPONENT */
function FeatureCard({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="border-t-2 border-pink-400 pt-6">
      <h3 className="text-4xl font-bold text-pink-500">{number}</h3>
      <h4 className="mt-2 text-xl font-semibold">{title}</h4>
      <p className="mt-2 text-gray-600">{desc}</p>
    </motion.div>
  );
}
