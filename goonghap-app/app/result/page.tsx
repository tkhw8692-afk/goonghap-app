"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Result() {
  const [result, setResult] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("result");
    if (!data) {
      router.push("/");
      return;
    }
    setResult(JSON.parse(data));
  }, []);

  if (!result) return null;

  const { archetype } = result;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      <div className="max-w-lg w-full">

        <p className="text-gray-500 text-sm text-center mb-2 mt-8">당신의 어트랙션 아키타입</p>
        <h1 className="text-4xl font-bold text-center mb-2">{archetype.name}</h1>
        <p className="text-gray-400 text-center mb-12">{archetype.tagline}</p>

        <div className="border border-gray-800 rounded-2xl p-6 mb-6">
          <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-3">당신은 어떤 사람인가</h2>
          <p className="text-gray-200 leading-relaxed">{archetype.description}</p>
        </div>

        <div className="border border-gray-800 rounded-2xl p-6 mb-6">
          <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-3">당신이 끌리는 타입</h2>
          <p className="text-gray-200 leading-relaxed">{archetype.attracted_to}</p>
        </div>

        <div className="border border-gray-800 rounded-2xl p-6 mb-6">
          <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-3">당신에게 끌리는 타입</h2>
          <p className="text-gray-200 leading-relaxed">{archetype.attracted_by}</p>
        </div>

        <div className="border border-yellow-900 bg-yellow-950 rounded-2xl p-6 mb-6">
          <h2 className="text-xs text-yellow-500 uppercase tracking-widest mb-3">로맨틱 블라인드스팟</h2>
          <p className="text-yellow-100 leading-relaxed">{archetype.blind_spot}</p>
        </div>

        <div className="border border-gray-700 rounded-2xl p-6 mb-12 text-center">
          <p className="text-xl italic text-gray-300">"{archetype.pull_quote}"</p>
        </div>

        <button
          onClick={() => router.push("/")}
          className="w-full border border-gray-700 text-gray-400 py-3 rounded-full hover:border-gray-500 hover:text-gray-200 transition"
        >
          다시 분석하기
        </button>

      </div>
    </main>
  );
}