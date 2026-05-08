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
    return <div className="min-h-screen flex items-center justify-center">Member not found</div>;
  }

  return (
    <main className="bg-white min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="relative">
        {/* background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-pink-50" />

        {/* glow */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-pink-300/30 blur-[120px] rounded-full" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
          {/* IMAGE */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} className="relative">
            {/* glow */}
            <div className="absolute -inset-5 bg-pink-300/20 blur-3xl rounded-[3rem]" />

            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
              <Image src={member.image} alt={member.name} width={600} height={800} className="w-full h-auto object-cover" priority />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* floating label */}
              <div className="absolute bottom-6 left-6">
                <p className="text-white/70 text-sm tracking-[0.3em]">TWICE MEMBER</p>

                <h2 className="text-4xl font-extrabold text-white mt-2">{member.stageName}</h2>
              </div>
            </div>
          </motion.div>

          {/* INFO */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}>
            <p className="uppercase tracking-[0.3em] text-pink-400 text-sm">Profile</p>

            <h1 className="mt-3 text-5xl font-extrabold text-gray-900">{member.name}</h1>

            <p className="mt-6 text-gray-600 leading-relaxed">{member.description}</p>

            {/* POSITIONS */}
            <div className="mt-8 flex flex-wrap gap-3">
              {member.position.map((pos) => (
                <span key={pos} className="px-5 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium">
                  {pos}
                </span>
              ))}
            </div>

            {/* QUICK STATS */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <InfoCard label="Birthday" value={member.birthday} />
              <InfoCard label="Nationality" value={member.nationality} />
              <InfoCard label="Height" value={member.height} />
              <InfoCard label="Blood Type" value={member.bloodType} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* TABS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        {/* TAB BUTTONS */}
        <div className="flex justify-center">
          <div className="bg-pink-100 p-2 rounded-full flex gap-2">
            <TabButton label="Profile" active={tab === "profile"} onClick={() => setTab("profile")} />

            <TabButton label="Facts" active={tab === "facts"} onClick={() => setTab("facts")} />

            <TabButton label="Media" active={tab === "media"} onClick={() => setTab("media")} />
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            {/* PROFILE */}
            {tab === "profile" && (
              <motion.div key="profile" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-white border border-pink-100 rounded-[2rem] p-8 shadow-sm">
                <div className="grid md:grid-cols-2 gap-8 text-gray-700">
                  <ProfileItem label="Birth Name" value={member.birthName} />

                  <ProfileItem label="Birthday" value={member.birthday} />

                  <ProfileItem label="Zodiac" value={member.zodiac} />

                  <ProfileItem label="Nationality" value={member.nationality} />

                  <ProfileItem label="Height" value={member.height} />

                  <ProfileItem label="Blood Type" value={member.bloodType} />
                </div>
              </motion.div>
            )}

            {/* FACTS */}
            {tab === "facts" && (
              <motion.div key="facts" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-pink-50 rounded-[2rem] p-10 text-center">
                <h3 className="text-3xl font-bold text-pink-500">Fun Facts</h3>

                <div className="mt-8 space-y-4 text-gray-700">
                  <p>✨ Stage Name: {member.stageName}</p>
                  <p>🎂 Born on {member.birthday}</p>
                  <p>🌍 Nationality: {member.nationality}</p>
                  <p>💖 Positions: {member.position.join(", ")}</p>
                </div>
              </motion.div>
            )}

            {/* MEDIA */}
            {tab === "media" && (
              <motion.div key="media" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-[2rem] p-14 text-center">
                <h3 className="text-3xl font-bold text-pink-500">Media</h3>

                <p className="mt-4 text-gray-600">Photos, fancams, and performances coming soon 💖</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

/* INFO CARD */
function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white border border-pink-100 rounded-2xl p-5">
      <p className="text-sm text-gray-400">{label}</p>
      <h3 className="mt-1 font-semibold text-gray-800">{value}</h3>
    </div>
  );
}

/* PROFILE ITEM */
function ProfileItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-pink-100 pb-4">
      <p className="text-sm text-gray-400">{label}</p>
      <h3 className="mt-1 font-semibold">{value}</h3>
    </div>
  );
}

/* TAB BUTTON */
function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all
      ${active ? "bg-pink-500 text-white shadow" : "text-pink-500 hover:bg-pink-200"}`}
    >
      {label}
    </button>
  );
}
