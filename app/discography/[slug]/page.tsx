"use client";

import { discography } from "@/data/discography";
import Image from "next/image";
import { useState, use } from "react";

export default function AlbumDetail({ params }: { params: Promise<{ slug: string }> }) {
  // ✅ UNWRAP PARAMS
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
      <div className="text-center">
        <Image src={album.image} alt={album.title} width={300} height={300} className="mx-auto rounded-xl shadow" />
        <h1 className="mt-6 text-4xl font-bold">{album.title}</h1>
        <p className="text-gray-500 mt-2">
          {album.type} • {album.year}
        </p>
      </div>

      {/* TABS */}
      <div className="mt-10 flex justify-center gap-4">
        <Tab label="Info" active={tab === "info"} onClick={() => setTab("info")} />
        <Tab label="Spotify" active={tab === "spotify"} onClick={() => setTab("spotify")} />
        <Tab label="YouTube" active={tab === "youtube"} onClick={() => setTab("youtube")} />
      </div>

      {/* CONTENT */}
      <div className="mt-8">
        {tab === "info" && (
          <div className="text-center text-gray-600 space-y-2">
            <p>
              <b>Album:</b> {album.title}
            </p>
            <p>
              <b>Type:</b> {album.type}
            </p>
            <p>
              <b>Release:</b> {album.year}
            </p>
          </div>
        )}

        {tab === "spotify" && album.spotify && <iframe src={album.spotify} width="100%" height="380" className="rounded-xl" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" loading="lazy" />}

        {tab === "youtube" && album.youtube && (
          <div className="aspect-video">
            <iframe src={album.youtube} className="w-full h-full rounded-xl" allowFullScreen />
          </div>
        )}
      </div>
    </section>
  );
}

/* TAB BUTTON */
function Tab({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full transition
        ${active ? "bg-pink-500 text-white shadow" : "bg-pink-100 text-pink-600 hover:bg-pink-200"}`}
    >
      {label}
    </button>
  );
}
