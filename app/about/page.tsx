"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 overflow-hidden">
      {/* HERO */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
        <h1 className="text-5xl font-extrabold text-pink-500">TWICE</h1>
        <p className="mt-4 text-lg text-gray-600">One in a Million 💖</p>
      </motion.div>

      {/* HERO IMAGE */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-10 flex justify-center">
        <Image src="/about2.jpg" alt="TWICE Group" width={900} height={500} className="rounded-3xl shadow-lg" priority />
      </motion.div>

      {/* ABOUT TWICE */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-pink-500">Who is TWICE?</h2>
        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          TWICE adalah girl group Korea Selatan yang dibentuk oleh JYP Entertainment pada tahun 2015 melalui program survival <b>SIXTEEN</b>. Dengan 9 member, TWICE dikenal lewat musik ceria, konsep ikonik, dan hubungan kuat dengan
          penggemarnya, <b>ONCE</b>.
        </p>
      </motion.div>

      {/* HIGHLIGHTS */}
      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
      >
        {[
          { title: "Debut", text: "2015 • The Story Begins" },
          { title: "Members", text: "9 Members • One Team" },
          { title: "Fandom", text: "ONCE 💕" },
        ].map((item) => (
          <motion.div
            key={item.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            className="bg-pink-50 rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold text-pink-500">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ABOUT WEBSITE */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-pink-500">About This Website</h2>

        <p className="mt-6 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Website ini adalah <b>fansite TWICE tidak resmi</b> yang dibuat untuk menampilkan discography lengkap TWICE dalam satu tempat—mulai dari album Korea, Jepang, hingga integrasi Spotify dan YouTube.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Selain sebagai bentuk apresiasi kepada TWICE, website ini juga dikembangkan sebagai <b>project pembelajaran & portfolio</b> menggunakan Next.js dan Tailwind CSS.
        </p>
      </motion.div>

      {/* DISCLAIMER */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 text-center text-sm text-gray-400">
        All images, music, and videos belong to JYP Entertainment and their respective owners. This website is created for non-commercial and educational purposes.
      </motion.div>
    </section>
  );
}
