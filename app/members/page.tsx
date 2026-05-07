"use client";

import Link from "next/link";
import Image from "next/image";
import { members } from "@/data/members";
import { motion } from "framer-motion";

export default function MembersPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-pink-50" />

        {/* glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-300/30 blur-[120px] rounded-full" />

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="uppercase tracking-[0.3em] text-pink-400 text-sm">
            TWICE
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-5xl md:text-6xl font-extrabold text-gray-900">
            Members
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Nine different charms, one complete identity.
          </motion.p>
        </div>
      </section>

      {/* MEMBERS GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {members.map((m, i) => (
            <motion.div
              key={m.slug}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/members/${m.slug}`} className="group block">
                {/* CARD */}
                <div className="relative overflow-hidden rounded-[2rem] bg-pink-100 shadow-sm hover:shadow-xl transition-all duration-500">
                  {/* IMAGE */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      className={`
                      object-cover transition-transform duration-700 group-hover:scale-110
                      ${m.position === "right" ? "object-right" : ""}
                      ${m.position === "left" ? "object-left" : ""}
                      ${m.position === "top" ? "object-top" : ""}
                      ${m.position === "bottom" ? "object-bottom" : ""}
                    `}
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

                    {/* glow on hover */}
                    <div className="absolute inset-0 bg-pink-300/20 opacity-0 group-hover:opacity-100 transition duration-500" />
                  </div>

                  {/* TEXT */}
                  <div className="absolute bottom-0 left-0 w-full p-5">
                    <p className="text-white/70 text-sm tracking-wider">MEMBER {String(i + 1).padStart(2, "0")}</p>

                    <h2 className="text-2xl font-bold text-white mt-1">{m.stageName}</h2>

                    <p className="text-white/80 text-sm mt-1">{m.name}</p>
                  </div>

                  {/* hover line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-pink-400 group-hover:w-full transition-all duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
