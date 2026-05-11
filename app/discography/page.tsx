"use client";

import { discography } from "@/data/discography";
import AlbumCard from "@/components/AlbumCard";
import { motion } from "framer-motion";

export default function DiscographyPage() {
  return (
    <main className="bg-white min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-pink-50" />

        {/* glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-300/30 blur-[140px] rounded-full" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="uppercase tracking-[0.4em] text-pink-400 text-sm">
            TWICE ARCHIVE
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mt-4 text-5xl md:text-6xl font-extrabold text-gray-900">
            Discography
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore every era, album, and concept that shaped TWICE’s journey from debut to global phenomenon.
          </motion.p>
        </div>
      </section>

      {/* ERA SECTIONS */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        {discography.map((section, index) => (
          <motion.div key={section.era} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-28">
            {/* ERA HEADER */}
            <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
              <div>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-pink-400 uppercase tracking-[0.3em] text-sm">
                  ERA {String(index + 1).padStart(2, "0")}
                </motion.p>

                <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900">
                  {section.era}
                </motion.h2>
              </div>

              {/* line */}
              <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-pink-300 to-transparent" />
            </div>

            {/* GRID */}
            <motion.div
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="
                grid
                grid-cols-2
                sm:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                gap-x-6
                gap-y-10
              "
            >
              {section.albums.map((album) => (
                <motion.div
                  key={album.slug}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 16,
                  }}
                  className="group"
                >
                  {/* glow */}
                  <div className="absolute" />

                  <div className="relative">
                    <AlbumCard album={album} />

                    {/* hover glow */}
                    <div className="absolute inset-0 rounded-[2rem] bg-pink-300/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
