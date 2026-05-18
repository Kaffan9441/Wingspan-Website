"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Autoplay muted MP4 hero with `is-intro-complete` state (Platoon pattern).
 * Plays once on landing. When the video ends, sets `complete=true` so the headline
 * overlay can fade up. Until then, the headline is hidden.
 *
 * If the video can't load (offline, src missing), it falls back to a still poster.
 * For now we render a Gemini-generated still placeholder via the `poster` prop until
 * the actual MP4 is generated.
 */
export function HeroIntroVideo({
  src,
  poster,
  children,
  onComplete,
  className = "",
}: {
  src?: string;
  poster?: string;
  children?: (state: { complete: boolean }) => React.ReactNode;
  onComplete?: () => void;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) {
      // No video element — assume immediate completion so the headline reveals
      setComplete(true);
      onComplete?.();
      return;
    }
    if (!src) {
      // No video — give the poster a beat to fade in, then reveal the headline.
      const id = setTimeout(() => {
        setComplete(true);
        onComplete?.();
      }, 350);
      return () => clearTimeout(id);
    }

    const onEnd = () => {
      setComplete(true);
      onComplete?.();
    };

    v.addEventListener("ended", onEnd);
    v.play().catch(() => {
      setComplete(true);
      onComplete?.();
    });
    return () => v.removeEventListener("ended", onEnd);
  }, [src, onComplete]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {src ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          playsInline
          autoPlay
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : poster ? (
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
        />
      ) : (
        // Final fallback — a warm charcoal field with a hairline horizon
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
      )}
      {/* Bottom-left scrim — anchors the headline area against any underlying image. */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/35 to-transparent pointer-events-none" />
      {/* Subtle bottom edge darkening to ground the floor. */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />
      {children?.({ complete })}
    </div>
  );
}
