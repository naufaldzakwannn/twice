"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-pink-200 via-pink-100 to-white overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-6xl mx-auto px-6 py-24 text-center">
          <motion.h1 initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="text-5xl md:text-6xl font-extrabold text-pink-600">
            TWICE
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-4 text-lg md:text-xl text-gray-700">
            One in a Million! Explore music, members, and journey of TWICE
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/members" className="px-8 py-3 rounded-full bg-pink-500 text-white font-semibold shadow hover:bg-pink-600 transition">
              View Members
            </Link>

            <Link href="/discography" className="px-8 py-3 rounded-full bg-white text-pink-500 font-semibold shadow hover:bg-pink-100 transition">
              Discography
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* HIGHLIGHT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedCard title="9 Members" desc="Each with unique charm and talent" icon="💖" delay={0} />
          <AnimatedCard title="Discography" desc="Albums from debut until now" icon="🎶" delay={0.1} />
          <AnimatedCard title="Fansite Project" desc="Built with Next.js & Tailwind" icon="✨" delay={0.2} />
        </div>
      </section>

      {/* FEATURED ERA */}
      <section className="bg-pink-50">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Image src="/albums/with-you-th.webp" alt="With YOU-th" width={400} height={400} className="mx-auto rounded-3xl shadow-lg" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-pink-500">Latest Era</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              <b>With YOU-th</b> showcases TWICE’s maturity, confidence, and emotional depth.
            </p>

            <Link href="/discography" className="inline-block mt-6 px-6 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition">
              Explore Discography
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* COMPONENT */
function AnimatedCard({ title, desc, icon, delay }: { title: string; desc: string; icon: string; delay: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay }} whileHover={{ scale: 1.05 }} className="bg-white rounded-3xl p-8 text-center shadow-sm">
      <div className="text-4xl">{icon}</div>
      <h3 className="mt-4 text-xl font-bold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </motion.div>
  );
}
