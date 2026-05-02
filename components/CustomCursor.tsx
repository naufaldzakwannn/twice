"use client";

import { useEffect, useState } from "react";

const TRAIL_LENGTH = 10;

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState(Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 })));

  const [image, setImage] = useState<string | null>(null);
  const [click, setClick] = useState(false);

  // mouse move
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const down = () => setClick(true);
    const up = () => setClick(false);

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
    };
  }, []);

  // smooth follow
  useEffect(() => {
    let frame: number;

    const follow = () => {
      setSmoothPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.15,
        y: prev.y + (pos.y - prev.y) * 0.15,
      }));

      frame = requestAnimationFrame(follow);
    };

    follow();
    return () => cancelAnimationFrame(frame);
  }, [pos]);

  // trail
  useEffect(() => {
    let frame: number;

    const animate = () => {
      setTrail((prev) => {
        const newTrail = [...prev];
        newTrail[0] = smoothPos;

        for (let i = 1; i < TRAIL_LENGTH; i++) {
          newTrail[i] = {
            x: newTrail[i].x + (newTrail[i - 1].x - newTrail[i].x) * 0.25,
            y: newTrail[i].y + (newTrail[i - 1].y - newTrail[i].y) * 0.25,
          };
        }

        return newTrail;
      });

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [smoothPos]);

  // album hover
  useEffect(() => {
    const items = document.querySelectorAll("[data-cursor-image]");

    const enter = (e: any) => {
      const img = e.currentTarget.getAttribute("data-cursor-image");
      setImage(img);
    };

    const leave = () => setImage(null);

    items.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      items.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      {/* TRAIL */}
      {trail.map((p, i) => {
        const scale = 1 - i * 0.06;
        const opacity = image ? 0 : 1 - i * 0.08;

        return (
          <div
            key={i}
            className="fixed top-0 left-0 pointer-events-none z-[9998] transition-opacity duration-300"
            style={{
              transform: `translate(${p.x}px, ${p.y}px) translate(-50%, -50%) scale(${scale})`,
              opacity,
            }}
          >
            <div className="w-3 h-3 rounded-full bg-pink-400 blur-[1px]" />
          </div>
        );
      })}

      {/* MAIN DOT */}
      {!image && (
        <div
          className="fixed top-0 left-0 z-[9999] pointer-events-none"
          style={{
            transform: `translate(${smoothPos.x}px, ${smoothPos.y}px) translate(-50%, -50%)`,
          }}
        >
          <div className={`w-2 h-2 bg-pink-500 rounded-full transition-all duration-150 ${click ? "scale-150" : "scale-100"} shadow-[0_0_12px_rgba(236,72,153,0.9)]`} />
        </div>
      )}

      {/* ALBUM PREVIEW */}
      {image && (
        <div
          className="fixed top-0 left-0 z-[9999] pointer-events-none transition-all duration-300"
          style={{
            transform: `translate(${smoothPos.x}px, ${smoothPos.y}px) translate(-50%, -50%)`,
          }}
        >
          <img src={image} className="w-24 h-24 object-cover rounded-xl shadow-xl" />
        </div>
      )}
    </>
  );
}
