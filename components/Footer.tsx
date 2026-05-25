"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState(0);

  const albums = [
    {
      title: "With YOU-th",
      image: "/albums/with-you-th.webp",
      year: "2024",
    },
    {
      title: "Ready To Be",
      image: "/albums/ready-to-be.webp",
      year: "2023",
    },
    {
      title: "Between 1&2",
      image: "/albums/between-1-2.webp",
      year: "2022",
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
      } catch (error) {
        console.error(error);
      }
    }
  };

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
    <footer className="relative overflow-hidden pt-24">
      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src="/music/MARS.mp3" type="audio/mp3" />
      </audio>

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200 animate-gradient" />

      {/* GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-pink-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-14 md:grid-cols-3">
          {/* BRAND */}
          <div>
            <h2 className="text-4xl font-black tracking-tight text-pink-500">TWICE</h2>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600">A fan-made experience celebrating music, visuals, and the iconic journey of TWICE.</p>

            {/* PLAYER */}
            <div className="mt-8">
              <button onClick={toggleMusic} className="group flex items-center gap-4 rounded-full border border-white/50 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.03]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white">{playing ? "❚❚" : "▶"}</div>

                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Now Playing</span>

                  <span className="text-sm font-semibold text-gray-700">MARS</span>
                </div>

                <div className="ml-2 flex h-5 items-end gap-[3px]">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-[3px] rounded-full bg-pink-400 ${playing ? "animate-wave" : "h-2"}`}
                      style={{
                        animationDelay: `${i * 0.12}s`,
                      }}
                    />
                  ))}
                </div>
              </button>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gray-800">Explore</h3>

            <div className="flex flex-col gap-4 text-sm text-gray-600">
              <Link href="/members" className="transition duration-300 hover:translate-x-1 hover:text-pink-500">
                Members
              </Link>

              <Link href="/discography" className="transition duration-300 hover:translate-x-1 hover:text-pink-500">
                Discography
              </Link>

              <Link href="/about" className="transition duration-300 hover:translate-x-1 hover:text-pink-500">
                About
              </Link>
            </div>
          </div>

          {/* ALBUMS */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gray-800">Latest Releases</h3>

            <div className="flex gap-4">
              {albums.map((album, index) => (
                <button
                  key={album.title}
                  onMouseEnter={() => setActiveAlbum(index)}
                  className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 ${activeAlbum === index ? "scale-105 border-pink-300 shadow-2xl" : "border-white/40 opacity-80 hover:opacity-100"}`}
                >
                  <img src={album.image} alt={album.title} className="h-32 w-24 object-cover transition duration-700 group-hover:scale-110" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-3 left-3">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/70">{album.year}</p>

                    <h4 className="mt-1 text-xs font-semibold text-white">{album.title}</h4>
                  </div>
                </button>
              ))}
            </div>

            {/* PREVIEW */}
            <div className="relative mt-8 overflow-hidden rounded-[2rem] shadow-2xl">
              <img src={albums[activeAlbum].image} alt={albums[activeAlbum].title} className="h-56 w-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Highlighted Era</p>

                <h3 className="mt-2 text-2xl font-bold text-white">{albums[activeAlbum].title}</h3>

                <p className="mt-1 text-sm text-white/80">TWICE • {albums[activeAlbum].year}</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 border-t border-pink-200/70 pt-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} TWICE Fan Web. Not affiliated with JYP Entertainment.</div>
      </div>

      <style jsx>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 10s linear infinite;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0%;
          }

          100% {
            background-position: 200%;
          }
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
