"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-white to-pink-100" />

        {/* glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-300 opacity-30 blur-[120px] rounded-full" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-extrabold text-pink-500">
            TWICE
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-gray-600">
            One in a Million 💖
          </motion.p>

          {/* HERO IMAGE */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="mt-12 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-pink-300 blur-3xl opacity-30 rounded-3xl" />
              <Image src="/about2.jpg" alt="TWICE" width={900} height={500} className="relative rounded-3xl shadow-2xl" priority />
            </div>
          </motion.div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        {/* TEXT */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold">
            More Than Just <span className="text-pink-500">Music</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            TWICE adalah girl group Korea Selatan yang dibentuk oleh JYP Entertainment melalui program survival <b>SIXTEEN</b> pada tahun 2015. Dengan sembilan member, mereka membangun identitas yang kuat melalui konsep visual, musik yang
            catchy, dan koneksi emosional dengan fans.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">Lebih dari sekadar idol group, TWICE telah berkembang menjadi simbol global dari konsistensi, evolusi, dan dedikasi.</p>
        </motion.div>

        {/* IMAGE */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <Image src="/about1.jpeg" alt="TWICE concept" width={500} height={400} className="rounded-3xl shadow-lg" />
        </motion.div>
      </section>

      {/* STATS / HIGHLIGHTS */}
      <section className="bg-pink-50 py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { number: "2015", label: "Debut Year" },
            { number: "9", label: "Members" },
            { number: "10+", label: "Albums" },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-4xl font-extrabold text-pink-500">{item.number}</h3>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WEBSITE PURPOSE */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl font-bold text-pink-500">
          About This Website
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 text-gray-600 leading-relaxed">
          Website ini adalah fansite TWICE tidak resmi yang dibuat untuk mengumpulkan discography, profil member, dan perjalanan karier dalam satu tempat yang rapi dan mudah diakses.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-gray-600 leading-relaxed">
          Selain sebagai bentuk apresiasi, project ini juga menjadi bagian dari eksplorasi design dan development menggunakan Next.js, Tailwind CSS, dan animasi modern.
        </motion.p>
      </section>

      {/* DISCLAIMER */}
      <section className="text-center pb-20 text-sm text-gray-400">All content belongs to JYP Entertainment and respective owners. This is a non-commercial fan project.</section>
    </main>
  );
}
