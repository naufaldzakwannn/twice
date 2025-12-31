"use client";

import Link from "next/link";
import Image from "next/image";
import { members } from "@/data/members";
import { motion } from "framer-motion";

export default function MembersPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* TITLE */}
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold text-center text-pink-500">
        TWICE Members
      </motion.h1>

      {/* GRID */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6"
      >
        {members.map((m) => (
          <motion.div
            key={m.slug}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link href={`/members/${m.slug}`} className="group block">
              <div className="rounded-3xl overflow-hidden shadow-md bg-white">
                <Image src={m.image} alt={m.name} width={400} height={400} className="transition-transform duration-300 group-hover:scale-110" />
              </div>

              <p className="mt-3 text-center font-semibold text-white drop-shadow group-hover:text-pink-500 transition-colors duration-300">{m.stageName}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
