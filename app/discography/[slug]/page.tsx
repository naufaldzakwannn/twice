"use client";

import { discography } from "@/data/discography";
import Image from "next/image";
import { useState, use } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AlbumDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  const albums = discography.flatMap((d) => d.albums);
  const album = albums.find((a) => a.slug === slug);

  const [tab, setTab] = useState<"info" | "spotify" | "youtube">("info");

  if (!album) {
    return <p className="p-10 text-center">Album not found</p>;
  }

  return (
    <section className="p-6 md:p-10 max-w-5xl mx-auto">
      {/* HEADER */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <Image src={album.image} alt={album.title} width={300} height={300} className="mx-auto rounded-xl shadow" priority />
        </motion.div>

        <h1 className="mt-6 text-4xl font-bold">{album.title}</h1>
        <p className="text-gray-500 mt-2">
          {album.type} • {album.year}
        </p>
      </motion.div>

      {/* TABS */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-10 flex justify-center gap-4">
        <Tab label="Info" active={tab === "info"} onClick={() => setTab("info")} />
        <Tab label="Spotify" active={tab === "spotify"} onClick={() => setTab("spotify")} />
        <Tab label="YouTube" active={tab === "youtube"} onClick={() => album.youtube && setTab("youtube")} />
      </motion.div>

      {/* CONTENT */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {tab === "info" && (
            <motion.div key="info" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }} className="text-center text-gray-600 space-y-2">
              <p>
                <b>Album:</b> {album.title}
              </p>
              <p>
                <b>Type:</b> {album.type}
              </p>
              <p>
                <b>Release:</b> {album.year}
              </p>
            </motion.div>
          )}

          {tab === "spotify" && album.spotify && (
            <motion.div key="spotify" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }}>
              <iframe src={album.spotify} width="100%" height="380" className="rounded-xl" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" loading="lazy" />
            </motion.div>
          )}

          {tab === "youtube" && (
            <motion.div key="youtube" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }}>
              {album.youtube ? (
                <div className="aspect-video">
                  <iframe src={album.youtube} className="w-full h-full rounded-xl" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
                </div>
              ) : (
                <p className="text-center text-gray-500">YouTube playlist belum tersedia</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* TAB BUTTON */
function Tab({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-2 rounded-full transition
        ${active ? "bg-pink-500 text-white shadow" : "bg-pink-100 text-pink-600 hover:bg-pink-200"}`}
    >
      {label}
    </motion.button>
  );
}
