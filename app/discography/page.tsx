"use client";

import { discography } from "@/data/discography";
import AlbumCard from "@/components/AlbumCard";
import { motion } from "framer-motion";

export default function DiscographyPage() {
  return (
    <section className="p-10 max-w-7xl mx-auto">
      {/* TITLE */}
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold text-center text-pink-600 mb-16">
        TWICE Discography
      </motion.h1>

      {discography.map((section) => (
        <motion.div key={section.era} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-24 text-pink-300">
          <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-semibold mb-10 text-pink-500 tracking-wide">
            {section.era}
          </motion.h2>

          <motion.div
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
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
        place-items-center
      "
          >
            {section.albums.map((album) => (
              <motion.div
                key={album.slug}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="w-full max-w-[200px]"
              >
                <AlbumCard album={album} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
