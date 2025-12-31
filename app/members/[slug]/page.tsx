"use client";

import Image from "next/image";
import { members } from "@/data/members";
import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabType = "profile" | "facts" | "media";

export default function MemberDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const member = members.find((m) => m.slug === slug);

  const [tab, setTab] = useState<TabType>("profile");

  if (!member) {
    return <p className="p-10 text-center">Member not found</p>;
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      {/* HEADER */}
      <div className="text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <Image src={member.image} alt={member.name} width={320} height={320} className="mx-auto rounded-3xl shadow-lg" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-4xl font-extrabold text-pink-500">
          {member.stageName}
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-gray-600">
          {member.name}
        </motion.p>

        {/* POSITION */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-4 flex justify-center flex-wrap gap-2">
          {member.position.map((pos) => (
            <span key={pos} className="px-4 py-1 rounded-full text-sm bg-pink-100 text-pink-600">
              {pos}
            </span>
          ))}
        </motion.div>
      </div>

      {/* TABS */}
      <div className="mt-12 flex justify-center gap-4">
        <TabButton label="Profile" active={tab === "profile"} onClick={() => setTab("profile")} />
        <TabButton label="Facts" active={tab === "facts"} onClick={() => setTab("facts")} />
        <TabButton label="Media" active={tab === "media"} onClick={() => setTab("media")} />
      </div>

      {/* TAB CONTENT */}
      <div className="mt-8 bg-pink-50 rounded-3xl p-8 shadow-sm">
        <AnimatePresence mode="wait">
          {tab === "profile" && (
            <motion.div key="profile" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="grid md:grid-cols-2 gap-6 text-gray-700">
              <p>
                <b>Birth Name:</b> {member.birthName}
              </p>
              <p>
                <b>Birthday:</b> {member.birthday}
              </p>
              <p>
                <b>Zodiac:</b> {member.zodiac}
              </p>
              <p>
                <b>Nationality:</b> {member.nationality}
              </p>
              <p>
                <b>Height:</b> {member.height}
              </p>
              <p>
                <b>Blood Type:</b> {member.bloodType}
              </p>

              <p className="md:col-span-2 mt-4 text-center">{member.description}</p>
            </motion.div>
          )}

          {tab === "facts" && (
            <motion.div key="facts" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center text-gray-700 space-y-3">
              <p>
                ✨ Stage name: <b>{member.stageName}</b>
              </p>
              <p>🎂 Born on {member.birthday}</p>
              <p>🌍 Nationality: {member.nationality}</p>
              <p>💗 Position: {member.position.join(", ")}</p>
              <p className="mt-4 text-gray-500">Fun facts 👀</p>
            </motion.div>
          )}

          {tab === "media" && (
            <motion.div key="media" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center text-gray-500">
              Media content coming soon 💖
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* TAB BUTTON */
function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full font-medium transition
        ${active ? "bg-pink-500 text-white shadow" : "bg-pink-100 text-pink-600 hover:bg-pink-200"}`}
    >
      {label}
    </button>
  );
}
