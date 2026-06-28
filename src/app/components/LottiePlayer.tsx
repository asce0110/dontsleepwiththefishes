"use client";

import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface Props {
  path: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function LottiePlayer({ path, loop = true, autoplay = true, className, style }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const anim = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!container.current) return;
    anim.current = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop,
      autoplay,
      path,
    });
    return () => { anim.current?.destroy(); };
  }, [path, loop, autoplay]);

  return <div ref={container} className={className} style={style} />;
}
