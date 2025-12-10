// backend/src/searchIndex.ts
import elasticlunr from "elasticlunr";
import { PrismaClient } from "../generated/prisma";

type Doc = {
  id: string;
  body: string;
};

let searchIndex: any | null = null;

export async function buildSearchIndex(prisma: PrismaClient) {
  const posts = await prisma.posts.findMany({
    select: {
      id: true,
      text: true,
      parentId: true, // if you want to filter replies later
    },
    // If you only want root posts in search:
    // where: { parentId: null },
  });

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

/* 🔹 NEW: add a post to the index when created */
export function addPostToIndex(post: { id: number; text: string | null }) {
  if (!searchIndex) return; // index not ready yet

  const body = post.text ?? "";
  (searchIndex as any).addDoc({
    id: String(post.id),
    body,
  });
}

/* 🔹 NEW: update a post in the index when edited */
export function updatePostInIndex(post: { id: number; text: string | null }) {
  if (!searchIndex) return;

  const body = post.text ?? "";
  (searchIndex as any).updateDoc({
    id: String(post.id),
    body,
  });
}

/* 🔹 NEW: remove a post from the index when deleted */
export function removePostFromIndex(postId: number) {
  if (!searchIndex) return;

  (searchIndex as any).removeDoc({
    id: String(postId),
    body: "", // not used, but required by elasticlunr
  });
}
