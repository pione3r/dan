import { baseUrl } from "@/common/url";

import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const id = req.url.replace(`${baseUrl}/api/feed/`, "");

  const feed = await prisma.feed.findUnique({
    where: { id },
    include: {
      author: { select: { username: true } },
      comments: {
        select: {
          id: true,
          content: true,
          createdAt: true,
          author: { select: { username: true } },
        },
      },
    },
  });

  if (feed) {
    return new Response(
      JSON.stringify({
        id: feed.id,
        title: feed.title,
        content: feed.content,
        createdAt: feed.createdAt,
        author: feed.author.username,
        comments: feed.comments.map((comment) => ({
          ...comment,
          author: comment.author.username,
        })),
      }),
      { status: 200 }
    );
  }

  return new Response(JSON.stringify({ message: "중복 아이디 에러" }), {
    status: 400,
  });
}
