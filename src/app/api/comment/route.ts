import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const req = await request.json();
  const { feedId, content } = await req;

  const session = await getServerSession(authOptions);

  const user = await prisma.user.findUnique({
    where: { username: session?.user.username },
  });

  const comment = await prisma.comment.create({
    data: {
      content,
      feedId,
      authorId: user?.id!,
    },
  });

  if (comment) {
    return new Response(JSON.stringify({ message: "피드가 생성되었습니다." }), {
      status: 201,
    });
  }

  return new Response(JSON.stringify({ message: "댓글 생성 실패" }), {
    status: 401,
  });
}
