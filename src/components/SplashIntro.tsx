"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

const SESSION_KEY = "leeLeeSplashSeen";
const FADE_DURATION = 600;

export default function SplashIntro() {
  const [visible, setVisible] = useState<boolean | null>(null);
  const [fading, setFading] = useState(false);
  const prefersReduced = usePrefersReducedMotion();
  const dismissedRef = useRef(false);

  // Determine initial visibility from sessionStorage (client only)
  useEffect(() => {
    const seen = sessionStorage.getItem(SESSION_KEY) === "true";
    setVisible(!seen);

    if (!seen) {
      document.body.style.overflow = "hidden";
    }
  }, []);

  const dismiss = useCallback(() => {
    if (dismissedRef.current) return;
    dismissedRef.current = true;

    sessionStorage.setItem(SESSION_KEY, "true");

    if (prefersReduced) {
      // Skip animation for reduced motion preference
      setVisible(false);
      document.body.style.overflow = "";
    } else {
      setFading(true);
      setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
      }, FADE_DURATION);
    }
  }, [prefersReduced]);

  // Attach motion-detection listeners
  useEffect(() => {
    if (visible !== true) return;

    const events: (keyof WindowEventMap)[] = [
      "mousemove",
      "wheel",
      "scroll",
      "touchstart",
      "keydown",
    ];

    events.forEach((evt) => window.addEventListener(evt, dismiss, { once: true, passive: true }));

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, dismiss));
    };
  }, [visible, dismiss]);

  // Cleanup overflow on unmount (safety)
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Not yet determined, or already dismissed
  if (visible !== true) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all ${
        fading
          ? "opacity-0 scale-[0.97]"
          : "opacity-100 scale-100"
      }`}
      style={{
        background: "linear-gradient(180deg, #F7F1EE 0%, #E8CFC8 100%)",
        transitionDuration: `${FADE_DURATION}ms`,
        transitionTimingFunction: "ease-out",
      }}
      role="dialog"
      aria-label="Lee Lee's Lashes – Welcome"
      aria-modal="true"
    >
      {/* Soft vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(232,207,200,0.5) 100%)",
        }}
      />

      {/* Logo */}
      <div className="relative w-[80vw] max-w-[680px] min-w-[280px] aspect-[3/2] flex items-center justify-center">
        <Image
          src="/brand/lee-lees-lashes-logo.png"
          alt="Lee Lee's Lashes"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 80vw, 680px"
        />
      </div>

      {/* Tagline */}
      <p
        className="mt-6 text-sm md:text-base font-sans font-medium tracking-[0.3em] uppercase"
        style={{ color: "#C8A46A" }}
      >
        Signature Lash Artistry
      </p>

      {/* Subtle prompt */}
      <p className="absolute bottom-10 text-xs font-sans text-brown/40 tracking-wide animate-pulse">
        Move to enter
      </p>
    </div>
  );
}
