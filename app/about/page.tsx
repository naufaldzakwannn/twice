"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-black leading-tight">
            More Than Just <span className="text-pink-500">Music</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            TWICE adalah girl group Korea Selatan yang dibentuk oleh JYP Entertainment melalui program survival <b>SIXTEEN</b> pada tahun 2015.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed text-lg">Dengan sembilan member dan identitas visual yang kuat, TWICE berkembang menjadi salah satu girl group paling berpengaruh di dunia K-pop.</p>

          <p className="mt-4 text-gray-600 leading-relaxed text-lg">Mereka dikenal lewat musik catchy, konsep yang terus berkembang, dan koneksi emosional yang kuat dengan fans.</p>
        </motion.div>

        {/* IMAGE */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div className="absolute -inset-6 bg-pink-200/40 blur-3xl rounded-full" />

          <Image src="/about1.jpeg" alt="TWICE concept" width={600} height={500} className="relative rounded-[2.5rem] shadow-2xl" />
        </motion.div>
      </section>

      {/* DEBUT ERA */}
      <section className="relative py-32 overflow-hidden">
        {/* background */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-white" />

        {/* glow */}
        <div className="absolute top-10 left-0 w-[700px] h-[700px] bg-pink-200/40 blur-[160px] rounded-full" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-24 items-center">
            {/* IMAGE SIDE */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative lg:-ml-6">
              {/* blur glow */}
              <div className="absolute -left-10 top-10 w-full h-full bg-pink-300/20 blur-[120px] rounded-full" />

              {/* frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border border-pink-100 rounded-[3rem]" />

              {/* image */}
              <div className="relative overflow-hidden rounded-[2.8rem] shadow-[0_35px_100px_rgba(0,0,0,0.12)]">
                <Image
                  src="/albums/the-story-begins.webp"
                  alt="The Story Begins"
                  width={800}
                  height={900}
                  className="
                    w-full
                    h-[520px]
                    md:h-[700px]
                    object-cover
                  "
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* text */}
                <div className="absolute bottom-8 left-8">
                  <p className="text-white/70 text-sm tracking-[0.3em]">DEBUT ERA</p>

                  <h3 className="mt-3 text-5xl font-black text-white leading-none">
                    Like
                    <br />
                    OOH-AHH
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* TEXT SIDE */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-xl">
              <p className="uppercase tracking-[0.35em] text-pink-400 text-sm">The Beginning</p>

              <h2 className="mt-6 text-5xl md:text-6xl leading-[0.92] font-black text-gray-900">
                The Story
                <br />
                <span className="text-pink-500">Begins</span>
              </h2>

              <div className="mt-10 space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  TWICE officially debuted in 2015 with
                  <span className="font-semibold text-gray-900"> “The Story Begins”</span>, introducing a fresh identity filled with bright energy, catchy melodies, and unforgettable visuals.
                </p>

                <p>The debut era became the foundation of TWICE’s rise into one of the most iconic girl groups in K-pop.</p>
              </div>

              {/* stats */}
              <div className="mt-14 flex gap-12 flex-wrap">
                <div>
                  <p className="text-5xl font-black text-pink-500">2015</p>

                  <p className="mt-2 text-gray-500 text-sm">Debut Year</p>
                </div>

                <div>
                  <p className="text-5xl font-black text-pink-500">9</p>

                  <p className="mt-2 text-gray-500 text-sm">Members</p>
                </div>

                <div>
                  <p className="text-5xl font-black text-pink-500">JYP</p>

                  <p className="mt-2 text-gray-500 text-sm">Entertainment</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WEBSITE PURPOSE */}
      <section className="max-w-5xl mx-auto px-6 py-28 text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl font-black">
          About This <span className="text-pink-500">Website</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-8 text-gray-600 leading-relaxed text-lg">
          Website ini adalah fansite TWICE tidak resmi yang dibuat untuk mengumpulkan discography, profil member, dan perjalanan karier TWICE dalam satu tempat yang modern dan mudah diakses.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-5 text-gray-600 leading-relaxed text-lg">
          Selain sebagai bentuk apresiasi kepada TWICE, project ini juga menjadi eksplorasi design aesthetic dan modern frontend development menggunakan Next.js, Tailwind CSS, dan Framer Motion.
        </motion.p>
      </section>

      {/* DISCLAIMER */}
      <section className="pb-20 text-center text-sm text-gray-400">All content belongs to JYP Entertainment and respective owners. This is a non-commercial fan project.</section>
    </main>
  );
}
