"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const router = useRouter();

  const loadingMessages = [
    "색감 패턴을 읽는 중...",
    "미적 취향을 분석하는 중...",
    "끌리는 타입을 파악하는 중...",
    "감정 패턴을 매핑하는 중...",
    "거의 다 됐어요...",
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleFiles = async (files: FileList) => {
    const fileArray = Array.from(files).slice(0, 9);
    const base64Array = await Promise.all(fileArray.map(toBase64));
    setImages(base64Array);
  };

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      const img = new Image();
      img.onload = () => {
        const maxSize = 800;
        let w = img.width;
        let h = img.height;
        if (w > maxSize || h > maxSize) {
          if (w > h) { h = (h / w) * maxSize; w = maxSize; }
          else { w = (w / h) * maxSize; h = maxSize; }
        }
        canvas.width = w;
        canvas.height = h;
        ctx.drawImage(img, 0, 0, w, h);
        const result = canvas.toDataURL("image/jpeg", 0.7);
        resolve(result.split(",")[1]);
      };
      img.src = URL.createObjectURL(file);
    });

  const analyze = async () => {
    setLoading(true);
    let i = 0;
    setLoadingText(loadingMessages[0]);
    const interval = setInterval(() => {
      i = (i + 1) % loadingMessages.length;
      setLoadingText(loadingMessages[i]);
    }, 3000);

    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ images }),
    });

    clearInterval(interval);
    const data = await res.json();
    localStorage.setItem("result", JSON.stringify(data));
    router.push("/result");
  };

  return (
    <main
      className="min-h-screen text-white flex flex-col items-center justify-center p-8 relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at center, #1a1a2e 0%, #0d0d0d 100%)" }}
    >
      {/* 마우스 따라다니는 빛 */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(180,150,100,0.07), transparent 70%)`,
        }}
      />

      {/* 배경 장식 */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #c4a882, transparent)" }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #8b6e5a, transparent)" }} />

      <div className="relative z-10 w-full max-w-lg">
        {!loading ? (
          <>
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] text-amber-400/60 uppercase mb-4">Attraction Analysis</p>
              <h1 className="text-4xl font-light mb-3 leading-tight"
                style={{ fontFamily: "Georgia, serif" }}>
                당신의 인스타그램이<br />
                <span className="italic text-amber-200/80">당신의 타입을</span><br />
                알고 있습니다
              </h1>
              <p className="text-gray-500 text-sm mt-4">
                스크린샷 6~9장을 올리면 AI가 분석해드립니다
              </p>
            </div>

            <label className="block cursor-pointer group">
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={(e) => e.target.files && handleFiles(e.target.files)}
              />
              <div className="border border-gray-700 group-hover:border-amber-400/40 rounded-2xl p-8 transition-all duration-500 text-center"
                style={{ background: "rgba(255,255,255,0.02)" }}>
                {images.length === 0 ? (
                  <div>
                    <p className="text-3xl mb-3 opacity-40">✦</p>
                    <p className="text-gray-400 text-sm">여기를 클릭하거나 사진을 드래그하세요</p>
                    <p className="text-gray-600 text-xs mt-2">JPG, PNG · 최소 6장, 최대 9장</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2">
                    {images.map((img, i) => (
                      <div key={i}
                        className="relative overflow-hidden rounded-lg"
                        style={{
                          animation: `fadeUp 0.4s ease ${i * 0.05}s both`,
                        }}>
                        <img
                          src={`data:image/jpeg;base64,${img}`}
                          className="w-full h-24 object-cover"
                          alt={`업로드 ${i + 1}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </label>

            <p className="text-center text-gray-600 text-xs mt-3 mb-6">
              {images.length === 0
                ? ""
                : images.length < 6
                ? `${6 - images.length}장 더 추가하세요`
                : `${images.length}장 선택됨`}
            </p>

            <button
              onClick={analyze}
              disabled={images.length < 6}
              className="w-full py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-500 disabled:opacity-20 disabled:cursor-not-allowed"
              style={{
                background: images.length >= 6
                  ? "linear-gradient(135deg, #c4a882, #8b6e5a)"
                  : "rgba(255,255,255,0.05)",
                color: images.length >= 6 ? "#1a1a1a" : "#666",
                fontWeight: 600,
              }}
            >
              분석하기
            </button>
          </>
        ) : (
          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full border border-amber-400/20 animate-ping" />
              <div className="absolute inset-2 rounded-full border border-amber-400/40 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-amber-400/10" />
            </div>
            <p className="text-gray-400 text-sm tracking-widest">{loadingText}</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}