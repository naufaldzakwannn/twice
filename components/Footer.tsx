"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [playing, setPlaying] = useState(false);

  const albums = [
    {
      title: "With YOU-th",
      image: "/albums/with-you-th.webp",
    },
    {
      title: "Ready To Be",
      image: "/albums/ready-to-be.webp",
    },
    {
      title: "Between 1&2",
      image: "/albums/between-1-2.webp",
    },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200 animate-[gradientMove_10s_linear_infinite]" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* BRAND + MUSIC */}
          <div>
            <h2 className="text-3xl font-bold text-pink-500">TWICE</h2>

            <p className="mt-3 text-gray-600 text-sm max-w-sm">A fan-made space celebrating music, visuals, and the journey of TWICE.</p>

            {/* NOW PLAYING */}
            <div className="mt-5">
              <button onClick={() => setPlaying(!playing)} className="flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow hover:shadow-md transition">
                <span className="text-pink-500 text-sm font-medium">{playing ? "Pause" : "Play"}</span>

                <div className="flex gap-[2px]">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className={`w-[3px] h-4 bg-pink-400 rounded transition-all ${playing ? "animate-[wave_1s_infinite]" : ""}`} style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              </button>

              <p className="text-xs text-gray-500 mt-2">Now Playing: Feel Special</p>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Explore</h3>

            <div className="flex flex-col gap-3 text-gray-600 text-sm">
              <Link href="/members" className="hover:text-pink-500 transition">
                Members
              </Link>
              <Link href="/discography" className="hover:text-pink-500 transition">
                Discography
              </Link>
              <Link href="/" className="hover:text-pink-500 transition">
                Home
              </Link>
            </div>
          </div>

          {/* MINI ALBUM PREVIEW */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Latest Releases</h3>

            <div className="flex gap-4">
              {albums.map((album, i) => (
                <div key={i} data-cursor-image={album.image} className="relative group cursor-none">
                  <img src={album.image} className="w-16 h-16 object-cover rounded-lg shadow transition-transform duration-300 group-hover:scale-110" />

                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 rounded-lg flex items-center justify-center text-white text-xs transition">VIEW</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-pink-200 mt-12 pt-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} TWICE Fan Web. Not affiliated with JYP Entertainment.</div>
      </div>

      {/* CUSTOM ANIMATION */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0%;
          }
          100% {
            background-position: 200%;
          }
        }

        .animate-\[gradientMove_10s_linear_infinite\] {
          background-size: 200% 200%;
        }

        @keyframes wave {
          0%,
          100% {
            transform: scaleY(0.4);
          }
          50% {
            transform: scaleY(1);
          }
        }
      `}</style>
    </footer>
  );
}
