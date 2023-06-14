import { prisma } from "@/lib/prisma";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function POST(request: Request) {
  const req = await request.json();
  const newFeed = await req;

  const session = await getServerSession(authOptions);

  const user = await prisma.user.findUnique({
    where: { username: session?.user.username },
  });

  const feed = await prisma.feed.create({
    data: {
      title: newFeed.title,
      body: newFeed.body,
      authorId: user?.id!,
    },
  });

  if (feed) {
    return new Response(JSON.stringify({ message: "피드가 생성되었습니다." }), {
      status: 201,
    });
  }

  return new Response(JSON.stringify({ message: "중복 아이디 에러" }), {
    status: 401,
  });
}
