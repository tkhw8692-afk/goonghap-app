"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const router = useRouter();

  const loadingMessages = [
    "색감 패턴을 읽는 중...",
    "미적 취향을 분석하는 중...",
    "끌리는 타입을 파악하는 중...",
    "감정 패턴을 매핑하는 중...",
    "거의 다 됐어요...",
  ];

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
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">
        당신의 인스타그램이<br />당신의 타입을 알고 있습니다
      </h1>
      <p className="text-gray-400 mb-12 text-center">
        스크린샷 6~9장을 올리면 AI가 분석해드립니다
      </p>

      {!loading ? (
        <>
          <label className="border-2 border-dashed border-gray-600 rounded-xl p-12 cursor-pointer hover:border-gray-400 transition mb-6 w-full max-w-lg text-center">
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files && handleFiles(e.target.files)}
            />
            {images.length === 0 ? (
              <div>
                <p className="text-2xl mb-2">📷</p>
                <p className="text-gray-400">여기를 클릭하거나 사진을 드래그하세요</p>
                <p className="text-gray-600 text-sm mt-2">JPG, PNG · 최소 6장, 최대 9장</p>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={`data:image/jpeg;base64,${img}`}
                    className="w-full h-24 object-cover rounded"
                    alt={`업로드 ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </label>

          <p className="text-gray-500 text-sm mb-6">
            {images.length === 0
              ? "아직 이미지가 없습니다"
              : images.length < 6
              ? `${6 - images.length}장 더 추가하세요`
              : `${images.length}장 선택됨 ✓`}
          </p>

          <button
            onClick={analyze}
            disabled={images.length < 6}
            className="bg-white text-black font-bold py-4 px-12 rounded-full text-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-200 transition"
          >
            분석하기 →
          </button>
        </>
      ) : (
        <div className="text-center">
          <div className="text-5xl mb-8 animate-pulse">✦</div>
          <p className="text-xl text-gray-300">{loadingText}</p>
        </div>
      )}
    </main>
  );
}