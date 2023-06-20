import { baseUrl } from "@/common/url";

import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const id = req.url.replace(`${baseUrl}/api/feed/`, "");

  const feed = await prisma.feed.findUnique({
    where: { id },
    include: { author: { select: { username: true } } },
  });

  if (feed) {
    return new Response(
      JSON.stringify({
        id: feed.id,
        title: feed.title,
        body: feed.body,
        createdAt: feed.createdAt,
        author: feed.author.username,
      }),
      { status: 200 }
    );
  }

  return new Response(JSON.stringify({ message: "중복 아이디 에러" }), {
    status: 400,
  });
}
