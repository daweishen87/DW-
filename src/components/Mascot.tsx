"use client";
import { useEffect, useRef, useState } from "react";

export type Pose = "press" | "curl" | "squash";
const INK = "#121212";

function Limb({ d }: { d: string }) {
  return (
    <>
      <path d={d} stroke={INK} strokeWidth={17} strokeLinecap="round" fill="none" />
      <path d={d} stroke="#fff" strokeWidth={9} strokeLinecap="round" fill="none" />
    </>
  );
}

function Bar({ y }: { y: number }) {
  return (
    <>
      <line x1={22} x2={178} y1={y} y2={y} stroke={INK} strokeWidth={6} strokeLinecap="round" />
      <rect x={10} y={y - 20} width={11} height={40} rx={4} fill={INK} />
      <rect x={179} y={y - 20} width={11} height={40} rx={4} fill={INK} />
    </>
  );
}

export function Mascot({ pose, size = 160, label }: { pose: Pose; size?: number; label?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [seen, setSeen] = useState(false);
  const [run, setRun] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const shape = { fill: "#fff", stroke: INK, strokeWidth: 4 } as const;

  return (
    <button ref={ref} type="button" className="mc-btn" onClick={() => setRun((r) => r + 1)} aria-label={label ?? "DW 小人，點一下再看一次"}>
      <svg key={`${pose}-${run}`} className={`mc mc-${pose}${seen ? " go" : ""}`} viewBox="0 0 200 200" width={size} height={size} aria-hidden="true">
        {pose === "curl" && (
          <>
            <Limb d="M64 116 L50 152" />
            <Limb d="M136 116 L152 144" />
          </>
        )}
        <g className="bd">
          <rect x={72} y={158} width={22} height={26} rx={11} {...shape} />
          <rect x={106} y={158} width={22} height={26} rx={11} {...shape} />
          <ellipse cx={100} cy={128} rx={42} ry={36} {...shape} />
          <circle cx={100} cy={72} r={36} {...shape} />
          <circle cx={88} cy={70} r={3.5} fill={INK} />
          <circle cx={112} cy={70} r={3.5} fill={INK} />
          <path d="M92 82 Q100 90 108 82" stroke={INK} strokeWidth={3.5} strokeLinecap="round" fill="none" />
        </g>
        {pose === "press" && (
          <g className="lift">
            <Limb d="M64 112 L48 56" />
            <Limb d="M136 112 L152 56" />
            <Bar y={44} />
          </g>
        )}
        {pose === "squash" && (
          <g className="drop">
            <Limb d="M48 34 L60 100" />
            <Limb d="M152 34 L140 100" />
            <Bar y={30} />
          </g>
        )}
        {pose === "curl" && (
          <g className="fore">
            <Limb d="M152 144 L158 176" />
            <line x1={146} x2={170} y1={178} y2={178} stroke={INK} strokeWidth={6} strokeLinecap="round" />
            <rect x={141} y={168} width={7} height={20} rx={3} fill={INK} />
            <rect x={169} y={168} width={7} height={20} rx={3} fill={INK} />
          </g>
        )}
      </svg>
    </button>
  );
}
