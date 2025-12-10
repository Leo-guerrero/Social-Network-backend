// backend/src/searchIndex.ts
import elasticlunr from "elasticlunr";
// 🔧 Use the same Prisma import path as in index.ts:
import { PrismaClient } from "../generated/prisma";

type Doc = {
  id: string;
  body: string;
};

// in-memory index
let searchIndex: any | null = null;

export async function buildSearchIndex(prisma: PrismaClient) {
  const posts = await prisma.posts.findMany({
    select: {
      id: true,
      text: true,
      // 🔁 optional: only index root posts (ignore replies)
      // parentId: true,
    },
    // where: { parentId: null }, // uncomment if you do NOT want replies in search
  });

  // Explicit type for `p` so TS is happy
  const docs: Doc[] = posts.map((p: { id: number; text: string | null }) => ({
    id: String(p.id),
    body: p.text ?? "",
  }));

  const idx = elasticlunr(function (this: any) {
    this.setRef("id");
    this.addField("body");

    docs.forEach((doc) => this.addDoc(doc));
  });

  searchIndex = idx;
  console.log("Search index built with", docs.length, "posts");
}

export function getSearchIndex() {
  if (!searchIndex) {
    throw new Error("Search index not built yet");
  }
  return searchIndex;
}
