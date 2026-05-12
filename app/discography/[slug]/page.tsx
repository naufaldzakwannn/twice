"use client";

import { discography } from "@/data/discography";
import Image from "next/image";
import { useState, use } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabType = "info" | "spotify" | "youtube";

export default function AlbumDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  const albums = discography.flatMap((d) => d.albums);

  const album = albums.find((a) => a.slug === slug);

  const [tab, setTab] = useState<TabType>("info");

  if (!album) {
    return <div className="min-h-screen flex items-center justify-center">Album not found</div>;
  }

  return (
    <main className="bg-white min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-pink-50" />

        {/* glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-300/30 blur-[140px] rounded-full" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
          {/* ALBUM ART */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} className="relative">
            {/* glow */}
            <div className="absolute -inset-6 bg-pink-300/20 blur-3xl rounded-[3rem]" />

            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
              <Image src={album.image} alt={album.title} width={700} height={700} priority className="w-full h-auto object-cover" />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* floating title */}
              <div className="absolute bottom-6 left-6">
                <p className="text-white/70 text-sm tracking-[0.3em]">TWICE ALBUM</p>

                <h2 className="text-4xl font-extrabold text-white mt-2">{album.title}</h2>
              </div>
            </div>
          </motion.div>

          {/* INFO */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}>
            <p className="uppercase tracking-[0.3em] text-pink-400 text-sm">Discography</p>

            <h1 className="mt-3 text-5xl font-extrabold text-gray-900">{album.title}</h1>

            {/* TAGS */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-5 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium">{album.type}</span>

              <span className="px-5 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium">{album.year}</span>
            </div>

            {/* QUICK INFO */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <InfoCard label="Album Type" value={album.type} />

              <InfoCard label="Release Year" value={album.year} />

              <InfoCard label="Artist" value="TWICE" />

              <InfoCard label="Language" value="Korean / Japanese" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        {/* TAB BUTTONS */}
        <div className="flex justify-center">
          <div className="bg-pink-100 p-2 rounded-full flex gap-2">
            <Tab label="Info" active={tab === "info"} onClick={() => setTab("info")} />

            {album.spotify && <Tab label="Spotify" active={tab === "spotify"} onClick={() => setTab("spotify")} />}

            <Tab label="YouTube" active={tab === "youtube"} onClick={() => setTab("youtube")} />
          </div>
        </div>

        {/* TAB CONTENT */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            {/* INFO */}
            {tab === "info" && (
              <motion.div key="info" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-white border border-pink-100 rounded-[2rem] p-10 shadow-sm">
                <h3 className="text-3xl font-bold text-gray-900">About This Album</h3>

                <p className="mt-6 text-gray-600 leading-relaxed">{album.title} represents one of TWICE’s memorable eras, combining signature visuals, evolving musical direction, and fan-favorite tracks into a complete experience.</p>

                <div className="mt-10 grid md:grid-cols-2 gap-6">
                  <ProfileItem label="Album" value={album.title} />

                  <ProfileItem label="Type" value={album.type} />

                  <ProfileItem label="Release" value={album.year} />

                  <ProfileItem label="Artist" value="TWICE" />
                </div>
              </motion.div>
            )}

            {/* SPOTIFY */}
            {tab === "spotify" && album.spotify && (
              <motion.div key="spotify" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-black/5 rounded-[2rem] p-4">
                <iframe src={album.spotify} width="100%" height="500" className="rounded-2xl" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" loading="lazy" />
              </motion.div>
            )}

            {/* YOUTUBE */}
            {tab === "youtube" && (
              <motion.div key="youtube" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                {album.youtube ? (
                  <div className="aspect-video overflow-hidden rounded-[2rem] shadow-xl">
                    <iframe src={album.youtube} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
                  </div>
                ) : (
                  <div className="bg-pink-50 rounded-[2rem] p-16 text-center">
                    <p className="text-gray-500">YouTube playlist belum tersedia</p>
                  </div>
                )}
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
function Tab({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all
      ${active ? "bg-pink-500 text-white shadow" : "text-pink-500 hover:bg-pink-200"}`}
    >
      {label}
    </motion.button>
  );
}
