export const maxDuration = 60;
import Anthropic from "@anthropic-ai/sdk";
import { calculateArchetype } from "@/lib/archetypes";
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

  const response = await client.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: [
          ...imageContent,
          {
            type: "text",
            text: `이 Instagram 스크린샷들을 분석해서 아래 JSON 형식으로만 답해줘. 다른 말은 하지 마.

{
  "color_temperature": "CT_WARM 또는 CT_COOL 또는 CT_NEUTRAL 또는 CT_MIXED 또는 CT_HIGH_CON",
  "subject_matter": ["SM_NATURE_WILD, SM_NATURE_DOMESTIC, SM_PEOPLE_SOCIAL, SM_PEOPLE_INTIMATE, SM_SELF, SM_OBJECTS, SM_FOOD, SM_ARCHITECTURE, SM_TEXT, SM_MOVEMENT, SM_PROCESS 중 해당하는 것들"],
  "curation_level": "CL_HIGH 또는 CL_MEDIUM 또는 CL_LOW 또는 CL_DOCUMENTARY 또는 CL_EXPRESSIVE",
  "selfie_frequency": "SF_HIGH_POSED 또는 SF_HIGH_CANDID 또는 SF_MEDIUM 또는 SF_LOW_PRESENT 또는 SF_ABSENT 또는 SF_PORTRAIT_STYLE",
  "lifestyle_signals": ["LS_OUTDOOR_EXTREME, LS_OUTDOOR_CASUAL, LS_URBAN_SOCIAL, LS_DOMESTIC, LS_INTELLECTUAL, LS_CREATIVE, LS_FITNESS, LS_TRAVEL, LS_COMMUNITY 중 해당하는 것들"],
  "emotional_register": "ER_OPTIMISTIC 또는 ER_CONTEMPLATIVE 또는 ER_ENERGETIC 또는 ER_MELANCHOLIC 또는 ER_WIDE_RANGE 또는 ER_IRONIC 또는 ER_EARNEST 또는 ER_RESTRAINED"
}`,
          },
        ],
      },
    ],
  });

  const text = response.content[0].type === "text" ? response.content[0].text : "";
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  const signals = JSON.parse(jsonMatch![0]);
  const archetype = calculateArchetype(signals);

  return NextResponse.json({ archetype, signals });
}