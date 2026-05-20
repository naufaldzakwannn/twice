"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);

      if (scrollTop > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        backdrop-blur-md
        bg-white/80
        shadow-xl
        border border-pink-100
        flex items-center justify-center
        transition-all duration-300
        hover:scale-110
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
      `}
    >
      {/* Progress Ring */}
      <svg className="absolute inset-0 -rotate-90" width="56" height="56">
        <circle cx="28" cy="28" r="24" stroke="#fbcfe8" strokeWidth="3" fill="none" />

        <circle cx="28" cy="28" r="24" stroke="#ec4899" strokeWidth="3" fill="none" strokeDasharray={150} strokeDashoffset={150 - (150 * scrollProgress) / 100} strokeLinecap="round" />
      </svg>

      <ChevronUp className="w-5 h-5 text-pink-500 relative z-10" />
    </button>
  );
}
