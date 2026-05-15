"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function Footer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
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

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (err) {
        console.error("Audio play failed:", err);
      }
    }
  };

  // auto update state when music ends
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleEnded = () => {
      setPlaying(false);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <footer className="relative pt-24 overflow-hidden">
      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src="/music/MARS.mp3" type="audio/mp3" />
      </audio>

      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200 animate-[gradientMove_10s_linear_infinite]" />

      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-300/30 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* BRAND + MUSIC */}
          <div>
            <h2 className="text-3xl font-bold text-pink-500 tracking-tight">TWICE</h2>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed max-w-sm">A fan-made space celebrating music, visuals, and the journey of TWICE.</p>

            {/* NOW PLAYING */}
            <div className="mt-6">
              <button onClick={toggleMusic} className="group flex items-center gap-4 px-5 py-3 rounded-full bg-white/90 backdrop-blur shadow-lg hover:shadow-pink-200 transition-all duration-300 hover:scale-[1.03]">
                {/* PLAY ICON */}
                <div className="w-9 h-9 rounded-full bg-pink-500 flex items-center justify-center text-white text-sm">{playing ? "❚❚" : "▶"}</div>

                {/* TEXT */}
                <div className="flex flex-col items-start">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Now Playing</span>

                  <span className="text-sm font-medium text-gray-700">MARS</span>
                </div>

                {/* WAVES */}
                <div className="flex items-end gap-[3px] ml-2 h-5">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-[3px] bg-pink-400 rounded-full transition-all duration-300 ${playing ? "animate-wave" : "h-2"}`}
                      style={{
                        animationDelay: `${i * 0.12}s`,
                      }}
                    />
                  ))}
                </div>
              </button>

              <p className="text-xs text-gray-500 mt-3">Click to {playing ? "pause" : "play"} music</p>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-5 text-lg">Explore</h3>

            <div className="flex flex-col gap-4 text-gray-600 text-sm">
              <Link href="/members" className="hover:text-pink-500 transition hover:translate-x-1 duration-300">
                Members
              </Link>

              <Link href="/discography" className="hover:text-pink-500 transition hover:translate-x-1 duration-300">
                Discography
              </Link>

              <Link href="/" className="hover:text-pink-500 transition hover:translate-x-1 duration-300">
                Home
              </Link>
            </div>
          </div>

          {/* MINI ALBUM PREVIEW */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-5 text-lg">Latest Releases</h3>

            <div className="flex gap-4">
              {albums.map((album, i) => (
                <div key={i} data-cursor-image={album.image} className="relative group cursor-none">
                  <img src={album.image} alt={album.title} className="w-20 h-20 object-cover rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1" />

                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 rounded-2xl flex flex-col items-center justify-center text-white text-[10px] tracking-wider transition duration-300">
                    <span>VIEW</span>
                    <span className="mt-1 font-medium">{album.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-pink-200/70 mt-14 pt-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} TWICE Fan Web. Not affiliated with JYP Entertainment.</div>
      </div>

      {/* CUSTOM STYLES */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0%;
          }
          100% {
            background-position: 200%;
          }
        }

        .animate-\\[gradientMove_10s_linear_infinite\\] {
          background-size: 200% 200%;
        }

        @keyframes wave {
          0%,
          100% {
            height: 8px;
          }
          50% {
            height: 22px;
          }
        }

        .animate-wave {
          animation: wave 1s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
