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

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") || "";

  const comment = await prisma.comment.delete({
    where: { id },
  });

  if (comment) {
    return new Response(JSON.stringify({ message: "댓글 삭제 성공" }), {
      status: 200,
    });
  }

  return new Response(JSON.stringify({ message: "댓글 삭제 실패" }), {
    status: 400,
  });
}

export async function PATCH(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") || "";

  const req = await request.json();
  const { content } = await req;

  const comment = await prisma.comment.update({
    where: { id },
    data: { content },
  });

  if (comment) {
    return new Response(JSON.stringify({ message: "댓글 수정 성공" }), {
      status: 201,
    });
  }

  return new Response(JSON.stringify({ message: "댓글 수정 실패" }), {
    status: 401,
  });
}
