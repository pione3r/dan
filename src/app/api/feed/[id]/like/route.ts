import { baseUrl } from "@/common/url";

import { prisma } from "@/lib/prisma";

import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  const feedId = req.url
    .replace(`${baseUrl}/api/feed/`, "")
    .replace("/like", "");

  const session = await getServerSession(authOptions);

  const user = await prisma.user.findUnique({
    where: { username: session?.user.username },
    include: { likes: true },
  });

  const userLikeFeedIds = user?.likes.map((feed) => feed.id);

  if (!user)
    return new Response(JSON.stringify({ message: "좋아요 수정 실패" }), {
      status: 401,
    });

  if (!userLikeFeedIds?.includes(feedId)) {
    await prisma.feed.update({
      where: { id: feedId },
      data: { likedBy: { connect: { id: user?.id } } },
    });

    return new Response(JSON.stringify({ message: "좋아요 등록 성공" }), {
      status: 201,
    });
  } else {
    await prisma.feed.update({
      where: { id: feedId },
      data: { likedBy: { disconnect: { id: user?.id } } },
    });

    return new Response(JSON.stringify({ message: "좋아요 해제 성공" }), {
      status: 201,
    });
  }
}
