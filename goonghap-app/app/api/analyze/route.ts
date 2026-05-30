export const maxDuration = 60;
import Anthropic from "@anthropic-ai/sdk";
import { archetypes } from "@/lib/archetypes";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

function getMediaType(base64: string): "image/jpeg" | "image/png" | "image/webp" | "image/gif" {
  if (base64.startsWith("iVBORw0KGgo")) return "image/png";
  if (base64.startsWith("R0lGOD")) return "image/gif";
  if (base64.startsWith("UklGR")) return "image/webp";
  return "image/jpeg";
}

export async function POST(req: NextRequest) {
  const { images } = await req.json();

  const imageContent = images.map((base64: string) => ({
    type: "image" as const,
    source: {
      type: "base64" as const,
      media_type: getMediaType(base64),
      data: base64,
    },
  }));

  const archetypeList = archetypes.map(a => `- ${a.id}: ${a.name} (${a.tagline})`).join("\n");

  const response = await client.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 100,
    messages: [
      {
        role: "user",
        content: [
          ...imageContent,
          {
            type: "text",
            text: `이 Instagram 사진들을 보고 이 사람의 attraction archetype을 아래 12개 중에서 딱 하나만 골라줘.
사진의 색감, 분위기, 주제, 라이프스타일을 종합적으로 판단해.
반드시 아래 id 중 하나만 답해. 다른 말은 하지 마.

${archetypeList}

답변 형식: id만 (예: golden_hour)`,
          },
        ],
      },
    ],
  });

  const text = response.content[0].type === "text" ? response.content[0].text.trim() : "";
  const archetype = archetypes.find(a => a.id === text) ?? archetypes[0];

  console.log("selected archetype:", text);

  return NextResponse.json({ archetype });
}