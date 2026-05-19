"use client";

import Image from "next/image";
import Link from "next/link";
import { members } from "@/data/members";
import { use, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabType = "profile" | "facts" | "media";

export default function MemberDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  const member = members.find((m) => m.slug === slug);

  const [tab, setTab] = useState<TabType>("profile");

  const currentIndex = members.findIndex((m) => m.slug === slug);

  const prevMember = currentIndex > 0 ? members[currentIndex - 1] : members[members.length - 1];

  const nextMember = currentIndex < members.length - 1 ? members[currentIndex + 1] : members[0];

  const formattedBirthday = useMemo(() => {
    return new Date(member?.birthday || "").toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [member]);

  if (!member) {
    return <div className="min-h-screen flex items-center justify-center text-2xl font-bold">Member not found</div>;
  }

  return (
    <main className="bg-white overflow-hidden">
      {/* HERO */}
      <section className={`relative min-h-screen bg-gradient-to-br ${member.theme}`}>
        {/* BG IMAGE */}
        <div className="absolute inset-0">
          <Image src={member.banner} alt={member.name} fill className="object-cover opacity-20" priority />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

        {/* GLOW */}
        <div className="absolute top-20 right-0 w-[700px] h-[700px] bg-pink-300/30 blur-[140px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} className="relative">
            {/* FLOATING GLOW */}
            <div className="absolute -inset-6 bg-pink-300/20 blur-3xl rounded-[3rem]" />

            <div className="relative overflow-hidden rounded-[3rem] shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
              <Image src={member.image} alt={member.name} width={700} height={900} className="w-full h-[780px] object-cover" priority />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* LABEL */}
              <div className="absolute bottom-8 left-8">
                <p className="text-white/70 tracking-[0.4em] text-sm">TWICE MEMBER</p>

                <h2 className="mt-2 text-5xl font-black text-white">{member.stageName}</h2>
              </div>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}>
            <p className="uppercase tracking-[0.35em] text-pink-400 text-sm">Profile</p>

            <h1 className="mt-5 text-6xl md:text-7xl font-black text-gray-900 leading-none">{member.stageName}</h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">{member.description}</p>

            {/* TAGS */}
            <div className="mt-8 flex flex-wrap gap-3">
              {member.position.map((pos) => (
                <span key={pos} className="px-5 py-2 rounded-full bg-white/80 backdrop-blur border border-pink-100 text-pink-500 text-sm font-medium shadow-sm">
                  {pos}
                </span>
              ))}
            </div>

            {/* QUICK INFO */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <InfoCard label="Birthday" value={formattedBirthday} />
              <InfoCard label="Nationality" value={member.nationality} />
              <InfoCard label="MBTI" value={member.mbti} />
              <InfoCard label="Blood Type" value={member.bloodType} />
            </div>

            {/* FAVORITES */}
            <div className="mt-10 grid md:grid-cols-2 gap-4">
              <div className="rounded-3xl bg-white/80 backdrop-blur border border-pink-100 p-6">
                <p className="text-sm text-gray-400">Favorite Color</p>

                <h3 className="mt-2 text-2xl font-bold text-gray-900">{member.favoriteColor}</h3>
              </div>

              <div className="rounded-3xl bg-white/80 backdrop-blur border border-pink-100 p-6">
                <p className="text-sm text-gray-400">Representative Song</p>

                <h3 className="mt-2 text-2xl font-bold text-gray-900">{member.representativeSong}</h3>
              </div>
            </div>

            {/* STATS */}
            <div className="mt-12 space-y-5">
              {Object.entries(member.stats).map(([key, value]) => (
                <div key={key}>
                  <div className="flex justify-between mb-2">
                    <span className="capitalize text-sm font-medium text-gray-700">{key}</span>

                    <span className="text-sm text-pink-500 font-semibold">{value}%</span>
                  </div>

                  <div className="h-3 rounded-full bg-pink-100 overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full rounded-full bg-gradient-to-r from-pink-400 to-pink-500" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-white" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-7xl text-pink-300">“</p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight text-gray-900">{member.quote}</h2>

          <p className="mt-6 text-pink-500 font-semibold text-lg">— {member.stageName}</p>
        </div>
      </section>

      {/* TABS */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        {/* BUTTONS */}
        <div className="flex justify-center">
          <div className="bg-pink-100 p-2 rounded-full flex gap-2">
            <TabButton label="Profile" active={tab === "profile"} onClick={() => setTab("profile")} />

            <TabButton label="Facts" active={tab === "facts"} onClick={() => setTab("facts")} />

            <TabButton label="Media" active={tab === "media"} onClick={() => setTab("media")} />
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {/* PROFILE */}
            {tab === "profile" && (
              <motion.div key="profile" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-white border border-pink-100 rounded-[2rem] p-10 shadow-sm">
                <div className="grid md:grid-cols-2 gap-8">
                  <ProfileItem label="Birth Name" value={member.birthName} />

                  <ProfileItem label="Birthday" value={formattedBirthday} />

                  <ProfileItem label="Zodiac" value={member.zodiac} />

                  <ProfileItem label="Nationality" value={member.nationality} />

                  <ProfileItem label="Height" value={member.height} />

                  <ProfileItem label="Blood Type" value={member.bloodType} />

                  <ProfileItem label="MBTI" value={member.mbti} />

                  <ProfileItem label="Hobby" value={member.hobby} />
                </div>
              </motion.div>
            )}

            {/* FACTS */}
            {tab === "facts" && (
              <motion.div key="facts" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="grid md:grid-cols-2 gap-6">
                  {member.funFacts.map((fact, i) => (
                    <div key={i} className="bg-pink-50 border border-pink-100 rounded-3xl p-7">
                      <p className="text-pink-500 font-bold text-lg">0{i + 1}</p>

                      <p className="mt-3 text-gray-700 leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* MEDIA */}
            {tab === "media" && (
              <motion.div key="media" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-14">
                {/* YOUTUBE */}
                <div className="overflow-hidden rounded-[2rem] shadow-xl">
                  <iframe width="100%" height="600" src={member.youtube} title={member.stageName} allowFullScreen className="w-full" />
                </div>

                {/* GALLERY */}
                <div>
                  <h3 className="text-4xl font-black text-gray-900">Gallery</h3>

                  <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-5">
                    {member.gallery.map((img, i) => (
                      <motion.div key={i} whileHover={{ y: -6 }} className="overflow-hidden rounded-3xl">
                        <Image src={img} alt="" width={500} height={600} className="w-full h-[300px] object-cover hover:scale-105 transition duration-500" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* NEXT / PREV */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          <Link href={`/members/${prevMember.slug}`}>
            <motion.div whileHover={{ y: -4 }} className="group relative overflow-hidden rounded-[2rem] h-[260px]">
              <Image src={prevMember.image} alt={prevMember.name} fill className="object-cover group-hover:scale-105 transition duration-500" />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute bottom-6 left-6">
                <p className="text-white/60 text-sm">Previous Member</p>

                <h3 className="text-4xl font-black text-white mt-2">{prevMember.stageName}</h3>
              </div>
            </motion.div>
          </Link>

          <Link href={`/members/${nextMember.slug}`}>
            <motion.div whileHover={{ y: -4 }} className="group relative overflow-hidden rounded-[2rem] h-[260px]">
              <Image src={nextMember.image} alt={nextMember.name} fill className="object-cover group-hover:scale-105 transition duration-500" />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute bottom-6 left-6">
                <p className="text-white/60 text-sm">Next Member</p>

                <h3 className="text-4xl font-black text-white mt-2">{nextMember.stageName}</h3>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>
    </main>
  );
}

/* INFO CARD */
function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl bg-white/80 backdrop-blur border border-pink-100 p-6 shadow-sm">
      <p className="text-sm text-gray-400">{label}</p>

      <h3 className="mt-2 text-xl font-bold text-gray-900">{value}</h3>
    </div>
  );
}

/* PROFILE ITEM */
function ProfileItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-pink-100 pb-5">
      <p className="text-sm text-gray-400">{label}</p>

      <h3 className="mt-2 text-xl font-semibold text-gray-800">{value}</h3>
    </div>
  );
}

/* TAB BUTTON */
function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-7 py-3 rounded-full text-sm font-medium transition-all duration-300
      ${active ? "bg-pink-500 text-white shadow-lg" : "text-pink-500 hover:bg-pink-200"}`}
    >
      {label}
    </button>
  );
}
