"use client";

import Link from "next/link";
import Image from "next/image";
import { members } from "@/data/members";
import { motion } from "framer-motion";

export default function MembersPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* GLOBAL BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-rose-50" />

      {/* GRID PATTERN */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ec4899 1px, transparent 1px),
            linear-gradient(to bottom, #ec4899 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* BIG BLURS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-300/30 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-300/30 rounded-full blur-[120px]" />

      {/* FLOATING LIGHTS */}
      <div className="absolute top-32 left-20 w-40 h-40 bg-pink-200/40 rounded-full blur-3xl animate-pulse" />

      <div className="absolute top-96 right-20 w-56 h-56 bg-rose-200/40 rounded-full blur-3xl animate-pulse" />

      <div className="absolute bottom-32 left-1/3 w-52 h-52 bg-fuchsia-200/30 rounded-full blur-3xl animate-pulse" />

      {/* DECORATIVE CIRCLES */}
      <div className="absolute top-40 right-32 w-24 h-24 border border-pink-300/40 rounded-full" />

      <div className="absolute bottom-32 left-20 w-16 h-16 border border-pink-200/50 rounded-full" />

      <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-rose-200/40 rounded-full" />

      {/* SPARKLES */}
      <div className="absolute top-24 left-1/4 text-pink-300 text-2xl animate-pulse">✦</div>

      <div className="absolute top-1/3 right-1/4 text-rose-300 text-xl animate-pulse">✦</div>

      <div className="absolute bottom-40 left-1/3 text-pink-400 text-lg animate-pulse">✦</div>

      <div className="absolute bottom-24 right-20 text-pink-200 text-3xl animate-pulse">✦</div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-14 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="uppercase tracking-[0.4em] text-pink-400 text-sm font-medium">
            TWICE
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-4 text-5xl md:text-7xl font-black text-gray-900 leading-tight">
            Meet The Members
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Nine unique personalities united into one iconic identity.
          </motion.p>

          {/* DECORATIVE LINE */}
          <motion.div initial={{ width: 0 }} animate={{ width: 120 }} transition={{ delay: 0.4, duration: 0.8 }} className="h-[3px] bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mt-8 rounded-full" />
        </div>
      </section>

      {/* MEMBERS GRID */}
      <section className="relative max-w-6xl mx-auto px-6 pb-24">
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
                <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/40 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* IMAGE */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      className={`
                        object-cover transition-transform duration-700 group-hover:scale-110
                      `}
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                    {/* PINK GLOW */}
                    <div className="absolute inset-0 bg-pink-300/20 opacity-0 group-hover:opacity-100 transition duration-500" />

                    {/* SHINE EFFECT */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                  </div>

                  {/* TEXT */}
                  <div className="absolute bottom-0 left-0 w-full p-5">
                    <p className="text-white/70 text-sm tracking-[0.2em]">MEMBER {String(i + 1).padStart(2, "0")}</p>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">{m.stageName}</h2>

                    <p className="text-white/80 text-sm mt-1">{m.name}</p>
                  </div>

                  {/* HOVER LINE */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-pink-400 to-rose-400 group-hover:w-full transition-all duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
