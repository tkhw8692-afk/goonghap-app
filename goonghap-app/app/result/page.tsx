"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Result() {
  const [result, setResult] = useState<any>(null);
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("result");
    if (!data) { router.push("/"); return; }
    setResult(JSON.parse(data));
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!result) return null;
  const { archetype } = result;

  return (
    <main
      className="min-h-screen text-white flex flex-col items-center p-8 relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at center, #1a1a2e 0%, #0d0d0d 100%)" }}
    >
      {/* 마우스 빛 */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(180,150,100,0.07), transparent 70%)`,
        }}
      />

      <div className="relative z-10 w-full max-w-lg py-16">

        {/* 헤더 */}
        <div
          className="text-center mb-16 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
        >
          <p className="text-xs tracking-[0.3em] text-amber-400/50 uppercase mb-6">당신의 어트랙션 아키타입</p>
          <h1 className="text-5xl font-light mb-3" style={{ fontFamily: "Georgia, serif" }}>
            {archetype.name}
          </h1>
          <div className="w-12 h-px bg-amber-400/30 mx-auto my-4" />
          <p className="text-gray-400 text-sm">{archetype.tagline}</p>
        </div>

        {/* 섹션들 */}
        {[
          { label: "당신은 어떤 사람인가", content: archetype.description, delay: 200 },
          { label: "당신이 끌리는 타입", content: archetype.attracted_to, delay: 400 },
          { label: "당신에게 끌리는 타입", content: archetype.attracted_by, delay: 600 },
        ].map((section, i) => (
          <div
            key={i}
            className="mb-4 rounded-2xl p-6 transition-all duration-1000 border border-white/5"
            style={{
              background: "rgba(255,255,255,0.02)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${section.delay}ms`,
            }}
          >
            <p className="text-xs tracking-widest text-amber-400/40 uppercase mb-3">{section.label}</p>
            <p className="text-gray-300 leading-relaxed text-sm">{section.content}</p>
          </div>
        ))}

        {/* 블라인드스팟 */}
        <div
          className="mb-8 rounded-2xl p-6 transition-all duration-1000 border border-amber-400/10"
          style={{
            background: "rgba(196,168,130,0.05)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "800ms",
          }}
        >
          <p className="text-xs tracking-widest text-amber-400/60 uppercase mb-3">로맨틱 블라인드스팟</p>
          <p className="text-amber-100/70 leading-relaxed text-sm">{archetype.blind_spot}</p>
        </div>

        {/* 풀쿼트 */}
        <div
          className="mb-12 text-center px-4 transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transitionDelay: "1000ms",
          }}
        >
          <p className="text-xl font-light italic text-gray-300 leading-relaxed"
            style={{ fontFamily: "Georgia, serif" }}>
            "{archetype.pull_quote}"
          </p>
        </div>

        {/* 버튼 */}
        <button
          onClick={() => router.push("/")}
          className="w-full py-3 rounded-full text-xs tracking-widest uppercase text-gray-500 border border-gray-800 hover:border-gray-600 hover:text-gray-300 transition-all duration-300"
        >
          다시 분석하기
        </button>

      </div>
    </main>
  );
}