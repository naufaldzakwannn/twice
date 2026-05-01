"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setHover(true);
    const handleLeave = () => setHover(false);

    document.addEventListener("mousemove", move);

    const links = document.querySelectorAll("a, button");
    links.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      {/* INNER DOT */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
        }}
      >
        <div className={`w-2 h-2 rounded-full bg-pink-500 transition-transform duration-150 ${hover ? "scale-150" : "scale-100"}`} />
      </div>

      {/* OUTER RING */}
      <div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border border-pink-400 transition-all duration-300 ease-out ${hover ? "scale-150 opacity-70" : "scale-100 opacity-40"}`}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </>
  );
}
