import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { pathname, searchParams } = new URL(req.url);
  const id = pathname.replace(`/api/feed/`, "");
  const username = searchParams.get("username") || "";

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
      likedBy: true,
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
        likes: feed.likedBy.length,
        isLike: feed.likedBy.find((user) => user.username === username)
          ? true
          : false,
      }),
      { status: 200 }
    );
  }

  return new Response(JSON.stringify({ message: "중복 아이디 에러" }), {
    status: 400,
  });
}

export async function DELETE(req: Request) {
  const { pathname } = new URL(req.url);
  const id = pathname.replace(`/api/feed/`, "");

  const deleteFeed = await prisma.feed.delete({
    where: { id },
  });

  if (deleteFeed) {
    return new Response(JSON.stringify({ message: "피드 삭제 성공" }), {
      status: 200,
    });
  }

  return new Response(JSON.stringify({ message: "피드 삭제 실패" }), {
    status: 400,
  });
}
