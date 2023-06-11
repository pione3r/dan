import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const req = await request.json();
  const newFeed = await req;

  const feed = await prisma.feed.create({ data: newFeed });

  if (feed) {
    return new Response(JSON.stringify({ message: "피드가 생성되었습니다." }), {
      status: 201,
    });
  }

  return new Response(JSON.stringify({ message: "중복 아이디 에러" }), {
    status: 401,
  });
}
